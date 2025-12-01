"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";


export interface CartItem {
  id: number | string;
  name: string;
  price: number;
  image?: string;
  front?: string;
  back?: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Omit<CartItem, "size" | "quantity">, size: string, quantity?: number) => void;
  removeFromCart: (productId: number | string, size: string) => void;
  updateQuantity: (productId: number | string, size: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

interface ProviderProps {
  children: ReactNode;
}


const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: ProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart when updated
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item
  const addToCart = (
    product: Omit<CartItem, "size" | "quantity">,
    size: string,
    quantity: number = 1
  ) => {
    setCartItems((prev) => {
      const exist = prev.find(
        (item) => item.id === product.id && item.size === size
      );

      if (exist) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { ...product, size, quantity }];
    });
  };

  const removeFromCart = (productId: number | string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === productId && item.size === size))
    );
  };

  const updateQuantity = (
    productId: number | string,
    size: string,
    quantity: number
  ) => {
    if (quantity <= 0) return removeFromCart(productId, size);

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const getCartTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const getCartCount = () =>
    cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
