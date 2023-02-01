import React from "react";
import "./banner.css";
import breadcrumb from "../../asstes/breadcrumb1.jpg";
function Banner(props) {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumb-container">
            <h1>{props.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
