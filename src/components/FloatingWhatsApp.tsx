import React, { useState } from 'react';

interface FloatingWhatsAppProps {
  productName?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ productName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(
    productName
      ? `Hola Tropical Vibes 🌴, me interesa consultar sobre: ${productName}. ¿Tienen disponibilidad?`
      : 'Hola Tropical Vibes 🌴, me gustaría consultar por la nueva colección Verano 2026.'
  );

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=13055550199&text=${encoded}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-45 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group active:scale-95 cursor-pointer"
        aria-label="Chatear por WhatsApp"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="font-button-text text-[15px] font-bold whitespace-nowrap overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 ml-0 group-hover:ml-1">
          Chatea con nosotros
        </span>
      </button>

      {/* Quick WhatsApp Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#fff8f7] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-[#e0bfbd]/40 animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="bg-[#006a62] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-[22px]">
                  🌴
                </div>
                <div>
                  <div className="font-bold text-[16px]">Tropical Vibes Miami</div>
                  <div className="text-[12px] opacity-85 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block"></span>
                    En línea • Respuesta rápida
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1"
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

            {/* Body */}
            <div className="p-5 space-y-4">
              <div className="bg-[#fff0ef] p-3.5 rounded-xl text-[14px] text-[#251818] border border-[#fbe3e1]">
                <p className="font-medium text-[#ae2f34] mb-1">¡Hola caribeño! 🌺</p>
                <p>
                  Escríbenos tu duda o pedido y un estilista de Tropical Vibes te atenderá al instante por WhatsApp.
                </p>
              </div>

              <div>
                <label className="block text-[12px] font-bold text-[#584140] uppercase mb-1.5">
                  Tu Mensaje:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full p-3 bg-white border border-[#8c706f]/40 rounded-xl text-[14px] text-[#251818] focus:border-[#006a62] focus:ring-1 focus:ring-[#006a62] outline-none transition-all resize-none"
                />
              </div>
            </div>

            {/* Footer buttons */}
            <div className="p-4 bg-[#fff0ef]/60 flex items-center justify-end gap-3 border-t border-[#e0bfbd]/30">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg font-bold text-[14px] text-[#584140] hover:bg-[#f5dddb] transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSend}
                className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-[14px] shadow flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Abrir WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
