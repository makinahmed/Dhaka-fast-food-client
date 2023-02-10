import React from "react";
import {  Outlet } from "react-router-dom";
import "./dashboard.css";
import SideNav from "../../components/SideNav/SideNav";
import AdminRouteOutlet from "../../Routes/AdminRouteOutLet";

function Dashboard() {
  

  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-sm-3 border-end">
          <SideNav />
        </div>
        <div className="col-sm-9">
         <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
