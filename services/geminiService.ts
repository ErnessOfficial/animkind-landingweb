import { ChatMessage } from '../types';

interface ChatApiResponse {
  text?: string;
  error?: string;
}

const CHAT_ENDPOINT = '/api/chat';
const REQUEST_TIMEOUT_MS = 20_000;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  message: string,
  lang: 'en' | 'es'
): Promise<string> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(CHAT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ history, message, lang }),
      signal: controller.signal,
    });

    const payload = (await response.json()) as ChatApiResponse;
    if (!response.ok) {
      throw new Error(payload.error || 'Chat service error');
    }

    return payload.text || '';
  } finally {
    clearTimeout(timeout);
  }
};
