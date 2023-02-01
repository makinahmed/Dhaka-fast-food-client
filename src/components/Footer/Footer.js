import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="container-fluid  footer-section">
      <div className="row footer-container">
        <h1 className="text-decoration-line-through text-dark mb-5">LOGO</h1>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="address">
            <h1 className="address-title">ADDRESS</h1>
            <span>570 8th Ave,</span>
            <span>New York,NY 10018</span>
            <span>United States</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="address">
            <h1 className="address-title">FOR BOOKING</h1>
            <span>Dogfood och Sliders foodtruck.</span>
            <span>Under Om oss kan ni läsa</span>
            <span>(850) 435-4155</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="address">
            <h1 className="address-title">OPENING HOURS</h1>
            <span>Monday – Friday: 8am – 4pm</span>
            <span>Saturday: 9am – 5pm</span>
            <span>ICONS</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="address">
            <h1 className="address-title">NEWSLETTER</h1>
            <span>Subscribe to the weekly newsletter for all</span>
            <span>the latest updates</span>
            <div className="email">
              <input type="email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
