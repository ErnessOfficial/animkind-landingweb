import { GoogleGenAI } from '@google/genai';
import { createReadStream, existsSync } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.PORT || 8787);
const MODEL = process.env.GEMINI_MODEL || 'gemini-3-pro-preview';
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 60_000);
const RATE_LIMIT_MAX = Number(process.env.RATE_LIMIT_MAX || 15);
const MAX_BODY_SIZE_BYTES = 100_000;
const CONTACT_APPS_SCRIPT_URL = process.env.CONTACT_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbyTm34c11M5FEablT9P_THH2C5qZPoQv-EbY0pKshGdH3OGo1XWyvTbqttiw1_HaMGK/exec';
const CONTACT_KEYS = [
  'First_Name',
  'Last_Name',
  'Email',
  'Phone_Number',
  'Job_Title',
  'School_Name',
  'School_Type',
  'School_Size',
  'Contact_Method',
  'Your_Message',
  'Publi_Consent',
  'Data_Privacy_Consent',
];
const SYSTEM_INSTRUCTION = `
You are 'Ani', the intelligent mascot and assistant for AnImiKind, an Emotional-AI ecosystem.
Your tone is empathetic, supportive, professional, yet accessible (like a school counselor mixed with a friendly tech guide).
Your goal is to explain the AnImiKind products (App for students, Dashboard for schools, Academy for teachers) and discuss emotional wellbeing generally.
Do not provide medical diagnoses. If a user expresses severe distress, kindly suggest they speak to a trusted adult or professional.
Keep responses concise (under 100 words) as you are in a chat widget.
`;

const thisDir = fileURLToPath(new URL('.', import.meta.url));
const distDir = normalize(join(thisDir, '../dist'));
const publicDir = normalize(join(thisDir, '../public'));
const shouldServeStatic = process.env.NODE_ENV === 'production';
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const rateLimit = new Map();
const mimeByExt = {
  '.css': 'text/css; charset=utf-8',
  '.gif': 'image/gif',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webm': 'video/webm',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const sendJson = (res, status, payload) => {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
  });
  res.end(body);
};

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (rateLimit.get(ip) || []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimit.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimit.set(ip, recent);
  return false;
};

const readJsonBody = async (req) => {
  const chunks = [];
  let size = 0;

  for await (const chunk of req) {
    size += chunk.length;
    if (size > MAX_BODY_SIZE_BYTES) {
      return null;
    }
    chunks.push(chunk);
  }

  if (chunks.length === 0) return {};

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf-8'));
  } catch {
    return undefined;
  }
};

const toSafeHistory = (history) => {
  if (!Array.isArray(history)) return [];
  return history
    .slice(-12)
    .map((entry) => {
      const role = entry?.role === 'model' ? 'model' : 'user';
      const text = typeof entry?.text === 'string' ? entry.text.trim() : '';
      if (!text) return null;
      return { role, parts: [{ text }] };
    })
    .filter(Boolean);
};

const normalizeContactPayload = (body) => {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;

  return CONTACT_KEYS.reduce((acc, key) => {
    const value = body[key];
    acc[key] = typeof value === 'string' ? value.trim() : '';
    return acc;
  }, {});
};

const handleChatRequest = async (req, res) => {
  if (!ai) {
    sendJson(res, 500, { error: 'Missing server configuration: GEMINI_API_KEY' });
    return;
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    sendJson(res, 429, { error: 'Too many requests. Please try again shortly.' });
    return;
  }

  const body = await readJsonBody(req);
  if (body === null) {
    sendJson(res, 413, { error: 'Request payload too large.' });
    return;
  }
  if (body === undefined) {
    sendJson(res, 400, { error: 'Invalid JSON payload.' });
    return;
  }

  const message = typeof body?.message === 'string' ? body.message.trim() : '';
  const lang = body?.lang === 'es' ? 'es' : 'en';
  const history = toSafeHistory(body?.history);

  if (!message) {
    sendJson(res, 400, { error: 'Message is required.' });
    return;
  }

  try {
    const chat = ai.chats.create({
      model: MODEL,
      config: {
        systemInstruction: `${SYSTEM_INSTRUCTION} ${lang === 'es' ? 'Reply in Spanish.' : 'Reply in English.'}`,
      },
      history,
    });

    const result = await chat.sendMessage({ message });
    sendJson(res, 200, { text: result.text || '' });
  } catch (error) {
    console.error('Gemini API error:', error);
    sendJson(res, 502, { error: 'AI service temporarily unavailable.' });
  }
};

