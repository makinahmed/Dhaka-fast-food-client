import React from "react";
import "./banner.css";
function Banner(props) {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-md-12">
          <div className="breadcrumb-container ">
            <h1 className="">{props.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
