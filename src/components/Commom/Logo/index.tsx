import React from "react";
import { Link } from "react-router-dom";
// style
import "./logo.css";
const Logo = () => {
  return (
    <Link className="logoLink" to={"/"}>
      <div className="logoContainer">
        <div className="logo">
          <p className="logoMaior">Templo</p>
          <p className="logoMenor">Do Hambúrguer</p>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
