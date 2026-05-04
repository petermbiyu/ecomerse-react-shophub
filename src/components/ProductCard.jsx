import { Link } from "react-router-dom";
export const ProductCard = ({ product }) => {
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
          <button className="btn-sec">Cart</button>
        </div>
      </div>
    </div>
  );
};
