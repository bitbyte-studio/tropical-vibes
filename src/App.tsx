import React, { useState, useEffect } from 'react';
import { Product, ViewType, CategoryType, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CartDrawer } from './components/CartDrawer';
import { HomeView } from './components/HomeView';
import { CatalogView } from './components/CatalogView';
import { ProductDetailView } from './components/ProductDetailView';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryType | 'Todos'
  >('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tropical_vibes_cart_v1');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        'tropical_vibes_cart_v1',
        JSON.stringify(cartItems)
      );
    } catch {
      // Ignore storage errors
    }
  }, [cartItems]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProduct]);

  const handleNavigate = (
    view: ViewType,
    category?: CategoryType | 'Todos'
  ) => {
    setCurrentView(view);
    if (category) {
      setSelectedCategory(category);
    }
    if (view !== 'detail') {
      setSelectedProduct(null);
    }
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
  };

  const handleAddToCart = (
    product: Product,
    selectedColor: string = product.colors[0]?.name || 'Estándar',
    selectedSize: string = product.sizes[0] || 'Única',
    quantity: number = 1
  ) => {
    const itemKey = `${product.id}-${selectedColor}-${selectedSize}`;
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === itemKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            id: itemKey,
            product,
            selectedColor,
            selectedSize,
            quantity,
          },
        ];
      }
    });
    setCartOpen(true);
  };

  const handleQuickAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    handleAddToCart(
      product,
      product.colors[0]?.name || 'Estándar',
      product.sizes[0] || 'Única',
      1
    );
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col bg-[#fff8f7] text-[#251818] font-sans">
      {/* Announcement top bar */}
      <div className="bg-[#006a62] text-white text-[13px] font-bold py-2 px-4 text-center tracking-wide">
        ☀️ Envío Gratis en pedidos sobre $50 USD • Colección Verano 2026 ya disponible 🌴
      </div>

      {/* Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* Main View Display */}
      <main className="flex-1 flex flex-col w-full">
        {currentView === 'home' && (
          <HomeView
            featuredProducts={featuredProducts}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleQuickAddToCart}
            onNavigateCategory={(cat) => handleNavigate('catalog', cat)}
          />
        )}

        {currentView === 'catalog' && (
          <CatalogView
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
            }}
            onSelectProduct={handleSelectProduct}
            onAddToCart={handleQuickAddToCart}
          />
        )}

        {currentView === 'detail' && selectedProduct && (
          <ProductDetailView
            product={selectedProduct}
            allProducts={PRODUCTS}
            onBack={() => handleNavigate('catalog', selectedCategory)}
            onAddToCart={(prod, col, sz, qty) =>
              handleAddToCart(prod, col, sz, qty)
            }
            onSelectProduct={handleSelectProduct}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp button / modal */}
      <FloatingWhatsApp
        productName={
          currentView === 'detail' && selectedProduct
            ? selectedProduct.name
            : undefined
        }
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}

