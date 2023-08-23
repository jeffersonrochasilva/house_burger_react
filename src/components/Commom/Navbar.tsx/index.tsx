import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbarContainer">
        <Link className="togo" to="/">
          Home
        </Link>
        <Link className="togo" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
