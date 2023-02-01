import React from "react";
import {   Outlet } from "react-router-dom";
 
import SideNav from "../../components/SideNav/SideNav";

function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <SideNav />
        </div>
        <div className="col-sm-9">
          <Outlet />
        </div>
      </div>
       
    </div>
  );
}

export default Dashboard;
