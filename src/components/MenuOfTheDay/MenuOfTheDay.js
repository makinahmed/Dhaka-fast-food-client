import React from "react";
import "./menuOfTheDay.css";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import toprecepie3 from "../../asstes/top-recepie3.png";

function MenuOfTheDay() {
  return (
    <div className="container-fluid menu-of-day-container">
      <div className="row g-5">
        <div className="col-sm-12 col-md-6">
          <div className="menu-cart">
            <div className="img">
              <img src={toprecepie3} alt="" />
            </div>
            <div className="motd-cart-text">
              <h3 className=" ">Chocolate cake</h3>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <p>
                Browse unique Coca-Cola products, clothing, & accessories, or
                customize Coke bottles and gifts
              </p>
              <span className="prev-price">$17.30</span>
              <span className="current-price">$11.00</span>
            </div>
            <div className="menu-shop-icon">
              <AiOutlineShoppingCart
                style={{
                  backgroundColor: "#ffc222",
                  fontSize: "5rem",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div><div className="col-sm-12 col-md-6">
          <div className="menu-cart">
            <div className="img">
              <img src={toprecepie3} alt="" />
            </div>
            <div className="motd-cart-text">
              <h3 className=" ">Chocolate cake</h3>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <p>
                Browse unique Coca-Cola products, clothing, & accessories, or
                customize Coke bottles and gifts
              </p>
              <span className="prev-price">$17.30</span>
              <span className="current-price">$11.00</span>
            </div>
            <div className="menu-shop-icon">
              <AiOutlineShoppingCart
                style={{
                  backgroundColor: "#ffc222",
                  fontSize: "5rem",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div><div className="col-sm-12 col-md-6">
          <div className="menu-cart">
            <div className="img">
              <img src={toprecepie3} alt="" />
            </div>
            <div className="motd-cart-text">
              <h3 className=" ">Chocolate cake</h3>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <p>
                Browse unique Coca-Cola products, clothing, & accessories, or
                customize Coke bottles and gifts
              </p>
              <span className="prev-price">$17.30</span>
              <span className="current-price">$11.00</span>
            </div>
            <div className="menu-shop-icon">
              <AiOutlineShoppingCart
                style={{
                  backgroundColor: "#ffc222",
                  fontSize: "5rem",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div><div className="col-sm-12 col-md-6">
          <div className="menu-cart">
            <div className="img">
              <img src={toprecepie3} alt="" />
            </div>
            <div className="motd-cart-text">
              <h3 className=" ">Chocolate cake</h3>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <p>
                Browse unique Coca-Cola products, clothing, & accessories, or
                customize Coke bottles and gifts
              </p>
              <span className="prev-price">$17.30</span>
              <span className="current-price">$11.00</span>
            </div>
            <div className="menu-shop-icon">
              <AiOutlineShoppingCart
                style={{
                  backgroundColor: "#ffc222",
                  fontSize: "5rem",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuOfTheDay;
