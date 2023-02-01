import React from "react";
import "./showpiececart.css";
import offerProduct from "../../asstes/image_baner (1).png";
import bg from "../../asstes/image_baner.png";
function ShowPieceCart() {
  return (
    <div className="container-fluid showpiece">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div className="cart-container">
            <div className="cart-texts">
              <h2 className="cart-title">Any day offers</h2>
              <p className="cart-text">NEW PHENOMENON BURGER TASTE</p>
              <div className="price">$12.90</div>
            </div>
            <div className="cart-img-container">
              <div className="d1">
                <img src={offerProduct} alt="" />
              </div>
            </div>
          </div>
        </div> <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div className="cart-container">
            <div className="cart-texts">
              <h2 className="cart-title">Any day offers</h2>
              <p className="cart-text">NEW PHENOMENON BURGER TASTE</p>
              <div className="price">$12.90</div>
            </div>
            <div className="cart-img-container">
              <div className="d1">
                <img src={offerProduct} alt="" />
              </div>
            </div>
          </div>
        </div> <div className="col-sm-12 col-md-6 col-lg-4 ">
          <div className="cart-container">
            <div className="cart-texts">
              <h2 className="cart-title">Any day offers</h2>
              <p className="cart-text">NEW PHENOMENON BURGER TASTE</p>
              <div className="price">$12.90</div>
            </div>
            <div className="cart-img-container">
              <div className="d1">
                <img src={offerProduct} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPieceCart;
