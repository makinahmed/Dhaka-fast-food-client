import React from "react";
import "./trending.css";
import trending1 from "../../asstes/trending-1.png";

function Trending() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-lg-4 t-container">
          <div className="trending-container">
            <div className="t-title">
              <h2>Fast food</h2>
              <h1>Meals</h1>
              <p>NEW PHENOMENON</p>
              <p> Burger Taste</p>
              <span>$19.90</span>
              <button className="">ORDER NOW</button>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 t-container t-container2">
          <div className="trending-container2">
            <div className="t-title">
              <h2>House</h2>
              <h1>Burgers</h1>
              <p>NEW PHENOMENON</p>
              <p> Burger Taste</p>
              <span>$12.90</span>
              <button>ORDER NOW</button>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 t-container3 t-container">
          <div className="trending-container3  ">
            <div className="t-title">
              <h2 className="slide">Hot Fresh</h2>
              <h1>Salats</h1>
              <p>NEW PHENOMENON</p>
              <p> Burger Taste</p>
              <span>$10.90</span>
              <button>ORDER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
