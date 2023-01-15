import "./header.css";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import close from "../images/icon-close.svg";

const Header = () => {
  document.querySelector(".menu").addEventListener("click", function () {
    document.querySelector(".over").classList.add("active");
  });

  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".over").classList.remove("active");
  });

  document.querySelector(".cart").addEventListener("click", function () {
    document.querySelector(".cart-box").classList.add("active");
  });

  document.querySelector(".cart-box").addEventListener("click", function () {
    document.querySelector(".cart-box").classList.remove("active");
  });

  return (
    <header>
      {/* hamburger icon */}
      <div className="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* hamburger menu */}
      <div className="over">
        <div className="ham-menu">
          <div className="close">
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
        <img src={cart} alt="" className="cart" />
        <img src={avatar} alt="" className="avatar" />
      </div>

      {/* cart */}
      <div className="cart-box">
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
