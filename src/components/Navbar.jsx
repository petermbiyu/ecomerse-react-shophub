import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="nav">
      <h1 className="logo">ShopHub</h1>
      <div className="menu">
        <Link to={"/"}>Home</Link>
        <Link to={"/checkout"}>Cart</Link>
      </div>
      <div className="auth">
        {!user ? (
          <div>
            <Link to={"/auth"} className="btn-pri">
              Log In
            </Link>
            <Link to={"/auth"} className="btn-sec">
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="auth-logout">
            <span>Welcome {user.name.split(" ")[0]}</span>
            <button className="btn-sec btn-logout" onClick={() => logout()}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
