import React from "react";
import './feature.css';
import { GiScooter } from "react-icons/gi";
import { MdTimer } from "react-icons/md";
import { CiPizza } from "react-icons/ci";
function Features() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div1 className="col-sm-12 col-md-6 col-lg-4 text-sm-left">
          <div className="feature-cart  ">
            <GiScooter style={{ fontSize: "8rem", color: "#ffc107" }} />
            <div className="feature-text">
              <h2>Free shipping</h2>
              <p className="title">Sign up for updates and get free shipping</p>
            </div>
          </div>
        </div1>
        <div1 className="col-sm-12 col-md-6 col-lg-4 text-sm-left">
          <div className="feature-cart  ">
            <MdTimer style={{ fontSize: "8rem", color: "#ffc107" }} />
            <div className="feature-text">
              <h2>30 Minutes Delivery</h2>
              <p className="title">
                Everything you order will quickly reach to your door.
              </p>
            </div>
          </div>
        </div1>
        <div1 className="col-sm-12 col-md-6 col-lg-4 text-sm-left">
          <div className="feature-cart  ">
            <CiPizza style={{ fontSize: "8rem", color: "#ffc107" }} />
            <div className="feature-text">
              <h2>Best Quality Guarantee</h2>
              <p className="title">
                Poco is an international chain of family restaurants.
              </p>
            </div>
          </div>
        </div1>
      </div>
    </div>
  );
}

export default Features;
