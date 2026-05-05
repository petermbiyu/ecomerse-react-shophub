import { createContext, useContext, useState } from "react";
import { getProductById } from "../data/products";

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

  function getCartItemsWithProducts() {
    return cartItems
      .map((item) => ({ ...item, product: getProductById(item.id) }))
      .filter((item) => item.product);
  }
  function removeItem(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    );
  }
  function getCartTotal() {
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
    return total;
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemsWithProducts,
        updateQuantity,
        removeItem,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
