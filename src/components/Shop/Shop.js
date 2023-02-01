import React from "react";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import Cateogries from "../Cateogries/Cateogries";
import ProductCart from "../ProductCart/ProductCart";

function Shop() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3">
          <ProductCart />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <ProductCart />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <ProductCart />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Cateogries />
        </div>
      </div>
    </div>
  );
}

export default Shop;
