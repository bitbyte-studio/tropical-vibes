import React from 'react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const freeShippingThreshold = 50;
  const missingForFreeShipping = Math.max(0, freeShippingThreshold - total);
  const progressPercent = Math.min(100, (total / freeShippingThreshold) * 100);

  const handleOrderWhatsApp = () => {
    if (items.length === 0) return;

    const lines = items.map(
      (item) =>
        `• *${item.product.name}* (Talla: ${item.selectedSize}, Color: ${item.selectedColor}) - Cant: ${item.quantity} x $${item.product.price.toFixed(2)}`
    );

    const text = [
      `¡Hola Tropical Vibes! 🌴🌺`,
      `Me interesa realizar el siguiente pedido:`,
      ``,
      ...lines,
      ``,
      `*Total: $${total.toFixed(2)} USD*`,
      total >= freeShippingThreshold
        ? `✅ ¡Califica para Envío Gratis!`
        : `*(Envío estándar)*`,
      ``,
      `¿Tienen disponibilidad y cuáles son los métodos de pago?`,
    ].join('\n');

    const encoded = encodeURIComponent(text);
    window.open(
      `https://api.whatsapp.com/send?phone=13055550199&text=${encoded}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="fixed inset-0 z-55 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fff8f7] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 bg-[#ae2f34] text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-[22px]">🛍️</span>
              <h2 className="font-headline text-[20px] font-bold">
                Tu Carrito Tropical
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Cerrar carrito"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
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

          {/* Free Shipping Progress Banner */}
          <div className="bg-[#fff0ef] p-3.5 border-b border-[#e0bfbd]/40">
            <div className="flex justify-between items-center text-[13px] font-bold text-[#251818] mb-1.5">
              {missingForFreeShipping === 0 ? (
                <span className="text-[#006a62] flex items-center gap-1">
                  <span>🎉</span> ¡Tienes envío GRATIS en tu pedido!
                </span>
              ) : (
                <span>
                  Agrega{' '}
                  <span className="text-[#ae2f34] font-bold">
                    ${missingForFreeShipping.toFixed(2)}
                  </span>{' '}
                  más para <strong>Envío Gratis</strong>
                </span>
              )}
              <span className="text-[#584140] text-[12px]">
                ${total.toFixed(0)} / ${freeShippingThreshold}
              </span>
            </div>
            <div className="w-full bg-[#fbe3e1] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#006a62] h-full transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-[#584140] py-12">
                <div className="w-20 h-20 rounded-full bg-[#ffe9e7] flex items-center justify-center text-[36px] mb-4">
                  🌴
                </div>
                <p className="font-headline text-[18px] font-bold text-[#251818] mb-1">
                  Tu carrito está vacío
                </p>
                <p className="text-[14px] text-[#584140] max-w-xs mb-6">
                  Descubre las prendas de lino, vestidos florales y accesorios de la colección verano.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#ae2f34] text-white font-bold rounded-full shadow hover:bg-[#8c1520] transition-colors text-[14px]"
                >
                  Explorar Catálogo
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-3.5 shadow-xs border border-[#e0bfbd]/40 flex gap-3 items-center"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-20 object-cover rounded-lg bg-[#f5dddb] shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[15px] text-[#251818] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[12px] text-[#584140] mt-0.5">
                      Talla: <span className="font-bold">{item.selectedSize}</span> •{' '}
                      Color: <span className="font-bold">{item.selectedColor}</span>
                    </p>
                    <div className="font-bold text-[15px] text-[#ae2f34] mt-1.5">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-end justify-between h-20">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      aria-label="Eliminar ítem"
                      className="text-[#8c706f] hover:text-[#ba1a1a] p-1 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                      </svg>
                    </button>

                    <div className="flex items-center border border-[#e0bfbd] rounded-lg bg-[#fff8f7]">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center font-bold text-[#584140] hover:bg-[#fbe3e1] transition-colors rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-[13px] font-bold text-[#251818]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center font-bold text-[#584140] hover:bg-[#fbe3e1] transition-colors rounded-r-lg"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with WhatsApp Order button */}
          {items.length > 0 && (
            <div className="p-5 bg-white border-t border-[#e0bfbd]/40 space-y-4 shadow-lg">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[14px] text-[#584140]">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)} USD</span>
                </div>
                <div className="flex justify-between text-[14px] text-[#584140]">
                  <span>Envío</span>
                  <span>
                    {total >= freeShippingThreshold ? (
                      <span className="text-[#006a62] font-bold">¡GRATIS!</span>
                    ) : (
                      '$5.00 USD'
                    )}
                  </span>
                </div>
                <div className="border-t border-[#e0bfbd]/40 pt-2 flex justify-between font-headline text-[18px] font-bold text-[#251818]">
                  <span>Total</span>
                  <span className="text-[#ae2f34]">
                    $
                    {(
                      total + (total >= freeShippingThreshold ? 0 : 5)
                    ).toFixed(2)}{' '}
                    USD
                  </span>
                </div>
              </div>

              <button
                onClick={handleOrderWhatsApp}
                className="w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-[16px] rounded-xl shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 transition-all cursor-pointer"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Pedir por WhatsApp</span>
              </button>

              <button
                onClick={onClearCart}
                className="w-full text-center text-[13px] text-[#8c706f] hover:text-[#ae2f34] transition-colors"
              >
                Vaciar carrito
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
