import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Brain, Code, Bot, MessageSquare, Zap, CreditCard, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Chatbot from './components/Chatbot';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ChatsPage from './components/ChatsPage';
import AgentsPage from './components/AgentsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Services />
                <Pricing />
                <Chatbot />
                <Footer />
              </>
            }
          />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;