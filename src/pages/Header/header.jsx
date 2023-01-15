import { useState } from "react";
import "./header.css";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import close from "../images/icon-close.svg";

const Header = () => {
  const [openMenu, setMenuOpen] = useState(false);
  const [openCart, setCartOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!openMenu);
  };

  const handleCart = () => {
    setCartOpen(!openCart);
  };

  console.log(openMenu);

  return (
    <header>
      {/* hamburger icon */}
      <div className="menu" onClick={() => handleClick()}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* hamburger menu */}
      <div className={`over ${openMenu ? "active" : ""}`}>
        <div className="ham-menu">
          <div className="close" onClick={() => handleClick()}>
            <img src={close} alt="" />
          </div>

          <div className="links">
            <li>collections</li>
            <li>men</li>
            <li>women</li>
            <li>about</li>
            <li>contact</li>
          </div>
        </div>
      </div>

      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav>
        <li>collections</li>
        <li>men</li>
        <li>women</li>
        <li>about</li>
        <li>contact</li>
      </nav>

      <div className="cart_avatar">
        <img src={cart} alt="" className="cart" onClick={() => handleCart()} />
        <img src={avatar} alt="" className="avatar" />
      </div>

      {/* cart */}
      <div
        className={`${openCart ? "active" : ""} cart-box`}
        onClick={() => handleCart()}
      >
        <div className="cart-modal">
          <h1>cart</h1>
          <div className="text">
            <p>Your cart is empty</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
