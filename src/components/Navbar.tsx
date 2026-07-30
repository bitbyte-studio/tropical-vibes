import React, { useState } from 'react';
import { ViewType, CategoryType } from '../types';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType, category?: CategoryType | 'Todos') => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewType, category?: CategoryType | 'Todos') => {
    onNavigate(view, category);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-[#fff8f7] shadow-sm transition-all duration-300 ease-in-out border-b border-[#e0bfbd]/30">
        <div className="flex justify-between items-center px-5 py-4 max-w-[1280px] mx-auto">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="font-headline text-[24px] font-bold text-[#ae2f34] tracking-tight flex items-center gap-1.5 focus:outline-none hover:opacity-90 transition-opacity"
          >
            <span>Tropical Vibes</span>
            <span className="text-[22px]" role="img" aria-label="palmera">
              🌴
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center font-bold text-[16px]">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${
                currentView === 'home'
                  ? 'text-[#ae2f34] border-b-2 border-[#ae2f34] pb-1'
                  : 'text-[#584140] hover:text-[#ae2f34]'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'Todos')}
              className={`transition-colors ${
                currentView === 'catalog'
                  ? 'text-[#ae2f34] border-b-2 border-[#ae2f34] pb-1'
                  : 'text-[#584140] hover:text-[#ae2f34]'
              }`}
            >
              Catálogo
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'Hombres')}
              className="text-[#584140] hover:text-[#ae2f34] transition-colors"
            >
              Hombres
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'Mujeres')}
              className="text-[#584140] hover:text-[#ae2f34] transition-colors"
            >
              Mujeres
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'Accesorios')}
              className="text-[#584140] hover:text-[#ae2f34] transition-colors"
            >
              Accesorios
            </button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenCart}
              aria-label="Carrito de compras"
              className="relative p-2 text-[#ae2f34] hover:text-[#ffb3b0] transition-colors rounded-full hover:bg-[#ffe9e7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ae2f34] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#251818] p-2 rounded-lg hover:bg-[#ffe9e7]"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-y-0 left-0 z-60 w-64 bg-[#fff8f7] shadow-2xl flex flex-col md:hidden animate-in slide-in-from-left duration-300">
          <div className="p-5 border-b border-[#e0bfbd]/40 flex justify-between items-center">
            <div>
              <div className="font-headline text-[20px] font-bold text-[#ae2f34]">
                Tropical Vibes
              </div>
              <div className="text-[12px] text-[#584140]">Moda Caribeña</div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-full text-[#584140] hover:bg-[#ffe9e7]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 p-4 flex flex-col gap-2 font-bold text-[15px]">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                currentView === 'home'
                  ? 'bg-[#ff6b6b]/20 text-[#ae2f34]'
                  : 'text-[#584140] hover:bg-[#ffe9e7]'
              }`}
            >
              <span>🏠</span> Inicio
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'Todos')}
              className={`flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                currentView === 'catalog'
                  ? 'bg-[#ff6b6b]/20 text-[#ae2f34]'
                  : 'text-[#584140] hover:bg-[#ffe9e7]'
              }`}
            >
              <span>🛍️</span> Todos los Productos
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'Hombres')}
              className="flex items-center gap-3 text-[#584140] p-3 hover:bg-[#ffe9e7] rounded-lg text-left transition-colors"
            >
              <span>👕</span> Hombres
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'Mujeres')}
              className="flex items-center gap-3 text-[#584140] p-3 hover:bg-[#ffe9e7] rounded-lg text-left transition-colors"
            >
              <span>👗</span> Mujeres
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'Accesorios')}
              className="flex items-center gap-3 text-[#584140] p-3 hover:bg-[#ffe9e7] rounded-lg text-left transition-colors"
            >
              <span>👜</span> Accesorios
            </button>
          </nav>

          <div className="p-5 border-t border-[#e0bfbd]/40">
            <button
              onClick={() => handleNavClick('catalog', 'Todos')}
              className="w-full bg-[#ae2f34] text-white font-bold py-3 rounded-full shadow-md hover:bg-[#8c1520] transition-colors"
            >
              Ver Colección
            </button>
          </div>
        </div>
      )}

      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-55 bg-black/30 backdrop-blur-xs md:hidden"
        />
      )}
    </>
  );
};
