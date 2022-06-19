import React from "react";
import "./Contact.css";
import work from "./At-work.gif";

function Contact() {
  return (
    <div className="contact">
      <div className="contact1">
        <div className="k">
          <h2>Contact us</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose 
          </p>
          <a href="https://instagram.com">
            <img
              alt="insta"
              src="https://img.icons8.com/fluency/35/undefined/instagram-new.png"
            />
          </a>
          <a href="https://twitter.com">
            <img
              alt="insta"
              src="https://img.icons8.com/color/35/undefined/twitter--v1.png"
            />
          </a>
          <a href="https://facebook.com">
            <img
              alt="insta"
              src="https://img.icons8.com/cute-clipart/35/undefined/facebook-new.png"
            />
          </a>
          <a href="https://linkedin.com">
            <img
              alt="insta"
              src="https://img.icons8.com/color/35/undefined/linkedin.png"
            />
          </a>
        </div>
        <div className="p">
          <img src={work} alt="" />
        </div>
      </div>
      <div className="contact2"></div>
    </div>
  );
}

export default Contact;
