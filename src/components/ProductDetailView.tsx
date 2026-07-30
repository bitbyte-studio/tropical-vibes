import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { useCart } from '../context/CartContext';
import { catalogPath, whatsappUrl } from '../lib/routes';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  allProducts,
}) => {
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]?.name || 'Estándar'
  );
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0] || 'Única'
  );
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);

  useEffect(() => {
    setSelectedImageIndex(0);
    setSelectedColor(product.colors[0]?.name || 'Estándar');
    setSelectedSize(product.sizes[0] || 'Única');
    setQuantity(1);
    setAddedSuccess(false);
  }, [product.id, product.colors, product.sizes]);

  const activeImage =
    product.images[selectedImageIndex] || product.images[0];

  const relatedProducts = allProducts
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.featured)
    )
    .slice(0, 4);

  const handleAdd = () => {
    addToCart(product, selectedColor, selectedSize, quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  const handleDirectWhatsApp = () => {
    const text = [
      `Hola Tropical Vibes 🌴, me interesa consultar o comprar:`,
      `• *${product.name}*`,
      `• Color: ${selectedColor}`,
      `• Talla: ${selectedSize}`,
      `• Cantidad: ${quantity}`,
      `• Precio Unitario: $${product.price.toFixed(2)} USD`,
      ``,
      `¿Tienen disponibilidad en este color y talla?`,
    ].join('\n');
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full py-10 px-5 max-w-[1280px] mx-auto">
      <Link
        to={catalogPath(product.category)}
        className="inline-flex items-center gap-2 font-bold text-[14px] text-[#584140] hover:text-[#ae2f34] transition-colors mb-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <span>Volver a {product.category}</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        <div className="lg:col-span-7 flex flex-col sm:flex-row gap-4">
          {product.images.length > 1 && (
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible order-2 sm:order-1 shrink-0">
              {product.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`w-20 h-24 rounded-xl overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    selectedImageIndex === idx
                      ? 'border-[#ae2f34] shadow-md scale-105'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} vista ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="flex-1 rounded-3xl overflow-hidden bg-[#f5dddb]/40 relative shadow-md h-[500px] sm:h-[620px] order-1 sm:order-2">
            {product.tag && (
              <span
                className={`absolute top-4 left-4 font-bold text-[13px] px-4 py-1.5 rounded-full z-10 shadow-md uppercase tracking-wider ${
                  product.tagColorClass || 'bg-[#ffdf9b] text-[#251a00]'
                }`}
              >
                {product.tag}
              </span>
            )}
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Link
              to={catalogPath(product.category)}
              className="text-[13px] font-bold text-[#ae2f34] uppercase tracking-widest hover:underline"
            >
              {product.category}
            </Link>
            {product.rating && (
              <span className="flex items-center gap-1 bg-[#ffdf9b] text-[#251a00] text-[12px] font-bold px-2.5 py-0.5 rounded-full">
                ★ {product.rating}
              </span>
            )}
          </div>

          <h1 className="font-headline text-[32px] sm:text-[38px] font-extrabold text-[#251818] mb-3 leading-tight">
            {product.name}
          </h1>

          <div className="font-headline text-[32px] font-bold text-[#ae2f34] mb-6">
            ${product.price.toFixed(2)}{' '}
            <span className="text-[15px] text-[#584140] font-normal">USD</span>
          </div>

          <p className="font-body text-[16px] text-[#584140] leading-relaxed mb-8">
            {product.description}
          </p>

          {product.colors.length > 0 && (
            <div className="mb-6">
              <label className="block text-[13px] font-bold text-[#251818] uppercase tracking-wider mb-3">
                Color Seleccionado:{' '}
                <span className="text-[#ae2f34]">{selectedColor}</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full border transition-all cursor-pointer ${
                      selectedColor === color.name
                        ? 'border-[#006a62] bg-[#70f8e8]/20 shadow-xs ring-2 ring-[#006a62]'
                        : 'border-[#e0bfbd] bg-white hover:border-[#8c706f]'
                    }`}
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-black/15 shadow-2xs"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="font-bold text-[14px] text-[#251818]">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes.length > 0 && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <label className="text-[13px] font-bold text-[#251818] uppercase tracking-wider">
                  Talla: <span className="text-[#ae2f34]">{selectedSize}</span>
                </label>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[52px] px-4 py-2.5 rounded-xl font-bold text-[15px] transition-all cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#ae2f34] text-white shadow-md'
                        : 'bg-white text-[#251818] border border-[#e0bfbd] hover:border-[#8c706f]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-[#e0bfbd] rounded-xl bg-white h-14 px-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-full flex items-center justify-center font-bold text-[18px] text-[#584140] hover:text-[#ae2f34]"
              >
                -
              </button>
              <span className="w-10 text-center font-bold text-[16px] text-[#251818]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-full flex items-center justify-center font-bold text-[18px] text-[#584140] hover:text-[#ae2f34]"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={`flex-1 h-14 rounded-xl font-bold text-[16px] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
                addedSuccess
                  ? 'bg-[#006a62] text-white'
                  : 'bg-[#ae2f34] hover:bg-[#8c1520] text-white'
              }`}
            >
              {addedSuccess ? (
                <span>✓ ¡Añadido al Carrito!</span>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                    <path d="M3 6h18" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span>Añadir al Carrito</span>
                </>
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={handleDirectWhatsApp}
            className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-[16px] rounded-xl shadow flex items-center justify-center gap-2.5 transition-all cursor-pointer mb-8"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>Consultar este producto en WhatsApp</span>
          </button>

          <div className="bg-white p-6 rounded-2xl border border-[#e0bfbd]/40">
            <h4 className="font-bold text-[15px] text-[#251818] mb-3">
              Detalles del Producto y Cuidado
            </h4>
            <ul className="space-y-2 text-[14px] text-[#584140]">
              {product.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#006a62] font-bold mt-0.5">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-[#e0bfbd]/30 grid grid-cols-2 gap-3 text-[13px] text-[#584140]">
              <div className="flex items-center gap-2">
                <span className="text-[#ae2f34]">✓</span> Envío desde Miami, FL
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#ae2f34]">✓</span> Devolución fácil en 15
                días
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-20 pt-10 border-t border-[#e0bfbd]/40">
          <h3 className="font-headline text-[28px] font-bold text-[#251818] mb-8 text-center">
            También te podría gustar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
