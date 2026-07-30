import { Product } from '../types';

export const HERO_IMAGE_URL =
  '/images/hero.jpg';

export const CATEGORY_IMAGES = {
  Hombres:
    '/images/category-hombres.jpg',
  Mujeres:
    '/images/category-mujeres.jpg',
  Accesorios:
    '/images/category-accesorios.jpg',
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
      '/images/guayabera-clasica-1.jpg',
      '/images/guayabera-clasica-2.jpg',
      '/images/guayabera-clasica-3.jpg',
      '/images/guayabera-clasica-4.jpg',
      '/images/guayabera-clasica-5.jpg',
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
      '/images/guayabera-clasica-5.jpg',
      '/images/guayabera-clasica-lino-2.jpg',
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
      '/images/vestido-floral-habana-1.jpg',
      '/images/vestido-floral-habana-2.jpg',
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
      '/images/sombrero-de-palma-fina-1.jpg',
      '/images/sombrero-de-palma-fina-2.jpg',
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
      '/images/gafas-de-sol-carey-1.jpg',
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
      '/images/camisa-resort-mosaico-1.jpg',
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
      '/images/camisa-de-lino-1.jpg',
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
      '/images/vestido-floral-habana-2.jpg',
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
      '/images/sombrero-de-palma-fina-2.jpg',
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
      '/images/short-playa-1.jpg',
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
      '/images/blusa-tropical-1.jpg',
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
      '/images/bolso-de-yute-1.jpg',
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
      '/images/collar-de-caracola-1.jpg',
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
      '/images/guayabera-celeste-1.jpg',
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
      '/images/guayabera-edicion-noche-1.jpg',
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
      '/images/pantalon-lino-blanco-1.jpg',
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
      '/images/sombrero-panama-autentico-1.jpg',
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