const handleContactRequest = async (req, res) => {
  const body = await readJsonBody(req);
  if (body === null) {
    sendJson(res, 413, { error: 'Request payload too large.' });
    return;
  }
  if (body === undefined) {
    sendJson(res, 400, { error: 'Invalid JSON payload.' });
    return;
  }

  const payload = normalizeContactPayload(body);
  if (!payload) {
    sendJson(res, 400, { error: 'Invalid contact payload.' });
    return;
  }

  try {
    const upstream = await fetch(CONTACT_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const text = await upstream.text();
    let data;

    try {
      data = JSON.parse(text);
    } catch {
      data = upstream.ok
        ? { result: 'success', message: text || 'Contact form submitted.' }
        : { result: 'error', message: text || 'Contact endpoint error.' };
    }

    if (!upstream.ok || data?.result !== 'success') {
      sendJson(res, 502, { error: data?.message || 'Unable to submit the form.' });
      return;
    }

    sendJson(res, 200, { ok: true, message: data?.message || 'Contact form submitted.' });
  } catch (error) {
    console.error('Contact form proxy error:', error);
    sendJson(res, 502, { error: 'Contact form service temporarily unavailable.' });
  }
};

const safeFilePath = (urlPath) => {
  const pathOnly = urlPath.split('?')[0];
  const decoded = decodeURIComponent(pathOnly);
  const normalizedPath = normalize(decoded.replace(/^\/+/, ''));
  if (normalizedPath.startsWith('..')) return null;
  return normalizedPath;
};

const serveStaticFile = async (req, res, baseDir) => {
  const relativePath = safeFilePath(req.url || '/');
  if (!relativePath) return false;

  const candidate = normalize(join(baseDir, relativePath));
  if (!candidate.startsWith(baseDir)) return false;
  if (!existsSync(candidate)) return false;

  const fileStat = await stat(candidate);
  if (fileStat.isDirectory()) return false;

  const ext = extname(candidate).toLowerCase();
  const contentType = mimeByExt[ext] || 'application/octet-stream';

  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': fileStat.size,
    'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
  });
  createReadStream(candidate).pipe(res);
  return true;
};

const serveSpaFallback = async (res) => {
  const htmlPath = join(distDir, 'index.html');
  if (!existsSync(htmlPath)) {
    sendJson(res, 404, { error: 'Not Found' });
    return;
  }

  const html = await readFile(htmlPath);
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache',
  });
  res.end(html);
};

const server = createServer(async (req, res) => {
  const method = req.method || 'GET';
  const url = req.url || '/';
  const pathname = url.split('?')[0];

  if (pathname === '/health') {
    sendJson(res, 200, { ok: true });
    return;
  }

  if (pathname === '/api/chat') {
    if (method !== 'POST') {
      sendJson(res, 405, { error: 'Method not allowed.' });
      return;
    }
    await handleChatRequest(req, res);
    return;
  }

  if (pathname === '/api/contact') {
    if (method !== 'POST') {
      sendJson(res, 405, { error: 'Method not allowed.' });
      return;
    }
    await handleContactRequest(req, res);
    return;
  }

  if (!shouldServeStatic) {
    sendJson(res, 404, { error: 'Not Found' });
    return;
  }

  try {
    const servedFromDist = await serveStaticFile(req, res, distDir);
    if (servedFromDist) return;

    const servedFromPublic = await serveStaticFile(req, res, publicDir);
    if (servedFromPublic) return;

    await serveSpaFallback(res);
  } catch (error) {
    console.error('Static server error:', error);
    sendJson(res, 500, { error: 'Server error.' });
  }
});

server.listen(PORT, () => {
  console.log(`API server listening at http://localhost:${PORT}`);
});
