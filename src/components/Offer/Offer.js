import React from "react";
import "./offer.css";
import offer3 from "../../asstes/offer-3.png";
import thunder1 from "../../asstes/thunder1.png";
import thunder2 from "../../asstes/thunder2.png";
import { Link } from "react-router-dom";
function Offer() {
  return (
    <div className="offer-container my-5">
      <div className="offer">
        <div className="offer-percent">
          <p>Get Up to</p>
          <span>50%</span>
          <h1>OFF</h1>
        </div>

        <img src={offer3} alt="" />
      </div>
      <div className="offer-text">
        <div>
          <h1 className="offer-title1">Hot Fresh</h1>
          <div className="thunder">
            <img src={thunder1} alt="" />
            <img src={thunder2} alt="" />
            <h1 className="offer-title2">HOTDOG</h1>
          </div>
          <Link to="/menu">ORDER NOW</Link>
        </div>
      </div>
    </div>
  );
}

export default Offer;
