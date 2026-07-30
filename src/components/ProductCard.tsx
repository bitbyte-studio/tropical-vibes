import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart,
}) => {
  return (
    <div
      onClick={() => onSelect(product)}
      className="bg-white rounded-xl shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer relative overflow-hidden border border-[#e0bfbd]/40"
    >
      {/* Image container */}
      <div className="w-full h-80 rounded-t-xl overflow-hidden relative bg-[#f5dddb]/40">
        {product.tag && (
          <span
            className={`absolute top-3 left-3 font-bold text-[12px] px-3 py-1 rounded-full z-10 shadow-xs uppercase tracking-wider ${
              product.tagColorClass || 'bg-[#ffdf9b] text-[#251a00]'
            }`}
          >
            {product.tag}
          </span>
        )}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="font-bold text-[12px] text-[#584140] mb-1 uppercase tracking-wider">
          {product.category}
        </h4>
        <h3 className="font-headline text-[20px] font-bold text-[#251818] mb-4 leading-tight group-hover:text-[#ae2f34] transition-colors">
          {product.name}
        </h3>
        <div className="mt-auto flex justify-between items-center pt-2 border-t border-[#e0bfbd]/30">
          <span className="font-headline text-[22px] font-bold text-[#251818]">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={(e) => onAddToCart(product, e)}
            aria-label={`Añadir ${product.name} al carrito`}
            className="w-10 h-10 rounded-full bg-[#f5dddb] flex items-center justify-center text-[#ae2f34] group-hover:bg-[#ae2f34] group-hover:text-white transition-all shadow-xs hover:scale-110 active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
