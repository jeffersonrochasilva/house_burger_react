import React from "react";
// Style
import "./header.css";

// Icons
import { FaBars, FaSistrix } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <FaBars />
        <p className="headerTitle">Cardapio</p>
      </div>
      <FaSistrix />
    </div>
  );
};

export default Header;
// FaBars
