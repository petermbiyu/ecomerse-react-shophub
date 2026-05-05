import { useCart } from "../context/CartContext";
export const Checkout = () => {
  const { getCartItemsWithProducts, updateQuantity, removeItem, getCartTotal } =
    useCart();
  const cartItems = getCartItemsWithProducts();
  const total = getCartTotal();
  return (
    <div className="section">
      <div>
        <h1>Checkout</h1>
        <div className="checkout-container">
          <div className="check-summary">
            <h2>Order Summary</h2>
            {cartItems.map((item) => (
              <div className="checkout">
                <div className="image-container">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="check-image"
                  />
                </div>
                <div className="check-details">
                  <h3>{item.product.name}</h3>
                  <p>Ksh. {item.product.price.toFixed(2)}</p>
                </div>
                <div className="check-amount">
                  <div className="check-control">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p>Ksh. {(item.product.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="btn-pri"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="check-totals">
            <h1>Total</h1>
            <div>
              <span>Subtotal: {total.toFixed(2)} </span>
              <span>Ksh. </span>
            </div>
            <div>
              <span>Total: </span>
              <span>Ksh. {total.toFixed(2)} </span>
            </div>
          </div>
          <div>
            <button>Place Order </button>
          </div>
        </div>
      </div>
    </div>
  );
};
