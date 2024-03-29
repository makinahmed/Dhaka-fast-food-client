import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="sidenav d-flex flex-column justify-content-around">
      <Link className="text-dark fw-bold text-decoration-none" to="">
        All Orders
      </Link>
      <Link className="text-dark fw-bold text-decoration-none" to="pendingorders">
        Pending Orders
      </Link>
      <Link className="text-dark fw-bold  text-decoration-none" to="addblog">
        Add Blog
      </Link>
      <Link className="text-dark fw-bold  text-decoration-none" to="addproduct">
        Add Product
      </Link>
    </div>
  );
}

export default SideNav;
