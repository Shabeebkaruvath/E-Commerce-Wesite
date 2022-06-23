import React from "react";
import "./Shop.css";
import pic from "./1.png";

function Shop() {
  return (
    <div className="shop">
      <div className="filter">
        <h1 className="">Shop</h1>
        <hr />
        <p className="sample">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
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
            <button>
              Add cart{" "}
              <img
                alt="cart"
                className="btn-cart"
                src="https://img.icons8.com/color/35/000000/shopping-cart--v1.png"
              />
            </button>
            <button className="btn-buy">Buy Now</button>
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
            <button>
              Add cart{" "}
              <img
                alt="cart"
                className="btn-cart"
                src="https://img.icons8.com/color/35/000000/shopping-cart--v1.png"
              />
            </button>
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
            <button>
              Add cart{" "}
              <img
                alt="cart"
                className="btn-cart"
                src="https://img.icons8.com/color/35/000000/shopping-cart--v1.png"
              />
            </button>
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
            <button>
              Add cart{" "}
              <img
                alt="cart"
                className="btn-cart"
                src="https://img.icons8.com/color/35/000000/shopping-cart--v1.png"
              />
            </button>
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
            <button>
              Add cart{" "}
              <img
                alt="cart"
                className="btn-cart"
                src="https://img.icons8.com/color/35/000000/shopping-cart--v1.png"
              />
            </button>
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
            <button>
              Add cart{" "}
              <img
                alt="cart"
                className="btn-cart"
                src="https://img.icons8.com/color/35/000000/shopping-cart--v1.png"
              />
            </button>
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
            <button>
              Add cart{" "}
              <img
                alt="cart"
                className="btn-cart"
                src="https://img.icons8.com/color/35/000000/shopping-cart--v1.png"
              />
            </button>
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
            <button>
              Add cart{" "}
              <img
                alt="cart"
                className="btn-cart"
                src="https://img.icons8.com/color/35/000000/shopping-cart--v1.png"
              />
            </button>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
