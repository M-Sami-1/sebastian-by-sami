import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const CartContext = createContext(null);

const CART_STORAGE_KEY = 'sebastian_by_sami_cart_v1';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      console.warn('Failed to read cart from localStorage', e);
      return [];
    }
  });

  // Keep localStorage synchronized
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  /**
   * Add item to cart. If already present, increment quantity.
   */
  const addToCart = (item, quantity = 1) => {
    if (!item || !item.id) return;
    const qtyToAdd = Math.max(1, parseInt(quantity, 10) || 1);

    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingIndex > -1) {
        return prevCart.map((cartItem, index) => {
          if (index === existingIndex) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + qtyToAdd
            };
          }
          return cartItem;
        });
      } else {
        return [
          ...prevCart,
          {
            id: item.id,
            name: item.name,
            category: item.category,
            price: item.price,
            image: item.image,
            description: item.description,
            quantity: qtyToAdd
          }
        ];
      }
    });
  };

  /**
   * Remove item entirely from cart
   */
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  /**
   * Increase quantity by 1
   */
  const increaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  /**
   * Decrease quantity by 1. If quantity reaches 0, removes the item.
   */
  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter(item => item.quantity > 0)
    );
  };

  /**
   * Update quantity directly to a specific value
   */
  const updateQuantity = (id, newQuantity) => {
    const qty = parseInt(newQuantity, 10);
    if (isNaN(qty) || qty <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  /**
   * Clear all items in cart
   */
  const clearCart = () => {
    setCart([]);
  };

  /**
   * Check if item is already in cart
   */
  const isItemInCart = (id) => {
    return cart.some(item => item.id === id);
  };

  /**
   * Get quantity of a specific item in cart
   */
  const getItemQuantity = (id) => {
    const found = cart.find(item => item.id === id);
    return found ? found.quantity : 0;
  };

  // Memoized totals for optimal performance
  const totalCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * (item.quantity || 0)), 0);
  }, [cart]);

  // Brand perks: 0 delivery fee for counter pickup, 0 tax
  const deliveryFee = 0;
  const tax = 0;
  const totalPrice = subtotal;

  const value = {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    clearCart,
    isItemInCart,
    getItemQuantity,
    totalCount,
    subtotal,
    deliveryFee,
    tax,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
