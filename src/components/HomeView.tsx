import React, { useState } from 'react';
import { Product, CategoryType } from '../types';
import { ProductCard } from './ProductCard';
import { HERO_IMAGE_URL, CATEGORY_IMAGES } from '../data/products';

interface HomeViewProps {
  featuredProducts: Product[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onNavigateCategory: (category: CategoryType | 'Todos') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  featuredProducts,
  onSelectProduct,
  onAddToCart,
  onNavigateCategory,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[640px] flex items-center overflow-hidden">
        <img
          src={HERO_IMAGE_URL}
          alt="Pareja caribeña en resort de verano"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 px-5 max-w-[1280px] mx-auto w-full">
          <div className="max-w-xl text-white">
            <span className="inline-block bg-[#ffdf9b] text-[#251a00] font-bold text-[13px] px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6 shadow">
              Colección Verano 2026
            </span>
            <h1 className="font-headline text-[48px] sm:text-[64px] font-extrabold leading-tight tracking-tight mb-6 drop-shadow-md">
              Vibras Caribeñas
            </h1>
            <p className="font-body text-[18px] sm:text-[20px] mb-8 leading-relaxed text-[#f5dddb] drop-shadow">
              Moda resort hecha en lino y fibras naturales. Diseñada para días de sol, brisa marina y noches inolvidables bajo las palmeras.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigateCategory('Todos')}
                className="px-8 py-4 bg-[#ae2f34] text-white font-bold text-[16px] rounded-full shadow-lg hover:bg-[#8c1520] transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Explorar Colección
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=13055550199&text=Hola%20Tropical%20Vibes%20%F0%9F%8C%B4%2C%20quisiera%20consultar%20sobre%20la%20colecci%C3%B3n%20de%20verano."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/90 hover:bg-white text-[#251818] font-bold text-[16px] rounded-full shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>💬 Pedidos WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-20 px-5 max-w-[1280px] mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h4 className="font-bold text-[14px] text-[#ae2f34] uppercase tracking-widest mb-2">
            Esencia Tropical
          </h4>
          <h2 className="font-headline text-[36px] font-extrabold text-[#251818] tracking-tight">
            Categorías Principales
          </h2>
          <p className="font-body text-[16px] text-[#584140] mt-3">
            Explora piezas auténticas del Caribe de lino puro, vestidos florales y sombreros artesanales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hombres */}
          <div
            onClick={() => onNavigateCategory('Hombres')}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            <img
              src={CATEGORY_IMAGES.Hombres}
              alt="Moda Caribeña para Hombres"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[#ffdf9b] text-[13px] font-bold uppercase tracking-wider mb-1">
                Guayaberas & Lino
              </span>
              <h3 className="font-headline text-[28px] font-bold text-white group-hover:text-[#ffdf9b] transition-colors">
                Hombres
              </h3>
              <span className="text-white/90 text-[14px] font-bold mt-2 flex items-center gap-1">
                Ver prendas <span>→</span>
              </span>
            </div>
          </div>

          {/* Mujeres */}
          <div
            onClick={() => onNavigateCategory('Mujeres')}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            <img
              src={CATEGORY_IMAGES.Mujeres}
              alt="Moda Caribeña para Mujeres"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[#ffdf9b] text-[13px] font-bold uppercase tracking-wider mb-1">
                Vestidos & Resort
              </span>
              <h3 className="font-headline text-[28px] font-bold text-white group-hover:text-[#ffdf9b] transition-colors">
                Mujeres
              </h3>
              <span className="text-white/90 text-[14px] font-bold mt-2 flex items-center gap-1">
                Ver vestidos <span>→</span>
              </span>
            </div>
          </div>

          {/* Accesorios */}
          <div
            onClick={() => onNavigateCategory('Accesorios')}
            className="group relative h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
          >
            <img
              src={CATEGORY_IMAGES.Accesorios}
              alt="Accesorios Caribeños"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[#ffdf9b] text-[13px] font-bold uppercase tracking-wider mb-1">
                Palma & Sol
              </span>
              <h3 className="font-headline text-[28px] font-bold text-white group-hover:text-[#ffdf9b] transition-colors">
                Accesorios
              </h3>
              <span className="text-white/90 text-[14px] font-bold mt-2 flex items-center gap-1">
                Ver sombreros <span>→</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Destacados del Verano */}
      <section className="py-16 px-5 max-w-[1280px] mx-auto w-full bg-[#fbe3e1]/30 rounded-3xl mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h4 className="font-bold text-[14px] text-[#ae2f34] uppercase tracking-widest mb-1.5">
              Lo más deseado
            </h4>
            <h2 className="font-headline text-[36px] font-extrabold text-[#251818] tracking-tight">
              Destacados del Verano
            </h2>
          </div>
          <button
            onClick={() => onNavigateCategory('Todos')}
            className="mt-4 md:mt-0 px-6 py-2.5 rounded-full bg-white border border-[#8c706f]/40 font-bold text-[15px] text-[#251818] hover:border-[#ae2f34] hover:text-[#ae2f34] transition-colors shadow-xs"
          >
            Ver catálogo completo (16)
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Caribbean Value Pillars */}
      <section className="py-16 px-5 max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#e0bfbd]/50 shadow-xs flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#ffe9e7] text-[#ae2f34] flex items-center justify-center text-[28px] mb-5">
              🌿
            </div>
            <h3 className="font-headline text-[20px] font-bold text-[#251818] mb-2">
              Lino 100% Transpirable
            </h3>
            <p className="font-body text-[15px] text-[#584140] leading-relaxed">
              Seleccionamos fibras naturales caribeñas que se mantienen frescas bajo las temperaturas más cálidas y ganan suavidad con cada lavado.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e0bfbd]/50 shadow-xs flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#ffe9e7] text-[#ae2f34] flex items-center justify-center text-[28px] mb-5">
              💬
            </div>
            <h3 className="font-headline text-[20px] font-bold text-[#251818] mb-2">
              Atención por WhatsApp
            </h3>
            <p className="font-body text-[15px] text-[#584140] leading-relaxed">
              Atención en vivo con estilistas caribeños para verificar tallas, medidas personalizadas y resolver dudas al instante.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e0bfbd]/50 shadow-xs flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-full bg-[#ffe9e7] text-[#ae2f34] flex items-center justify-center text-[28px] mb-5">
              🌴
            </div>
            <h3 className="font-headline text-[20px] font-bold text-[#251818] mb-2">
              Artesanía Caribeña
            </h3>
            <p className="font-body text-[15px] text-[#584140] leading-relaxed">
              Alforzas de precisión y confección tradicional inspirada en el malecón y las noches bajo las palmeras del Caribe.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="py-16 px-5 max-w-[1280px] mx-auto w-full">
        <div className="bg-gradient-to-r from-[#006a62] to-[#00524c] rounded-3xl p-8 md:p-14 text-white text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-10 -translate-y-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <span className="inline-block bg-[#70f8e8] text-[#007168] font-bold text-[12px] px-3.5 py-1 rounded-full uppercase tracking-wider mb-4">
            Comunidad Tropical
          </span>
          <h2 className="font-headline text-[32px] md:text-[40px] font-bold mb-4">
            Únete al Verano Permanente
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-white/90 max-w-xl mx-auto mb-8">
            Recibe 10% de descuento en tu primera guayabera o vestido caribeño, e invitaciones exclusivas a los nuevos drops.
          </p>

          {subscribed ? (
            <div className="bg-white/15 backdrop-blur-xs p-4 rounded-xl max-w-md mx-auto text-[#70f8e8] font-bold text-[16px]">
              🌺 ¡Bienvenido a la familia Tropical Vibes! Te hemos enviado tu cupón.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico..."
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white text-[#251818] placeholder:text-[#584140] font-medium outline-none focus:ring-2 focus:ring-[#70f8e8]"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-[#ae2f34] hover:bg-[#8c1520] text-white font-bold rounded-full shadow transition-all cursor-pointer whitespace-nowrap"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
