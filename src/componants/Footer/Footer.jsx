import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <div className="head">
        <h3 className="footerlogo">Papperow</h3>
        <p className="c">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
      </div>
      <div className="list">
        <ol className="one">
          <p>our survice</p>
          <li>
            <Link to="/about" className="linking">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="linking">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/shop" className="linking">
            Pricing
            </Link>
          </li>
          <li></li>
          <li>login</li>
        </ol>
        <ol className="two">
          <p>company</p>
          <li>term & conditions</li>
          <li>help center</li>
        </ol>
        <ol className="three">
          <p>follow us</p>
          <li>instagram</li>
          <li>twitter</li>
          <li>facebook</li>
        </ol>
      </div>
    </div>
  );
}

export default Footer;
