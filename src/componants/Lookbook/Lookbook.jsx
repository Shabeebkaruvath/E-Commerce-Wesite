import React from "react";
import "./Lookbook.css";
import main from "./main.jpg";
function Lookbook() {
  return (
    <div className="overview">
      <div className="para">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          sed arcu non odio euismod. Amet consectetur adipiscing elit duis
          tristique sollicitudin nibh. Sed arcu non odio euismod lacinia at
          quis. Non curabitur gravida arcu ac tortor dignissim convallis aenean.
          Id ornare arcu odio ut. Pellentesque habitant morbi tristique senectus
          et. Cum sociis natoque penatibus et magnis dis parturient montes
          nascetur. Ac tortor dignissim convallis aenean et tortor at risus. Non
          tellus orci ac auctor augue mauris. Etiam tempor orci eu lobortis
          elementum nibh. Consequat mauris nunc congue nisi vitae suscipit
          tellus mauris. Nisl condimentum id venenatis a condimentum vitae
          sapien pellentesque habitant.
          <br />
          <p className="gap"></p>
          Volutpat ac tincidunt vitae semper. Libero id faucibus nisl tincidunt
          eget nullam. Hac habitasse platea dictumst vestibulum rhoncus est
          pellentesque. Porttitor lacus luctus accumsan tortor posuere ac ut.
          Tempor orci dapibus ultrices in iaculis. Sit amet massa vitae tortor
          condimentum lacinia quis vel. Risus quis varius quam quisque id diam
          vel quam. Est ante in nibh mauris cursus mattis molestie a iaculis.
          Faucibus vitae aliquet nec ullamcorper sit amet risus nullam.
          Facilisis sed odio morbi quis commodo odio aenean sed. Mi tempus
          imperdiet nulla malesuada pellentesque elit eget.
          <br />
          <p className="gap"></p>
          Nec ullamcorper sit amet risus. Congue mauris rhoncus aenean vel elit
          scelerisque mauris. Quam quisque id diam vel. In tellus integer
          feugiat scelerisque varius morbi enim. Tellus pellentesque eu
          tincidunt tortor aliquam nulla facilisi cras fermentum. Quam
          pellentesque nec nam aliquam sem. Quam adipiscing vitae proin sagittis
          nisl rhoncus. Et ligula ullamcorper malesuada proin libero nunc. Risus
          nec feugiat in fermentum posuere urna. Et pharetra pharetra massa
          massa ultricies mi quis hendrerit. Lacinia quis vel eros donec ac odio
          tempor orci dapibus. Leo vel fringilla est ullamcorper eget. Lectus
          vestibulum mattis ullamcorper velit sed ullamcorper morbi. Morbi quis
          commodo odio aenean sed adipiscing diam donec.
        </h2>
      </div>
      <div className="pic">
        <img src={main} alt="main" />
      </div>
    </div>
  );
}

export default Lookbook;
