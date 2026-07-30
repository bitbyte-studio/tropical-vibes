import { CategoryType } from '../types';

export const WHATSAPP_PHONE = '13055550199';

export const CATEGORY_SLUGS: Record<string, CategoryType> = {
  hombres: 'Hombres',
  mujeres: 'Mujeres',
  accesorios: 'Accesorios',
};

export const categoryToSlug = (category: CategoryType): string => {
  const entry = Object.entries(CATEGORY_SLUGS).find(
    ([, label]) => label === category
  );
  return entry?.[0] ?? 'todos';
};

export const slugToCategory = (
  slug?: string
): CategoryType | 'Todos' => {
  if (!slug || slug === 'todos') return 'Todos';
  return CATEGORY_SLUGS[slug.toLowerCase()] ?? 'Todos';
};

export const catalogPath = (category?: CategoryType | 'Todos') => {
  if (!category || category === 'Todos') return '/catalogo';
  return `/catalogo/${categoryToSlug(category)}`;
};

export const productPath = (productId: string) => `/producto/${productId}`;

export const whatsappUrl = (text: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
