import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      };
    }
  }
  interface Window {
    AgentInitializer?: {
      initModalView: (config: {
        rootId: string;
        formID: string;
        queryParams: string[];
        domain: string;
        isInitialOpen: boolean;
        isDraggable: boolean;
        variant: boolean;
        isVoice: boolean;
      }) => void;
    };
  }
}

const AgentsPage = () => {
  useEffect(() => {
    // Cargar script de ElevenLabs
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      const elevenLabsScript = document.createElement('script');
      elevenLabsScript.src = 'https://elevenlabs.io/convai-widget/index.js';
      elevenLabsScript.async = true;
      elevenLabsScript.type = 'text/javascript';
      document.body.appendChild(elevenLabsScript);
    }

    // Cargar script de Jotform
    if (!document.querySelector('script[src="https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js"]')) {
      const jotformScript = document.createElement('script');
      jotformScript.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
      jotformScript.async = true;
      jotformScript.type = 'text/javascript';
      document.body.appendChild(jotformScript);
    }

    return () => {
      const elevenLabsScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
      const jotformScript = document.querySelector('script[src="https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js"]');
      if (elevenLabsScript && document.body.contains(elevenLabsScript)) {
        document.body.removeChild(elevenLabsScript);
      }
      if (jotformScript && document.body.contains(jotformScript)) {
        document.body.removeChild(jotformScript);
      }
    };
  }, []);

  const handleEliasClick = () => {
    if (window.AgentInitializer) {
      window.AgentInitializer.initModalView({
        rootId: 'JotformAgent-0195d30edf5678878313c6b3c292df8116ca',
        formID: '0195d30edf5678878313c6b3c292df8116ca',
        queryParams: ['skipWelcome=1'],
        domain: 'https://www.jotform.com',
        isInitialOpen: true,
        isDraggable: false,
        variant: false,
        isVoice: true,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">Nuestros Agentes</h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Descubre nuestros agentes conversacionales avanzados, impulsados por IA para ofrecer asistencia personalizada.
        </p>
        <div className="text-white mb-8">
          <p>Ejemplo de Agente: ElevenLabs Conversacional - Botón flotante a la derecha</p>
          <p>Ejemplo de Agente: Elías (Jotform) - Botón en la esquina inferior izquierda</p>
        </div>
        <RouterLink
          to="/"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Regresar
        </RouterLink>
      </div>
      <div className="fixed top-20 right-6 md:top-4 md:right-4 z-50">
        <elevenlabs-convai agent-id="Aik3gpbr6ipxdLFAKBTu"></elevenlabs-convai>
      </div>
      <button
        className="fixed bottom-10 left-10 z-50 uppercase text-sm cursor-pointer px-4 py-3 font-semibold bg-[#0075E3] border border-[#0075E3] text-white rounded hover:bg-[#005BB5] transition-colors"
        onClick={handleEliasClick}
      >
        Elías: Asistente de Soluciones
      </button>
    </div>
  );
};

export default AgentsPage;