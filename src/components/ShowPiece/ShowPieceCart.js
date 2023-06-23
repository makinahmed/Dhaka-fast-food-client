import React from "react";
import "./showpiececart.css";
import offerProduct from "../../asstes/image_baner (1).png";
import findUs from '../../asstes/findUs.png';
import pasta from "../../asstes/p1.png";
function ShowPieceCart() {
  return (
    <div className="container-fluid showpiece">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div className="cart-container">
            <div className="cart-texts">
              <h2 className="cart-title">Any day offers</h2>
              <p className="cart-text"> PHENOMENON BURGER TASTE</p>
              <div className="price">৳12.90</div>
            </div>
            <div className="cart-img-container">
              <div className="d1">
                <img className="w-50" src={pasta} alt="" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div className="cart-container cart-item1">
            <div className="cart-texts">
              <h2 className="cart-title">Any day offers</h2>
              <p className="cart-text">NEW PHENOMENON BURGER TASTE</p>
              <div className="price">৳12.90</div>
            </div>
            <div className="cart-img-container">
              <div className="d1">
                <img src={offerProduct} alt="" />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div className="cart-container">
            <div className="cart-texts">
              <h2 className="cart-title">Find Us</h2>
              <p className="cart-text">Google Map </p>
              <div className="price">CONTACT US</div>
            </div>
            <div className="cart-img-container">
              <div className="d1">
                <img src={findUs} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPieceCart;
