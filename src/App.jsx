import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { Checkout } from "./pages/Checkout";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import { Products } from "./pages/Products";
import { Error } from "./pages/Error";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
