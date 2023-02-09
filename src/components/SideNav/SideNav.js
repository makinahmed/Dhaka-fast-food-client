import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="sidenav d-flex flex-column justify-content-around ">
      <Link className="text-dark fw-bold " to="addblog">Add Blog</Link>
      <Link className="text-dark fw-bold " to="addproduct">Add Product</Link>
      <Link className="text-dark fw-bold " to="addcupon">Add Cupon</Link>
    </div>
  );
}

export default SideNav;
