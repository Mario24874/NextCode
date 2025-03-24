import { Code, Bot, Zap, Brain } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-12 w-12 text-indigo-500" />,
    title: 'Desarrollo de Software',
    description: 'Creamos soluciones personalizadas que impulsan tu negocio al siguiente nivel.'
  },
  {
    icon: <Bot className="h-12 w-12 text-indigo-500" />,
    title: 'Chatbots Inteligentes',
    description: 'Automatiza tu atención al cliente con asistentes virtuales 24/7.'
  },
  {
    icon: <Zap className="h-12 w-12 text-indigo-500" />,
    title: 'Automatización con IA',
    description: 'Optimiza tus procesos con el poder de la inteligencia artificial.'
  },
  {
    icon: <Brain className="h-12 w-12 text-indigo-500" />,
    title: 'Asistentes Virtuales',
    description: 'Potencia tu productividad con asistentes basados en IA.'
  }
];

const Services = () => {
  return (
    <div id="services" className="py-24 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas avanzadas para impulsar tu negocio hacia el futuro
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-700 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;