import { Product } from '../types';

export const HERO_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC-SRsS0TNolaR7vjHusxGOgGOXeXll_PM7Pmpalb9iUKHU3v3ajGCdqJ20-tDHkuXHs8MPAViuejfx0Dt8tJEKtIV4PPFcuHDInezA-b6MZzAxpzD9XWb88EeIUqf26YlBwoiMI1Z5zmRKXgWl5rCygUP4Yl2tzVxzo_28o08Wy-Xdm7uzY4Ma1SV8Qgz51J8RzH0QrlhkZLypiHNsFNNs3cf8EPL6isgajS9yJYHA21HjZCv8Lq9dPunqur2fxeRc1t_8o8IiDOI';

export const CATEGORY_IMAGES = {
  Hombres:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDiIuKG3rKLQ7Mrad1vi3zp_GEOGvAeGsbNYlpnNR6BdWAVfwP-J9jfcnIoTFeylCQb7kP56zA4lrIw-CMRbjutL7-rgMLh0Bh1rF0Tox181_yWyeMHShsKdCp1ycVC9d5ETV3X8nFJKLa39_oRrYvAp814fZQigCXqpJgJmNOToJHzS5b6qHTq2xKWDMe7r9v-V6SDZ4Rd5uQNl9MRRDJKMHwNSqc-H8Nnh5GaaXupsrxzdOfD3nNMJhJmMRZeARc6_-VYC1TKEOA',
  Mujeres:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA2fI_kMOq5A8uaaOHI6fHnmBmAVVM-cUmSyq1dsU415MaY0QVmKNGbj9AFHLZ7IoJH9nWEYc3XnJ_GGnb6G9l_2qPii4dz_gJbDMgVl_fW-xEDotKkgm2UDRww1Js2z1u7Ft-NvRrORg3VQEbXBpyGCeA8sIpvKYv03y3RyQ4lD8LvqDtJuq0CVUJxsT-BAVTTvHFTFzrwwZHX1LsjV9SsDt43AcyRSH3aUxnu8XgkEJHBGMMQlU_mWsh187ftMeSqLgc_mq5BulE',
  Accesorios:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBSyr-ShKScbOl9Hebks5EmwNg0sF1dujDoh23BweTeGS82ZcXyAFokKec4_PHEITkNjhErfjtvI7hrjxs-KQq_8bViiLpw0pt8a5rvw47dgmBkx8_k_o7wy5-khAL_zvu3GlgSJyQCUWgYBMK6Q_aV6sTADikDUtS1-NKKUxP94Vmz4eiTyBUFWz000IT-vLzMKl3xwI8tFKVG9UyQoU8-MJS62INKIwTFTj1bPG6Ir28XFczhxGXiuOLXZQK8ay79ukU3n8lGL80',
};

