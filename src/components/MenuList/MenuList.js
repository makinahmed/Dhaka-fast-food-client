import React from "react";
import "./menulist.css";
import coldDrinks from "../../asstes/Cold Drinks.png";
function MenuList() {
  return (
    <div className="container-fluid my-5">
      <div className="row g-1 text-center ">
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={coldDrinks} alt="" />
            <h3>COMBO</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={coldDrinks} alt="" />
            <h3>COMBO</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={coldDrinks} alt="" />
            <h3>COMBO</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={coldDrinks} alt="" />
            <h3>COMBO</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={coldDrinks} alt="" />
            <h3>COMBO</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={coldDrinks} alt="" />
            <h3>COMBO</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
