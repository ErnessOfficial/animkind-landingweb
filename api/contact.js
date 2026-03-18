const CONTACT_APPS_SCRIPT_URL = process.env.CONTACT_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwZA37VTi-tYB9bvqS0oeFxjmmX2SsmcmRHXCdquuYpA7YyDvZjwya-kmeXv6EMkv7m/exec';

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

const sendJson = (res, status, payload) => {
  res.status(status).json(payload);
};

const deriveUpstreamError = (status, text) => {
  if (status === 401 || status === 403) {
    return 'The Google Apps Script endpoint is not publicly accessible. Redeploy it as a Web App with access set to Anyone before using the contact form.';
  }

  if (typeof text === 'string' && /<html|<!doctype/i.test(text)) {
    return 'The contact endpoint returned an invalid HTML page instead of JSON. Please verify the Apps Script deployment URL.';
  }

  return text || 'Unable to submit the form.';
};

const normalizePayload = (body) => {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;

  return CONTACT_KEYS.reduce((acc, key) => {
    const value = body[key];
    acc[key] = typeof value === 'string' ? value.trim() : '';
    return acc;
  }, {});
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    sendJson(res, 405, { error: 'Method not allowed.' });
    return;
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body || '{}');
    } catch {
      sendJson(res, 400, { error: 'Invalid JSON payload.' });
      return;
    }
  }

  const payload = normalizePayload(body);
  if (!payload) {
    sendJson(res, 400, { error: 'Invalid JSON payload.' });
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
        : { result: 'error', message: deriveUpstreamError(upstream.status, text) };
    }

    if (!upstream.ok || data?.result !== 'success') {
      sendJson(res, 502, { error: deriveUpstreamError(upstream.status, data?.message) });
      return;
    }

    sendJson(res, 200, { ok: true, message: data?.message || 'Contact form submitted.' });
  } catch (error) {
    sendJson(res, 502, {
      error: error instanceof Error ? error.message : 'Unable to reach the contact endpoint.',
    });
  }
}
