import React from "react";
import "./About.css";
import character1 from "./character-4.gif";
function About() {
  return (
    <div className="About">
      <div className="i">
        <h2>About us</h2>
        <p>
          Volutpat ac tincidunt vitae semper. Libero id faucibus nisl tincidunt
          eget nullam. Hac habitasse platea dictumst vestibulum rhoncus est
          pellentesque. Porttitor lacus luctus accumsan tortor posuere ac ut.
          Tempor orci dapibus ultrices in iaculis. Sit amet massa vitae tortor
          condimentum lacinia quis vel. Risus quis varius quam quisque id diam
          vel quam. Est ante in nibh mauris cursus mattis molestie a iaculis.
          Faucibus vitae aliquet nec ullamcorper sit amet risus nullam.
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
      <div className="o">
        <img src={character1} alt="one" />
      </div>
    </div>
  );
}

export default About;
