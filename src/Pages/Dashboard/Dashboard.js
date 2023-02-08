import React from "react";
import {   Outlet } from "react-router-dom";
import AddCupon from "../../components/AddCupon/AddCupon";
 
import SideNav from "../../components/SideNav/SideNav";

function Dashboard() {
  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-sm-3 border-end">
          <SideNav />
        </div>
        <div className="col-sm-9">
          {/* <h2 className="text-center">ADD COUPON</h2>
          <div className="d-flex justify-content-center">
            <AddCupon />
          </div> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
