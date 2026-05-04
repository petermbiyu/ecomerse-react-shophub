import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
export const ProductCard = ({ product }) => {
  const { cartItems, addToCart } = useCart();
  const productCart = cartItems.find((item) => item.id === product.id);
  const quantityLabel = productCart ? `${productCart.quantity}` : "";
  return (
    <div className="product-cards">
      <img src={product.image} alt="product-image" />
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>Ksh. {product.price}</p>
        <div>
          <Link className="btn-pri" to={`/products/${product.id}`}>
            Details
          </Link>
          <button className="btn-sec" onClick={() => addToCart(product.id)}>
            Cart {quantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
};
