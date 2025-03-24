import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ChatbotProps {
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: '¡Hola! Soy el asistente virtual de NextCode Solutions. ¿En qué puedo ayudarte?', isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isBot: false }]);

    // Simulate bot response (replace with actual AI integration)
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: 'Gracias por tu mensaje. Un representante se pondrá en contacto contigo pronto.',
        isBot: true
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="h-[500px] flex flex-col">
      <div className="bg-indigo-600 p-4 rounded-t-lg flex justify-between items-center">
        <h3 className="text-white font-semibold">Chat con NextCode</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={20} />
        </button>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${msg.isBot ? 'text-left' : 'text-right'}`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                msg.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-indigo-600 text-white'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          />
          <button
            onClick={handleSend}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;