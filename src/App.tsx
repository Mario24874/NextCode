import { useEffect } from 'react';
import { Brain, Code, Bot, MessageSquare, Zap, CreditCard, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Chatbot from './components/Chatbot';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      };
    }
  }
}

function App() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elevenlabs.io/convai-widget/index.js';
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <div className="fixed top-20 right-6 z-40">
        <elevenlabs-convai agent-id="Aik3gpbr6ipxdLFAKBTu"></elevenlabs-convai>
      </div>
      <Hero />
      <Services />
      <Pricing />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;