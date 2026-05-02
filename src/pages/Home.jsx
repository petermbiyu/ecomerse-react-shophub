import { ProductCard } from "../components/ProductCard";
import { getProducts } from "../data/products";

export const Home = () => {
  const products = getProducts();
  return (
    <div className="section">
      <div className="hero">
        <h1>Welcome to ShopHub</h1>
        <p>Discover amazing products at great prices</p>
      </div>
      <div className="container">
        <h2>Our products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
