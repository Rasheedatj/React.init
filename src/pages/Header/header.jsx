import "./header.css";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

const Header = () => {
  return (
    <header>
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
    </header>
  );
};

export default Header;
