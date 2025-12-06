import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const apiKey = process.env.API_KEY || ''; // Ensure this is set in your environment

const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are 'Ani', the intelligent mascot and assistant for AnImiKind, an Emotional-AI ecosystem. 
Your tone is empathetic, supportive, professional, yet accessible (like a school counselor mixed with a friendly tech guide).
Your goal is to explain the AnImiKind products (App for students, Dashboard for schools, Academy for teachers) and discuss emotional wellbeing generally.
Do not provide medical diagnoses. If a user expresses severe distress, kindly suggest they speak to a trusted adult or professional.
Keep responses concise (under 100 words) as you are in a chat widget.
`;

export const sendMessageToGemini = async (history: ChatMessage[], message: string, lang: 'en' | 'es'): Promise<string> => {
  try {
    const modelId = "gemini-3-pro-preview";
    
    // Construct the prompt context based on history
    // We are not using the full chat history object of the SDK here for simplicity in this frontend-only demo, 
    // but rather constructing a prompt chain or using generateContent for single turns with context if needed.
    // For a robust chat, we use the chat feature.
    
    const chat = ai.chats.create({
      model: modelId,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION + (lang === 'es' ? " Reply in Spanish." : " Reply in English."),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: message
    });

    return result.text || "";

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    throw error;
  }
};
