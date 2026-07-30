import { useEffect } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import { PRODUCTS } from './data/products';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartDrawer } from './components/CartDrawer';
import { HomeView } from './components/HomeView';
import { CatalogView } from './components/CatalogView';
import { ProductDetailView } from './components/ProductDetailView';
import { ScrollToTop } from './components/ScrollToTop';
import { slugToCategory } from './lib/routes';

function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

function CatalogPage() {
  const { categorySlug } = useParams();
  const selectedCategory = slugToCategory(categorySlug);
  const title =
    selectedCategory === 'Todos'
      ? 'Catálogo — Tropical Vibes'
      : `${selectedCategory} — Tropical Vibes`;
  useDocumentTitle(title);

  return (
    <CatalogView
      products={PRODUCTS}
      selectedCategory={selectedCategory}
    />
  );
}

function ProductPage() {
  const { productId } = useParams();
  const product = PRODUCTS.find((p) => p.id === productId);

  useDocumentTitle(
    product
      ? `${product.name} — Tropical Vibes`
      : 'Producto no encontrado — Tropical Vibes'
  );

  if (!product) {
    return <Navigate to="/catalogo" replace />;
  }

  return (
    <ProductDetailView
      key={product.id}
      product={product}
      allProducts={PRODUCTS}
    />
  );
}

function HomePage({ featuredProducts }: { featuredProducts: typeof PRODUCTS }) {
  useDocumentTitle('Tropical Vibes 🌴 — Moda Caribeña');
  return <HomeView featuredProducts={featuredProducts} />;
}

function AppShell() {
  const {
    cartItems,
    cartOpen,
    totalCartCount,
    setCartOpen,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f7] text-[#251818] font-sans">
      <ScrollToTop />

      <div className="bg-[#006a62] text-white text-[13px] font-bold py-2 px-4 text-center tracking-wide">
        Envío Gratis en pedidos sobre $50 USD • Colección Verano 2026 ya disponible
      </div>

      <Navbar cartCount={totalCartCount} onOpenCart={() => setCartOpen(true)} />

      <main className="flex-1 flex flex-col w-full">
        <Routes>
          <Route
            path="/"
            element={<HomePage featuredProducts={featuredProducts} />}
          />
          <Route path="/catalogo" element={<CatalogPage />} />
          <Route path="/catalogo/:categorySlug" element={<CatalogPage />} />
          <Route path="/producto/:productId" element={<ProductPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <FloatingWhatsApp />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppShell />
    </CartProvider>
  );
}
