import React from "react";
import Cateogries from "../Cateogries/Cateogries";
import ProductCart from "../ProductCart/ProductCart";

function Shop() {
  return (
    <div className="container-fluid my-5">
      <div className="row g-5">
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
