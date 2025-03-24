import { Brain, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Brain className="h-24 w-24 text-indigo-500" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
          Soluciones con <span className="text-indigo-500">Inteligencia</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Transformamos tu negocio con soluciones digitales inteligentes: desarrollo de software,
          aplicaciones, automatizaciones con IA, chatbots y asistentes virtuales.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
            Comenzar Ahora
          </button>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Conoce Más
          </button>
        </div>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;