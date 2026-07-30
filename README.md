# Tropical Vibes

Catálogo e-commerce de moda caribeña. Vitrina digital con 17 productos, filtros por categoría, carrito de compras y pedidos por WhatsApp.

## Stack

- **React 19** + TypeScript
- **Vite** + Tailwind CSS 4
- **React Router** para rutas compartibles

## Rutas

| Ruta | Vista |
|------|--------|
| `/` | Home |
| `/catalogo` | Catálogo completo |
| `/catalogo/hombres` | Filtro Hombres |
| `/catalogo/mujeres` | Filtro Mujeres |
| `/catalogo/accesorios` | Filtro Accesorios |
| `/producto/:id` | Detalle de producto |

## Funcionalidades

- **Home** — Hero, categorías, destacados y newsletter
- **Catálogo** — Grid con filtros, búsqueda y ordenamiento
- **Producto** — Galería, color/talla, relacionados (URL compartible)
- **Carrito** — Drawer persistente en `localStorage` + pedido por WhatsApp
- **WhatsApp flotante** — Mensaje contextual según la ruta del producto
- **Responsive** — mobile-first

## Imágenes

Todas las imágenes viven en `public/images/` y se referencian como `/images/...` desde `src/data/products.ts` (sin dependencias externas).

## Desarrollo

```bash
bun install
bun dev
bun run build
```

## Licencia

© 2026 Bit & Byte Studio. Proyecto demo para portafolio.
