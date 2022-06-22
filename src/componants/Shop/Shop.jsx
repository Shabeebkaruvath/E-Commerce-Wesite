import React from "react";
import "./Shop.css";
import pic from "./1.png";

function Shop() {
  return (
    <div className="shop">
      <div className="filter">
        <h1 className="">Shop</h1>
        <hr />
      </div>
      <div className="shop-img">
        <div className="shop-item">
          <div className="shop-data">
            <img src={pic} alt="one" />
            <h3>book1</h3>
            <p>this is a book descripton</p>
            <pre>
              Price:<del>$200</del>
              <p>offer PRICE:$150</p>
            </pre>
          </div>
          <div className="shop-btn">
            <button>Add cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-data">
            <img src={pic} alt="one" />
            <h3>book1</h3>
            <p>this is a book descripton</p>
            <pre>
              Price:<del>$200</del>
              <p>offer PRICE:$150</p>
            </pre>
          </div>
          <div className="shop-btn">
            <button>Add cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-data">
            <img src={pic} alt="one" />
            <h3>book1</h3>
            <p>this is a book descripton</p>
            <pre>
              Price:<del>$200</del>
              <p>offer PRICE:$150</p>
            </pre>
          </div>
          <div className="shop-btn">
            <button>Add cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-data">
            <img src={pic} alt="one" />
            <h3>book1</h3>
            <p>this is a book descripton</p>
            <pre>
              Price:<del>$200</del>
              <p>offer PRICE:$150</p>
            </pre>
          </div>
          <div className="shop-btn">
            <button>Add cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-data">
            <img src={pic} alt="one" />
            <h3>book1</h3>
            <p>this is a book descripton</p>
            <pre>
              Price:<del>$200</del>
              <p>offer PRICE:$150</p>
            </pre>
          </div>
          <div className="shop-btn">
            <button>Add cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-data">
            <img src={pic} alt="one" />
            <h3>book1</h3>
            <p>this is a book descripton</p>
            <pre>
              Price:<del>$200</del>
              <p>offer PRICE:$150</p>
            </pre>
          </div>
          <div className="shop-btn">
            <button>Add cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-data">
            <img src={pic} alt="one" />
            <h3>book1</h3>
            <p>this is a book descripton</p>
            <pre>
              Price:<del>$200</del>
              <p>offer PRICE:$150</p>
            </pre>
          </div>
          <div className="shop-btn">
            <button>Add cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="shop-item">
          <div className="shop-data">
            <img src={pic} alt="one" />
            <h3>book1</h3>
            <p>this is a book descripton</p>
            <pre>
              Price:<del>$200</del>
              <p>today's PRICE:$150</p>
            </pre>
          </div>
          <div className="shop-btn">
            <button>Add cart</button>
            <button>Buy Now</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Shop;
