import { useState } from 'react';
import { Brain, Code, Bot, MessageSquare, Zap, CreditCard, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Chatbot from './components/Chatbot';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
      
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-50"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chatbot Modal */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl z-50">
          <Chatbot onClose={() => setIsChatOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default App;