export const PRODUCTS: Product[] = [
  {
    id: 'guayabera-clasica',
    name: 'Guayabera Clásica',
    category: 'Hombres',
    price: 25.0,
    description:
      'La esencia del Caribe en cada hilo. Esta guayabera clásica de lino ofrece comodidad y elegancia atemporal. Perfecta para tardes soleadas o eventos nocturnos formales bajo las palmeras.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCFGW23vLASQH0X1DaNsmB15FjAOFY8SdSuWDX1Bad_p_YTlSv4wokqN_M22R0Js_MHBUapXAYmxaXKm6rRM5jvMBokBqUaEmgGziESKWzM7Z9M493wpPJxACyvDoKVN54VRiN9KQAph-mOJBj5e0PMCyUgP3x9heJJPFuxfCaI1PZfbm6neINb_9_ZGsPP8gg0EImeOoZrZFakipK1S0lxuF6DMTfDH5KFfYJgkSBaKbOi3GQP2Hoglqkv9a8Ejq0fJ9L5TOzsl_E',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASCYgiIcjZtqmHVcfrQimO4_AdrawW0fRtcSRkjrr_OQXyBOHkMR4eerWOapaPg3NrnNgQXAzgAsNGmiQevmSW9PsRLLKoJnTPwhXciwebWBdUKf5TUsBpEH2UfeeRj5bWVocxjahfh6dTJTwfG2821RYDAOT5kJQM7hY3bI3cCLTr7DDXKxDz8Y3cW1TuCN-VH-_kFwcLc1WhZ1wjtE3OWKDcsPKcaPDHiLExYNLyfpWT6nxI9pSWTgETq2Kln32QeLv6He5bTIc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzwXLdmzfEAiadJPmeOPdCahUx2l2TnV4zU4h7T0XJwGbTsr9i0G_WDMLO_Wndzoz6r-qyKQ-8mduHfuN3tqUfMrBHL855j-Ym8jSlXFgN-IQz3vI6YcwnBZM76x1paiCXc34H_1EMvHzx-dieRIL_BPdqj1crDfGVOdV5dWopMQ_-ygTK_Vxu8fTcpZIggZCv2FpKeXZpdw2U1YKy0LGTD4ZVbd6KlqedF4yVpKvnA4pKPojHp70JqfLdTH4fpkkNLMfMIwCnuQ8',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0bhPMaWDI8rlDwgNtq4eFC_Qkb1UXOAxWwu6zrs3EW9YwGSIKqxKDff79B7s0bH36PxUXseak8EwNyxnSAZAsdKeXIjaAICgcqDDJbq1EDYpKKyBf3cRcH6GpNSO8o4_HR0nr6t57ydHESoqP4sCdeXfKx5ObYCWYT7cinz0-8gIuql61kOjHbfimHmkGWC2sc5r0wyKOd294aoP9Qz37pfmMxoo0iDxs70QlQ1IE_j2kVzfTkskgUjqwOdlEQGMmFpppG0mLy-U',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQi034Pque19t1XlX7nDXe8zJlAr9QxmhYKMazDjf6OHImSh99vvwQ_p8em1O2zbcfJXccNyEAfyQVZSiHSjcCMIW9M5CjSbA2xKopYuxbnXDYpwoGKXtXVEVyDYdvSxVw2Ot5pWw-AxJmVwLx9oSzoWpFwv0QzMLNJEGD67wOYO0O8xrp3f-dFEa5zgewjzHELLeoo2OVNlJZPdtWLSFalYGC95oQEBj7q1k7n5LtA48FSLKxDBovNP5jiKCjJ5H1aQGp5pfQMko',
    ],
    tag: 'Nuevo',
    tagColorClass: 'bg-[#ffdf9b] text-[#251a00]',
    colors: [
      { name: 'Blanco Clásico', hex: '#fdfbf7' },
      { name: 'Carbón', hex: '#36454F' },
      { name: 'Celeste', hex: '#87CEEB' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      '100% Lino de alta calidad',
      'Diseño tradicional con alforzas y bolsillos',
      'Hecho a mano en el Caribe',
      'Lavar a máquina en frío, ciclo delicado',
    ],
    featured: true,
    rating: 4.9,
  },
  {
    id: 'guayabera-clasica-lino',
    name: 'Guayabera Clásica Lino',
    category: 'Hombres',
    price: 85.0,
    description:
      'Guayabera tradicional blanca en 100% lino artesanal del Caribe con alforzas de precisión y pliegues clásicos. Pieza imprescindible del guardarropa tropical.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQi034Pque19t1XlX7nDXe8zJlAr9QxmhYKMazDjf6OHImSh99vvwQ_p8em1O2zbcfJXccNyEAfyQVZSiHSjcCMIW9M5CjSbA2xKopYuxbnXDYpwoGKXtXVEVyDYdvSxVw2Ot5pWw-AxJmVwLx9oSzoWpFwv0QzMLNJEGD67wOYO0O8xrp3f-dFEa5zgewjzHELLeoo2OVNlJZPdtWLSFalYGC95oQEBj7q1k7n5LtA48FSLKxDBovNP5jiKCjJ5H1aQGp5pfQMko',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaTn26U654PuC2kAChpP46lse7Uf_Lq-bnGL-N0TLvVq2CgVNxLl_D4VyKNPA6dZfiD4GM9-y7bVn4IGkOPXEEOUNDnZJCt4WEDp3P4pdzqP_IJqXu1yIaTwfmzXsxPOeMLLFI6VwUQP5dSn2JcZFHzuakvJnVuhE2NkNgFac3cxWHpVXhoOVUWnesi5hmK9vPgiNugQ4S0iGkUlMVRxhQIKKiOl0lYfbwtB9Kr2Kyy_wocfOHDxxEqxn4g6Pijr6PtxSUdNeUdo0',
    ],
    tag: 'Nuevo',
    tagColorClass: 'bg-[#ffdf9b] text-[#251a00]',
    colors: [
      { name: 'Blanco Lino', hex: '#fcfcfc' },
      { name: 'Arena', hex: '#e8dcce' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Lino 100% fibra natural caribeña',
      '4 bolsillos delanteros con botón',
      'Alforzas frontales e invisibles en espalda',
      'Botones de nácar genuino',
    ],
    featured: true,
    rating: 5.0,
  },
  {
    id: 'vestido-floral-habana',
    name: 'Vestido Floral Habana',
    category: 'Mujeres',
    price: 120.0,
    description:
      'Vestido midi floral con motivos caribeños en tonos coral, amarillo sol y hojas tropicales. Tejido ligero en viscosa transpirable ideal para climas cálidos y paseos al atardecer.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_ETIh03Wdma4_PApPM9L3s1WoekP8g-5E5uYgzWryiaaUql3UzYuJgScUKrSAB4qyeo-KyGlXgKIaDXVKLpyH1QOZCTlA26ay0M3sdCMpp1j3yPeIXyp1ZXyvoL6C2Uk2-Sl4kb835bSaV8s7RUAag8py-fBf1bjJU8DY1ooaSCLTiSkQmKm5dJrVD9YtQd9wqUBCIHl5fQAgysQEti1vNY3K25CRRv3w0CKTUyntaZ3VQ1YQWOfNbe05YFLwewxRBeOfVJ0Q9oM',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8y4LuQSmkXq2J3O52AH-5nwN9MpgRWrIUHYZ9EFQyu13WEGYyWK2SDzPkHvumgys1Ik-pdc0O9RsIUAeCIGgu4JB17ub-XUGpkAGbdA5wsTxt9MragyClPjU96uA_owx3Lw6ULBkxn33ptdzbXRZV6wMJ4Frgws6nPnvKbHX5ZyEz30bis-guwDmdkoXF66bjLrFUIV_ZTXie7qr4nTPVHf291nc3BAouY_3zTG_SjpA36EKaUMd85pyE7XSA5dxK3mOHY0RI1QU',
    ],
    colors: [
      { name: 'Estampado Coral', hex: '#ff6b6b' },
      { name: 'Estampado Palma', hex: '#006a62' },
    ],
    sizes: ['S', 'M', 'L'],
    details: [
      '100% Viscosa sedosa de alto confort',
      'Corte midi con caída fluida',
      'Cintura con ajuste elástico sutil',
      'Estampado habanero exclusivo',
    ],
    featured: true,
    rating: 4.8,
  },
  {
    id: 'sombrero-de-palma-fina',
    name: 'Sombrero de Palma Fina',
    category: 'Accesorios',
    price: 45.0,
    description:
      'Sombrero artesanal tejido a mano en palma fina con cinta de grosgrain en carbón profundo. Ligero, elegante y con excelente protección solar para la costa caribeña.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA9yQdHrMRLU3BLFcdztxbaCOAF2T-hfEtIXo-lA8TgrEsL4Uwd25m4D7f6NqBlJOGcC8pF_l5x4uqHz9fPhXpN-8tkAUj5aypUnjmmXQ1DXCzMy5EJsDzN8g7A2rc6B4N6479PcPdnIHutKmBCF4I90eOg8VCQf35G7xNwzrJ6mR9gOFAxdLA6T-hHNBbB3nM07CHZQda8Ntywvmnf7OF6OKi0Sz0s8Sm9C2HLKUEUJ1pcYGSIelT8ZaAQZbKy9_e_9_dw94oKeug',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLdUbrUpuxJkjSi3_AbM2Zh2VSWZARMXIssBF1LubN5yVoB_lW4vHCrInycfkMLxyoOHfBIO9qRcBosp5p4RLdSUB8jBxV2DCsB5oK-B4g2PNj7f4bXTkkwNp9U0Mjd5JJ5FO8u0lnbv1bQFiUTqjYW7IPP3-7VtHcduaUJu99z0bQJB-2BSyBzSUNSuKEL5sBH9cUhR4iF5PRnO0NBZ-OtBj0W8upXB69UaLFYr64MDtCdJtKWEe8zPu6BRlqtAuHoPSvlMT6syk',
    ],
    tag: 'Más Vendido',
    tagColorClass: 'bg-[#006a62] text-[#ffffff]',
    colors: [
      { name: 'Palma Natural', hex: '#dec59b' },
      { name: 'Palma Tostada', hex: '#b8996e' },
    ],
    sizes: ['M', 'L'],
    details: [
      'Tejido tradicional 100% palma natural',
      'Banda interior antisudor transpirable',
      'Cinta de grosgrain en color carbón',
      'Protección UPF 50+ natural',
    ],
    featured: true,
    rating: 4.9,
  },
  {
    id: 'gafas-de-sol-carey',
    name: 'Gafas de Sol Carey',
    category: 'Accesorios',
    price: 65.0,
    description:
      'Gafas de sol unisex con montura ámbar translúcida estilo carey moderno y lentes polarizadas oscuras con máxima protección UV400.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAw0PCmIEERKzb34Po2FXHI0evmB_jLnJsUF2VrtO4EDGmswgLc0ZW9QXYj6plPsxXb0X_pTzGIsG1aXvjZ87ZJkPxTNzSPA2kfRiXL6PocgZOWZW2lLw_yAUd4OpF2xRxXgsVoaWY469EoCj5T5av2gL8nDGZjVNEfMWRf4s1e79-cbe6LVhO_VIOwTCpxxiLpyh1ubv2pVCd2Vg3-qbhD4sI1D8gB9HrX88AeynU4G6j7N8PAWQ78eYArrZtOAmrGBDjblUOgNl8',
    ],
    colors: [
      { name: 'Ámbar Carey', hex: '#d48a33' },
      { name: 'Carbón Mate', hex: '#2c2c2c' },
    ],
    sizes: ['Única'],
    details: [
      'Montura de acetato italiano ultraligero',
      'Lentes polarizadas UV400 categoría 3',
      'Bisagras reforzadas de acero inoxidable',
      'Incluye estuche de cuero de coco y gamuza',
    ],
    featured: true,
    rating: 4.7,
  },
  {
    id: 'camisa-resort-mosaico',
    name: 'Camisa Resort Mosaico',
    category: 'Hombres',
    price: 70.0,
    description:
      'Camisa de manga corta resort con motivos geométricos y mosaicos inspirados en la arquitectura del Caribe colonial en tonos turquesa y carbón.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBDKVAw5IrCsKnlge5sB4vk5ej-D_VocbbNeuQA-2o6XHcpig0mjTbraPPfh9-_-Mt5IovidzERNBGao7oouChhJrPfr4lOps-drI_mOgVZ2fYVTN6uWkMNp0oo1UvAlO5Ut5aLVvcDkMSSM9ycWuaAzFHhgnFdzTEJocyUoQSGuZvi2w1fJEPun9G2wALUXazFqjNZClyCOpAIGGypeqLKHFoUj-PN0-p9ACFiv24tb3R8hN9hm0WtUGYWf1lyrLfkYGd5HB9pio',
    ],
    colors: [
      { name: 'Mosaico Turquesa', hex: '#4fdbcc' },
      { name: 'Mosaico Coral', hex: '#ff6b6b' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Mezcla de lino y algodón orgánico',
      'Cuello cubano / Camp collar clásico',
      'Bolsillo en pecho izquierdo',
      'Ligera y ultratranspirable',
    ],
    featured: true,
    rating: 4.8,
  },
  {
    id: 'camisa-de-lino',
    name: 'Camisa de Lino',
    category: 'Hombres',
    price: 28.0,
    description:
      'Camisa de lino en azul cielo relajada con caída suave, ideal para disfrutar del clima caribeño junto a la playa o en la ciudad.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_pHcMKGu_njKAV65fwwnKkHulj4yjVfM_lQVBDuwILiUnFePmoxe7sND0A3XnS4GBhBb_vTPWd5JKyelCmYvRVkPoceu0ZvYs3nLR0Wg6qcQdWGFXKrIs4ofiINVoLYXovHeLxqjxEc2aKZl8HqjNxkxpwbmvBOE94SatgEtepp4Fwv4Jz0u17of-Btm_Z3TdMcfwl-eWodC8QAzaZqHQz549aOcnAc49-G0TpM1aif6jjYN0lC56_t1smVxu4jsyfZD_O48tuAg',
    ],
    colors: [
      { name: 'Azul Cielo', hex: '#9ed3eb' },
      { name: 'Blanco Brisa', hex: '#fdfcfb' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      '100% Lino lavado al tacto suave',
      'Corte regular confortable',
      'Cuello abotonado informal',
      'Resistente a lavados frecuentes',
    ],
    rating: 4.6,
  },
  {
    id: 'vestido-floral',
    name: 'Vestido Floral',
    category: 'Mujeres',
    price: 30.0,
    description:
      'Vestido floral tropical en corte amplio y vuelo generoso. Lleno de color, alegría caribeña y textura sedosa que se mueve con la brisa del mar.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8y4LuQSmkXq2J3O52AH-5nwN9MpgRWrIUHYZ9EFQyu13WEGYyWK2SDzPkHvumgys1Ik-pdc0O9RsIUAeCIGgu4JB17ub-XUGpkAGbdA5wsTxt9MragyClPjU96uA_owx3Lw6ULBkxn33ptdzbXRZV6wMJ4Frgws6nPnvKbHX5ZyEz30bis-guwDmdkoXF66bjLrFUIV_ZTXie7qr4nTPVHf291nc3BAouY_3zTG_SjpA36EKaUMd85pyE7XSA5dxK3mOHY0RI1QU',
    ],
    colors: [
      { name: 'Tropical Sunshine', hex: '#ffd166' },
      { name: 'Rosa Hibisco', hex: '#ff85a1' },
    ],
    sizes: ['S', 'M', 'L'],
    details: [
      'Tejido ligero en popelín de algodón',
      'Tirantes ajustables con detalle trenzado',
      'Falda acampanada con movimiento',
      'Bolsillos laterales invisibles',
    ],
    rating: 4.8,
  },
  {
    id: 'sombrero-de-palma',
    name: 'Sombrero de Palma',
    category: 'Accesorios',
    price: 15.0,
    description:
      'Sombrero de playa clásico tejido con palma natural y cordón de cuero ajustable en marrón habana. El aliado inseparable de tus días al sol.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLdUbrUpuxJkjSi3_AbM2Zh2VSWZARMXIssBF1LubN5yVoB_lW4vHCrInycfkMLxyoOHfBIO9qRcBosp5p4RLdSUB8jBxV2DCsB5oK-B4g2PNj7f4bXTkkwNp9U0Mjd5JJ5FO8u0lnbv1bQFiUTqjYW7IPP3-7VtHcduaUJu99z0bQJB-2BSyBzSUNSuKEL5sBH9cUhR4iF5PRnO0NBZ-OtBj0W8upXB69UaLFYr64MDtCdJtKWEe8zPu6BRlqtAuHoPSvlMT6syk',
    ],
    colors: [
      { name: 'Palma Dorada', hex: '#d4b783' },
    ],
    sizes: ['M', 'L'],
    details: [
      'Palma trenzada artesanalmente',
      'Cordón de cuero ajustable en el mentón',
      'Ala ancha de 10 cm para protección total',
      'Estructura flexible y resistente',
    ],
    rating: 4.5,
  },
  {
    id: 'short-playa',
    name: 'Short Playa',
    category: 'Hombres',
    price: 18.0,
    description:
      'Short de baño tropical con estampado floral caribeño en tonos coral y verde palma, cintura elástica y secado ultrarrápido.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDXyJooXVpNXzPeHnLA7VzZHhEW2uZGq7rOGoLANz42Akiez6JNOqd44m0rCH2GFR-fEp144zp_wh-B18KP0d_dttrg1hAgrwBa20dNEWTNz8RExkoxkTAc89BRrG0BJjMfYvefwK2oVx-iMOEtEneh-hXRZjBc9E_i5CMWPTqtTAFtzQB8Fx2DxhNnau9ZDL6mHAVrVe1dow_667jp2l1OWybwKd9WCGAgjwNHDDQcF9YR7GLTzxHkEAYAsek7P1PxEWL8nSPS9aI',
    ],
    colors: [
      { name: 'Coral Tropical', hex: '#ff6b6b' },
      { name: 'Teal Caribe', hex: '#006a62' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Tejido técnico 100% poliéster reciclado',
      'Secado rápido en 10 minutos',
      'Malla interior suave antibacteriana',
      'Bolsillo trasero con cierre de velcro',
    ],
    rating: 4.7,
  },
  {
    id: 'blusa-tropical',
    name: 'Blusa Tropical',
    category: 'Mujeres',
    price: 18.0,
    description:
      'Blusa blanca bordada estilo campesino caribeño con mangas ¾ abullonadas y encaje artesanal en el escote. Pura frescura y ligereza.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCAh1-Ni9Ejefl1_FTUeVvPwzjxXxIAYlzkGgVtkcXmeE2HxXRdGIfMG_Zy5Xpx21pfjI1PRKIamTpW1zmPvFxMsudvi9NsBUHgoQBb0tRsbsx9tHXRfuz3pCJdBl7Na0e4VnrtccpQFyPup8bfmGOd4VSZ9SXoEwoJmsLEfDWYWOMnttXncoky2ONKKD9pVRfTzbpx1RQJQtOK9Y4K7apyaFtS948iCkN8laZT9fDdgbAPe0sz-xjy5RSoKALegVkBKXfJ92I6_Lc',
    ],
    colors: [
      { name: 'Blanco Algodón', hex: '#ffffff' },
    ],
    sizes: ['S', 'M', 'L'],
    details: [
      '100% Algodón batista peinado',
      'Detalles de encaje bordado a mano',
      'Mangas holgadas con elástico ligero',
      'Corte relajado y combinable con shorts o faldas',
    ],
    rating: 4.9,
  },
  {
    id: 'bolso-de-yute',
    name: 'Bolso de Yute',
    category: 'Accesorios',
    price: 22.0,
    description:
      'Bolso tote tejido en fibra de yute natural con asas reforzadas de algodón y capacidad espaciosa para llevar todo lo necesario al mar.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrRq87Lh3bmfUav9P--F0t9rj1Z3LlG3tiP6TbULvMsRWzz0iF0p3aOWLzG2v6LSFClCw2cZrP20mv19TOJg4EBDg-3uOkUy1MRGRF2v4SA4ZwWw7ddh7Prri2VJzwFmjrGNuT-9z0pMwUrJ2gkH_kU6KjwUoIHjThIFepJGvbz9av2cq1aWWouMagSjMXJfoFHtFQ8m4dUjVcuvbSPb-oW7OKmQYneacbrpY8yozKqRRApPTRAIK5rXzl8g7Hlw7HTr7uAlHSczU',
    ],
    colors: [
      { name: 'Yute Arena', hex: '#c8ae88' },
    ],
    sizes: ['Única'],
    details: [
      '100% Yute natural biodegradable',
      'Interior con forro de algodón crudo',
      'Bolsillo interno con cremallera',
      'Asas resistentes para llevar en hombro o mano',
    ],
    rating: 4.8,
  },
  {
    id: 'collar-de-caracola',
    name: 'Collar de Caracola',
    category: 'Accesorios',
    price: 12.0,
    description:
      'Gargantilla ajustable de caracolas naturales seleccionadas a mano con cierre en baño de oro de 18k. El toque costero definitivo.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Jk2_iOpWOO09VrVcZBE7ty42yn53gqfvdvWKSmUUHgYWXPzCLuld5UHedDd-wQO6Af8TQJADoEVP-V2X01drAndo4SFOk0YTn9q5XGm_lNXJFyNm_ws7N9TPGk3yA7ktchhf_JJWgKOdhj3b4S48EmNbOE_akMwiV1rI7mzWqM_S9GCwwLTiABid_o00HHulDDLoAGm4jMd9zTRiy6tQAYvZ4w2sJgXczlGJX-N8lkQhTxzqxD7WN2C3Jc1qd5LM6EKWQiAfnS8',
    ],
    colors: [
      { name: 'Nácar Marfil', hex: '#f7f4ea' },
    ],
    sizes: ['Única'],
    details: [
      'Caracolas auténticas del mar Caribe',
      'Extensor ajustable en acero bañado en oro',
      'Resistente al agua de mar y piscina',
      'Acabado suave al contacto con la piel',
    ],
    rating: 4.9,
  },
  {
    id: 'guayabera-celeste',
    name: 'Guayabera Celeste',
    category: 'Hombres',
    price: 25.0,
    description:
      'Guayabera caribeña en azul celeste claro con diseño clásico de 4 bolsillos y textura de lino fresco.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOwh9Nj4C6WVxV7cayk_XJUI3x_7OsiGLcMeqLgihXq4-ThCkEJCHzwwz711SrRf6fNGZA8ohMvLhlvLSQzJl5P1Tdeq7YKvK4NrYa9Kzjcot_-0wn-n2LAhE669gVHJPMNbujqBA5mxA0l9YXm4wMwdice7JYo1lftpu0OCz6RhgAPLbvn7mxoFuy-xhNP8u5OAGZbuyasmF5qOzvIo_vVQBk4CYekZd9VVbZfeqqwobcAP3EA8Y_IHzfyZSaXD8AoOo_VqE5QQA',
    ],
    tag: 'Nuevo',
    tagColorClass: 'bg-[#ffdf9b] text-[#251a00]',
    colors: [
      { name: 'Azul Celeste', hex: '#87CEEB' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Mezcla lino y algodón fresco',
      'Alforzas frontales de confección fina',
      'Ideal para bodas de playa y cocteles',
      'Talla estándar caribeña',
    ],
    rating: 4.8,
  },
  {
    id: 'guayabera-edicion-noche',
    name: 'Guayabera Edición Noche',
    category: 'Hombres',
    price: 28.0,
    description:
      'Guayabera en tono carbón noche para cenas elegantes bajo las estrellas. Sombra sofisticada con alforzas al tono.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzL1iGB_IZ5uflVTrH-AoV3WoIuoSGMCVr82DJntdIfz-oJm2AncNAK4V6fG_0WlEl7alrivHtXKjypyFWL199h5o-D91LamWTPex1UAAkVkncejmsPZzCof_-upifCEAxXO6wimPdaYAwQF0xupCr5Y64olegFUhn0UY1C9iwBhi634Ff9raJbOXZ3sNl53MpP9wKvurco-fmMOE7OJlw41xpoCrloNkMhDhfg6TWMHqNKfkYlsDmCVlFUQsWHT75fU8nWaefcBc',
    ],
    colors: [
      { name: 'Carbón Noche', hex: '#262d35' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      'Lino oscuro con acabado mate',
      'Bolsillos clásicos de guayabera',
      'Botones negros de concha',
      'No se decolora con lavados en frío',
    ],
    rating: 4.9,
  },
  {
    id: 'pantalon-lino-blanco',
    name: 'Pantalón Lino Blanco',
    category: 'Hombres',
    price: 35.0,
    description:
      'Pantalón de lino blanco con cintura elástica y cordón ajustable, corte recto relajado y ligereza inigualable.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAA-cIzsr7wNl6KT1z_sz6kLtPtkOFGA7EDZ8AU4nsESHc3njh1NsNnRLjlDyZ7jX_jLjVhNV0AjgO5RSVjeEQYwuq56dkwlwsDzzJ6Lpk5xpa8oajXvlaJ1cqUtCfZlgJdIdnFEJVUfGzi7sywEEv8dr9yPzqmfNH7WEBmAY2r2o4fjUXLXTNYD5RFIHYGag8kfNjwxhEqvtMiMjc1uvWzkyUJfg9zaFG08ZT1XRNMvncxhBENBCvkLeh8WarjZr6g3erhqD26Ic0',
    ],
    tag: 'Básico',
    tagColorClass: 'bg-[#006a62] text-[#ffffff]',
    colors: [
      { name: 'Blanco Lino', hex: '#ffffff' },
      { name: 'Arena cruda', hex: '#e8dcce' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    details: [
      '100% Lino ligero importado',
      'Cintura con elástico y cordón frontal',
      'Bolsillos laterales y uno trasero abotonado',
      'Corte recto con caída limpia',
    ],
    rating: 4.7,
  },
  {
    id: 'sombrero-panama-autentico',
    name: 'Sombrero Panamá Auténtico',
    category: 'Accesorios',
    price: 45.0,
    description:
      'Sombrero Panamá de ala media elaborado con paja toquilla auténtica y cinta oscura, emblema del estilo tropical y colonial.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBOfKVfvqdeOBf9f9lNKDkatia3RkYMtTudr_gpDCndTBTokcqrYiQj6Ug34TUoYT9uQLZuEdORA3vm9UsHpANFxdyFDAVnORYp75Zy8UPMQVQsOV-oRUnUTI-uFxvMW45BE5WjgIOH2qWvKWzgzJnPcT9mABTRV3kgALKlbgadk1fAffj7IvDpNM99mo_C2x6okd3UAO9ywN0zT-DGkiP9dIIR_KO4BNB_Xy-ov6y39uSkamK0Kzx7Y08Ohy0ayuR7hXX15UfC1aw',
    ],
    colors: [
      { name: 'Panamá Natural', hex: '#e0cfa5' },
    ],
    sizes: ['M', 'L'],
    details: [
      'Tejido fino en paja toquilla seleccionada',
      'Cinta de grosgrain en color negro mate',
      'Ligereza extraordinaria y frescura',
      'Protección natural al sol caribeño',
    ],
    rating: 5.0,
  },
];
