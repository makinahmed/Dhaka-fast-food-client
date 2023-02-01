import React from "react";
import "./populardish.css";
import cake from "../../asstes/cake.png";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import ProductCart from "../ProductCart/ProductCart";

function PopularDishes() {
  return (
    <div className="container-fluid">
      <h2>Popular dishes</h2>
      <ul className="dish-name">
        <li>
          <a href="#">PIZZA</a>
        </li>
        <li>
          <a href="#">SUSHI</a>
        </li>
        <li>
          <a href="#">SALATS</a>
        </li>
        <li>
          <a href="#">BURGER</a>
        </li>
        <li>
          <a href="#">DERSEST</a>
        </li>
      </ul>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <ProductCart />
        </div>
      </div>

      <div>
        <button className="all-products">All Products</button>
      </div>
    </div>
  );
}

export default PopularDishes;
