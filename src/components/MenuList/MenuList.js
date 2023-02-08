import React, { useEffect } from "react";
import "./menulist.css";
import AOS from "aos";
import "aos/dist/aos.css";
import coldDrinks from "../../asstes/Cold Drinks.png";
import imgBanner1 from "../../asstes/image_baner (1).png";
import imgBanner2 from "../../asstes/image_baner (2).png";
import toprecipe from "../../asstes/top-recepie2.png";
import trending1 from "../../asstes/trending-1.png";
import cake from "../../asstes/cake.png";
function MenuList() {
  
  return (
    <div data-aos="zoom-in-right" className="container-fluid my-5">
      <div className="row g-1 text-center menu-list">
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={coldDrinks} alt="" />
             
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={cake} alt="" />
             
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={imgBanner1} alt="" />
             
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={imgBanner2} alt="" />

             
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={toprecipe} alt="" />
             
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-lg-2">
          <div className="menu-img">
            <img src={trending1} alt="" />
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
