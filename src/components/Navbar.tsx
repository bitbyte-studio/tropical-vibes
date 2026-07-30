import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const navClass = ({ isActive }: { isActive: boolean }) =>
  `transition-colors ${
    isActive
      ? 'text-[#ae2f34] border-b-2 border-[#ae2f34] pb-1'
      : 'text-[#584140] hover:text-[#ae2f34]'
  }`;

const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
    isActive
      ? 'bg-[#ff6b6b]/20 text-[#ae2f34]'
      : 'text-[#584140] hover:bg-[#ffe9e7]'
  }`;

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isCatalog = location.pathname.startsWith('/catalogo');

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-[#fff8f7] shadow-sm transition-all duration-300 ease-in-out border-b border-[#e0bfbd]/30">
        <div className="flex justify-between items-center px-5 py-4 max-w-[1280px] mx-auto">
          <Link
            to="/"
            onClick={closeMobile}
            className="font-headline text-[24px] font-bold text-[#ae2f34] tracking-tight flex items-center gap-1.5 focus:outline-none hover:opacity-90 transition-opacity"
          >
            <span>Tropical Vibes</span>
            <span className="text-[22px]" role="img" aria-label="palmera">
              🌴
            </span>
          </Link>

          <div className="hidden md:flex space-x-8 items-center font-bold text-[16px]">
            <NavLink to="/" end className={navClass}>
              Inicio
            </NavLink>
            <NavLink
              to="/catalogo"
              className={() => navClass({ isActive: isCatalog })}
            >
              Catálogo
            </NavLink>
          </div>

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
              onClick={closeMobile}
              className="p-1 rounded-full text-[#584140] hover:bg-[#ffe9e7]"
              aria-label="Cerrar menú"
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
            <NavLink to="/" end className={mobileNavClass} onClick={closeMobile}>
              Inicio
            </NavLink>
            <NavLink
              to="/catalogo"
              className={() => mobileNavClass({ isActive: isCatalog })}
              onClick={closeMobile}
            >
              Catálogo
            </NavLink>
          </nav>

          <div className="p-5 border-t border-[#e0bfbd]/40">
            <Link
              to="/catalogo"
              onClick={closeMobile}
              className="block w-full text-center bg-[#ae2f34] text-white font-bold py-3 rounded-full shadow-md hover:bg-[#8c1520] transition-colors"
            >
              Ver Colección
            </Link>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 z-55 bg-black/30 backdrop-blur-xs md:hidden"
        />
      )}
    </>
  );
};
