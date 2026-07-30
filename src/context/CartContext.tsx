import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { CartItem, Product } from '../types';

const CART_STORAGE_KEY = 'tropical_vibes_cart_v1';

interface CartContextValue {
  cartItems: CartItem[];
  cartOpen: boolean;
  totalCartCount: number;
  setCartOpen: (open: boolean) => void;
  addToCart: (
    product: Product,
    selectedColor?: string,
    selectedSize?: string,
    quantity?: number
  ) => void;
  quickAddToCart: (product: Product, e?: React.MouseEvent) => void;
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function loadCart(): CartItem[] {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(loadCart);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch {
      // Ignore storage errors
    }
  }, [cartItems]);

  const addToCart = useCallback(
    (
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
        }
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
      });
      setCartOpen(true);
    },
    []
  );

  const quickAddToCart = useCallback(
    (product: Product, e?: React.MouseEvent) => {
      e?.stopPropagation();
      e?.preventDefault();
      addToCart(
        product,
        product.colors[0]?.name || 'Estándar',
        product.sizes[0] || 'Única',
        1
      );
    },
    [addToCart]
  );

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;
          const nextQty = item.quantity + delta;
          return nextQty > 0 ? { ...item, quantity: nextQty } : null;
        })
        .filter(Boolean) as CartItem[]
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const totalCartCount = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      cartOpen,
      totalCartCount,
      setCartOpen,
      addToCart,
      quickAddToCart,
      updateQuantity,
      removeItem,
      clearCart,
    }),
    [
      cartItems,
      cartOpen,
      totalCartCount,
      addToCart,
      quickAddToCart,
      updateQuantity,
      removeItem,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart debe usarse dentro de CartProvider');
  }
  return ctx;
}
