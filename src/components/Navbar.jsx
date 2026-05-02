import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="nav">
      <h1 className="logo">ShopHub</h1>
      <div className="menu">
        <Link to={"/"}>Home</Link>
        <Link to={"/checkout"}>Cart</Link>
      </div>
      <div className="auth">
        <div>
          <Link to={"/auth"} className="btn-pri">
            Log In
          </Link>
          <Link to={"/auth"} className="btn-sec">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
