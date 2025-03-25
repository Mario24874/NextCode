import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-xl font-bold text-white">NextCode Solutions</span>
            </div>
            <p className="mb-4">
              Transformando negocios con soluciones digitales inteligentes.
              Innovación y tecnología al servicio de tu empresa.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Inicio</a></li>
              <li><a href="#" className="hover:text-white">Servicios</a></li>
              <li><a href="#" className="hover:text-white">Planes</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>info@nextcode.com</li>
              <li>+58 (412) 6504208</li>
              <li>+58 (412) 8876344</li>
              <li>+1  (555) 1234567</li>
              <li>Valencia, Venezuela</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} NextCode Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;