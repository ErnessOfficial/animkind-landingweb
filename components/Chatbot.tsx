import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Language, LanguageContent } from '../types';

interface ChatbotProps {
  lang: Language;
  content: LanguageContent['chat'];
}

const Chatbot: React.FC<ChatbotProps> = ({ lang, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial greeting
    if (messages.length === 0 && isOpen) {
      setMessages([{ role: 'model', text: content.intro }]);
    }
  }, [isOpen, content.intro, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Pass the *previous* messages as history, not including the one just added effectively (SDK handles current prompt)
      // Actually, for the local state we add it, for the API we pass history up to that point usually, 
      // but our service wrapper takes the full history including the new user message context if we structured it that way.
      // However, the `sendMessageToGemini` creates a NEW chat instance every time in this stateless demo.
      // To keep state, we pass the `messages` array including the `userMsg`.
      
      const responseText = await sendMessageToGemini([...messages, userMsg], input, lang); // Sending history + current input is redundant in chat.create logic but acceptable for context.
      
      const botMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: content.error }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-[#1d4c73]/20 flex flex-col h-[500px] transition-all duration-300 ease-in-out transform origin-bottom-right">
          {/* Header */}
          <div className="bg-[#1d4c73] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AnImiKind AI</h3>
                <span className="text-xs text-[#f1f4f4]/80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#0dc383] rounded-full animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#f1f4f4] scrollbar-hide space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#0dc383] text-white rounded-br-none'
                      : 'bg-white text-[#1d4c73] shadow-sm border border-[#1d4c73]/10 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-[#1d4c73]/60 px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-[#1d4c73]/10">
                  <Loader2 size={16} className="animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-[#1d4c73]/10">
            <div className="flex items-center gap-2 bg-[#f1f4f4] rounded-full px-4 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={content.placeholder}
                className="flex-1 bg-transparent outline-none text-sm text-[#1e2c29] placeholder-[#1d4c73]/40"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className={`p-1.5 rounded-full transition-colors ${
                  input.trim() 
                    ? 'text-[#0dc383] hover:bg-[#0dc383]/10' 
                    : 'text-[#1d4c73]/20 cursor-not-allowed'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-[10px] text-center text-[#1d4c73]/40 mt-2">
              Powered by Google Gemini 3 Pro
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-[#1e2c29] rotate-90 opacity-0 pointer-events-none' : 'bg-[#0dc383] hover:bg-[#0bb075] rotate-0 opacity-100'
        } text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 group`}
      >
        <MessageSquare size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium text-sm">
          {content.trigger}
        </span>
      </button>
    </div>
  );
};

export default Chatbot;