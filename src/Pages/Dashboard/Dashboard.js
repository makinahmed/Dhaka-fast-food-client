import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import AddCupon from "../../components/AddCupon/AddCupon";
import "./dashboard.css";
import SideNav from "../../components/SideNav/SideNav";
import { usePostCuponMutation } from "../../features/api/apiSlice";
import { toast } from "react-hot-toast";
import Banner from "../../components/Banner/Banner";

function Dashboard() {
  

  return (
    <div className="container">
      <div className="row g-5">
        <div className="col-sm-3 border-end">
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
