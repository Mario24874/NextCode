import React, { useEffect } from 'react';

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

const Chatbot: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.AgentInitializer) {
        window.AgentInitializer.init({
          agentRenderURL: 'https://agent.jotform.com/0195cab916b372fdb3e6b54a164bada236d2',
          rootId: 'JotformAgent-0195cab916b372fdb3e6b54a164bada236d2',
          formID: '0195cab916b372fdb3e6b54a164bada236d2',
          queryParams: ['skipWelcome=1', 'maximizable=1'],
          domain: 'https://www.jotform.com',
          isDraggable: false,
          background: 'linear-gradient(180deg, #0F53B4 0%, #0F53B4 100%)',
          buttonBackgroundColor: '#246506',
          buttonIconColor: '#FFFFFF',
          variant: false,
          customizations: {
            greeting: 'Yes',
            greetingMessage: 'Hola, soy Bárbara, ¿cómo puedo ayudarle?',
            openByDefault: 'No',
            pulse: 'Yes',
            position: 'left',
            autoOpenChatIn: '0',
            showHistory: 'No',
            showBranding: 'No',
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
    <div
      id="JotformAgent-0195cab916b372fdb3e6b54a164bada236d2"
      className="fixed bottom-10 left-10 z-40"
    />
  );
};

export default Chatbot;