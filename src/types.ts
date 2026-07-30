export type CategoryType = 'Hombres' | 'Mujeres' | 'Accesorios';

export type ProductTag = 'Nuevo' | 'Más Vendido' | 'Básico' | 'Rebajas';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  price: number;
  description: string;
  images: string[];
  tag?: ProductTag;
  tagColorClass?: string;
  colors: ProductColor[];
  sizes: string[];
  details: string[];
  featured?: boolean;
  rating?: number;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}
