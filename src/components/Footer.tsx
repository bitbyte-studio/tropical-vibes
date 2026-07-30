import React from 'react';
import { ViewType, CategoryType } from '../types';

interface FooterProps {
  onNavigate: (view: ViewType, category?: CategoryType | 'Todos') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#3b2d2c] text-[#ffffff] py-16 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-5 max-w-[1280px] mx-auto">
        {/* Brand statement */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-headline text-[24px] font-bold text-white mb-6">
            Tropical Vibes 🌴
          </h2>
          <p className="font-body text-[16px] text-[#f5dddb] opacity-90 max-w-sm mb-8 leading-relaxed">
            Diseñando el alma del Caribe con sofisticación de alta moda y espíritu juguetón. Moda Caribeña para almas aventureras.
          </p>
          <div className="flex space-x-3">
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#584140] flex items-center justify-center text-white hover:bg-[#ffdad8] hover:text-[#410006] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="#email"
              aria-label="Correo"
              className="w-10 h-10 rounded-full bg-[#584140] flex items-center justify-center text-white hover:bg-[#ffdad8] hover:text-[#410006] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="#share"
              aria-label="Compartir"
              className="w-10 h-10 rounded-full bg-[#584140] flex items-center justify-center text-white hover:bg-[#ffdad8] hover:text-[#410006] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" x2="12" y1="2" y2="15" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-[14px] text-white mb-4 uppercase tracking-wider">
            Enlaces Rápidos
          </h4>
          <ul className="space-y-3 font-body text-[16px]">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="text-[#f5dddb] hover:text-[#ffdf9b] transition-colors opacity-90 hover:opacity-100"
              >
                Sobre Nosotros
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('catalog', 'Todos')}
                className="text-[#f5dddb] hover:text-[#ffdf9b] transition-colors opacity-90 hover:opacity-100"
              >
                Colecciones
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('catalog', 'Todos')}
                className="text-[#f5dddb] hover:text-[#ffdf9b] transition-colors opacity-90 hover:opacity-100"
              >
                Preguntas Frecuentes
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="text-[#f5dddb] hover:text-[#ffdf9b] transition-colors opacity-90 hover:opacity-100"
              >
                Términos y Condiciones
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-[14px] text-white mb-4 uppercase tracking-wider">
            Contacto
          </h4>
          <p className="font-body text-[16px] text-[#f5dddb] opacity-90 flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Calle Ocho, Miami, FL</span>
          </p>
          <p className="font-body text-[16px] text-[#f5dddb] opacity-90 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>hola@tropicalvibes.com</span>
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-[#584140] mt-12 mb-6 opacity-30 max-w-[1280px] mx-auto"></div>
      <div className="text-center px-5 font-body text-[14px] text-[#f5dddb] opacity-70">
        © 2026 Tropical Vibes. Todos los derechos reservados.
      </div>
    </footer>
  );
};
