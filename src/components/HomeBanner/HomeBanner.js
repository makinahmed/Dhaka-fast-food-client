import React from "react";
import "./homebanner.css";
import bannerImg from "../../asstes/h1-banner.png";
import { Link, useNavigate } from "react-router-dom";
function HomeBanner() {
  const navigate = useNavigate()

  return (
    <div className="home-banner-container">
      <div className="h-banner-text">
        <div className="banner-title">
          <h1>Unlimited</h1>
          <h1>
            Medium <span className="pizzas">Pizzas</span>
          </h1>
        </div>
        <div className="b-text">
          <h2>Medim 2-topping* pizza</h2>
          <p>*Additional charge for premium toppings. Minimum of 2 required.</p>
        </div>
        <div className="banner-btns">
          <Link to="/menu">Order Now</Link>
          <span className="b-price">$12.99</span>
        </div>
      </div>
      <div className="h-banner-img">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
}

export default HomeBanner;
