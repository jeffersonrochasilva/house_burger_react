import React from "react";
import { Link } from "react-router-dom";
// Style
import "./header.css";

// Icons
import { FaBars, FaSistrix } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <FaBars />
        <Link className="headerLink" to="/">
          <p className="headerTitle">Cardapio</p>
        </Link>
      </div>
      {/* <FaSistrix /> */}
      <div>
        <AiOutlineShoppingCart
          style={{
            fontSize: 25,
          }}
        />
        <div className="itemsInBox">
          <span
            style={{
              fontSize: 10,
            }}
          >
            2
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
// FaBars
