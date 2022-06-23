import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart from "./cart.gif";

function Navbar() {
  return (
    <div className="nav">
      <h1>
        <Link to="/" className="head-linking">
          papperow
        </Link>
      </h1>
      <ol>
        <li>
          <Link to="/shop" className="linking">
            shop
          </Link>
        </li>
        <li>
          <Link to="/lookbook" className="linking">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/about" className="linking">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="linking">
            Contact
          </Link>
        </li>
        <img alt="cart" src={cart} />
        <img
          className="menu"
          alt="menu"
          src="https://img.icons8.com/ios/50/undefined/menu--v1.png"
        />
      </ol>
    </div>
  );
}

export default Navbar;
