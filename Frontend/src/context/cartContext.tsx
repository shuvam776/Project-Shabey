import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: number | string;
  title: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const itemId = String(item.id);
      const existing = prev.find((i) => String(i.id) === itemId);
      if (existing) {
        return prev.map((i) => 
          String(i.id) === itemId ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, { ...item, id: itemId }];
    });
  };

  const removeFromCart = (id: string | number) => {
    const stringId = String(id);
    setCartItems((prev) => prev.filter((i) => String(i.id) !== stringId));
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    const stringId = String(id);
    setCartItems((prev) =>
      prev.map((i) => (String(i.id) === stringId ? { ...i, quantity: Math.max(0, quantity) } : i)).filter((i) => i.quantity > 0)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };
 
  const cartTotal = Math.ceil(cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0));
  const cartCount = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
