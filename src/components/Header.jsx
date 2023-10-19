import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "../context/CartContext";

import "./Header.css";

export const Header = () => {
  const { cartList } = useCart();
  return (
    <header className="flex justify-between h-18 items-center max-w-1200 mb-8 mx-2 border-b border-gray-200 text-lg py-4 font-poppins font-normal">
      <Link className="flex items-center" to="/">
        <img src={logo} alt="Headset Store Logo" className="w-40 mr-1.5" />
        <p className="">Headset Store</p>
      </Link>
      <nav className="navigation hidden sm:block">
        <NavLink to="/" className="rounded hover:bg-gray-100 active: link " end>
          Home
        </NavLink>
        <NavLink to="/cart" className="rounded hover:bg-gray-100 active: link">
          Cart
        </NavLink>
      </nav>

      <Link className="font-medium min-w-20 mx-2" to="/cart">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
