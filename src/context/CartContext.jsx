import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Helper to parse price string "12,000" -> number 12000
  const parsePrice = (priceStr) => parseInt(priceStr.replace(/,/g, '')) || 0;

  // Add Item (No longer opens a sidebar)
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    // Removed setIsCartOpen(true)
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Update Quantity
  const updateQuantity = (id, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  // Clear Cart
  const clearCart = () => setCartItems([]);

  // Calculate Totals
  const subtotal = cartItems.reduce((sum, item) => sum + (parsePrice(item.price) * item.quantity), 0);
  const deliveryFee = 5000;
  const total = subtotal + (cartItems.length > 0 ? deliveryFee : 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal,
      deliveryFee,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};