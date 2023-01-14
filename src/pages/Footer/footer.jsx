import React from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";
import cart from "../images/icon-cart.svg";

import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="counter">
          <img src={minus} alt="" className="minus" />
          <p>0</p>
          <img src={plus} alt="" className="plus" />
        </div>

        {/* add to cart button */}

        <button>
          <img src={cart} alt="" />
          <p className="add_to_cart">add to cart</p>
        </button>
      </footer>
    );
  }
}

export default Footer;
