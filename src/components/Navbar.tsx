import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">NextCode Solutions</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink to="home">Inicio</NavLink>
              <NavLink to="services">Servicios</NavLink>
              <NavLink to="pricing">Planes</NavLink>
              <NavLink to="contact">Contacto</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
  >
    {children}
  </Link>
);

export default Navbar;