import React from "react";
import {useNavigate} from "react-router-dom";
import "./Banner.css";

function Banner() {
  let navigate=useNavigate();
  return (
    <div className="banner">
      <div className="quotes">
        <h1>
          “The more that you read, the more things you will know. The more that
          you learn, the more places you’ll go.”
        </h1>
        <div className="btn">
          <button onClick={()=>{navigate('/shop')}}>shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
