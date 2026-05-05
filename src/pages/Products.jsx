import { useEffect, useState } from "react";
import { getProductById } from "../data/products";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
export const Products = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);
    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div>
        <div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  const { cartItems, addToCart } = useCart();
  const productCart = cartItems.find((item) => item.id === product.id);
  const quantityLabel = productCart ? `(${productCart.quantity})` : "";

  return (
    <div className="section">
      <div className="products">
        <div className="product-card">
          <div className="product-img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <h1>{product.name}</h1>
            <p className="price">Ksh. {product.price}</p>
            <p>{product.description}</p>
            <button className="btn-sec" onClick={() => addToCart(product.id)}>
              Cart {quantityLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
