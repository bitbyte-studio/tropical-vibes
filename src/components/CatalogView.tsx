import React, { useState, useMemo } from 'react';
import { Product, CategoryType } from '../types';
import { ProductCard } from './ProductCard';

interface CatalogViewProps {
  products: Product[];
  selectedCategory: CategoryType | 'Todos';
  onSelectCategory: (category: CategoryType | 'Todos') => void;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');

  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        const matchesCategory =
          selectedCategory === 'Todos' || item.category === selectedCategory;
        const matchesSearch =
          searchQuery.trim() === '' ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  const categories: (CategoryType | 'Todos')[] = [
    'Todos',
    'Hombres',
    'Mujeres',
    'Accesorios',
  ];

  return (
    <div className="w-full py-10 px-5 max-w-[1280px] mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="font-headline text-[36px] md:text-[44px] font-extrabold text-[#251818] tracking-tight mb-3">
          Colección Caribeña 2026
        </h1>
        <p className="font-body text-[16px] text-[#584140]">
          Tejidos de fibra natural, guayaberas bordadas a mano y accesorios para la vida en el sol.
        </p>
      </div>

      {/* Filter and Search controls */}
      <div className="bg-white p-5 rounded-2xl shadow-xs border border-[#e0bfbd]/40 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-5 py-2.5 rounded-full font-bold text-[14px] transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#ae2f34] text-white shadow-md'
                  : 'bg-[#fff0ef] text-[#584140] hover:bg-[#f5dddb]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search and Sort */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Search input */}
          <div className="relative flex-1 sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar guayabera, lino..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#fff8f7] border border-[#8c706f]/30 rounded-xl text-[14px] text-[#251818] placeholder:text-[#584140] outline-none focus:border-[#006a62] focus:ring-1 focus:ring-[#006a62]"
            />
            <svg
              className="w-4 h-4 absolute left-3.5 top-3.5 text-[#584140]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="m21 21-4.35-4.35" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-[#584140] hover:text-[#ae2f34] text-[12px] font-bold"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort Select */}
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as 'featured' | 'price-asc' | 'price-desc' | 'name'
              )
            }
            className="px-4 py-2.5 bg-[#fff8f7] border border-[#8c706f]/30 rounded-xl text-[14px] font-bold text-[#251818] outline-none focus:border-[#006a62]"
          >
            <option value="featured">✨ Destacados</option>
            <option value="price-asc">💵 Precio: Menor a Mayor</option>
            <option value="price-desc">💎 Precio: Mayor a Menor</option>
            <option value="name">🔤 Nombre (A - Z)</option>
          </select>
        </div>
      </div>

      {/* Results Count banner */}
      <div className="flex justify-between items-center mb-6 text-[14px] font-bold text-[#584140]">
        <span>
          Mostrando{' '}
          <strong className="text-[#251818]">{filteredProducts.length}</strong>{' '}
          productos
        </span>
        {selectedCategory !== 'Todos' && (
          <span>
            Categoría: <strong className="text-[#ae2f34]">{selectedCategory}</strong>
          </span>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-16 text-center border border-[#e0bfbd]/40 max-w-xl mx-auto my-12">
          <div className="text-[48px] mb-4">🌴</div>
          <h3 className="font-headline text-[22px] font-bold text-[#251818] mb-2">
            No se encontraron prendas
          </h3>
          <p className="text-[#584140] text-[15px] mb-6">
            No tenemos coincidencias con tu búsqueda actual. Intenta cambiar los filtros o buscar otra prenda.
          </p>
          <button
            onClick={() => {
              onSelectCategory('Todos');
              setSearchQuery('');
            }}
            className="px-6 py-2.5 bg-[#ae2f34] text-white font-bold text-[14px] rounded-full shadow hover:bg-[#8c1520] transition-colors"
          >
            Ver Todas las Prendas
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};
