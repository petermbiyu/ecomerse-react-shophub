import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(productId) {
    const exist = cartItems.find((item) => item.id === productId);
    if (exist) {
      const itemQuantity = exist.quantity;
      const updateCartQuantity = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: itemQuantity + 1 } : item,
      );
      setCartItems(updateCartQuantity);
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
