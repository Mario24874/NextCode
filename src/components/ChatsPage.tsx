import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

declare global {
  interface Window {
    AgentInitializer?: {
      init: (config: {
        agentRenderURL: string;
        rootId: string;
        formID: string;
        queryParams: string[];
        domain: string;
        isDraggable: boolean;
        background: string;
        buttonBackgroundColor: string;
        buttonIconColor: string;
        variant: boolean;
        customizations: Record<string, string>;
        isVoice?: boolean;
      }) => void;
    };
  }
}

const ChatsPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          agentRenderURL: 'https://agent.jotform.com/0195d30edf5678878313c6b3c292df8116ca',
          rootId: 'JotformAgent-0195d30edf5678878313c6b3c292df8116ca',
          formID: '0195d30edf5678878313c6b3c292df8116ca',
          queryParams: ['skipWelcome=1', 'maximizable=1'],
          domain: 'https://www.jotform.com',
          isDraggable: false,
          background: 'linear-gradient(180deg, #0F53B4 0%, #0F53B4 100%)',
          buttonBackgroundColor: '#246506',
          buttonIconColor: '#FFFFFF',
          variant: false,
          customizations: {
            greeting: 'Yes',
            greetingMessage: 'Hola, ¿cómo puedo ayudarle?',
            openByDefault: 'No',
            pulse: 'Yes',
            position: 'right',
            autoOpenChatIn: '0',
          },
          isVoice: undefined,
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">Nuestros Chatbots</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Explora nuestra colección de chatbots diseñados para automatizar y mejorar la interacción con tus clientes.
        </p>
        <div className="text-white mb-8">
          <p>Ejemplo de Chatbot: Elias (Jotform) - Botón a la derecha</p>
        </div>
        <RouterLink
          to="/"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Regresar
        </RouterLink>
      </div>
      <div
        id="JotformAgent-0195d30edf5678878313c6b3c292df8116ca"
        className="fixed bottom-10 right-10 z-40"
      />
    </div>
  );
};

export default ChatsPage;