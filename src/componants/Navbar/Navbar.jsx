import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <h1><Link to="/" className="head-linking">pappergrid</Link></h1>
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
        <img
          alt="cart"
          src="https://img.icons8.com/ios/20/undefined/shopping-cart-loaded--v1.png"
        />
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
