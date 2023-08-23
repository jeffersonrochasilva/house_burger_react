import React from "react";
import { Link } from "react-router-dom";
// Style
import "./header.css";

// Icons
import { FaBars, FaSistrix } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <FaBars />
        <Link className="headerLink" to="/">
          <p className="headerTitle">Cardapio</p>
        </Link>
      </div>
      <FaSistrix />
    </div>
  );
};

export default Header;
// FaBars
