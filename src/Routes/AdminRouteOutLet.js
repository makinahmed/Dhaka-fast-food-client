import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminRouteOutlet({children}) {
  let admin = "admin";
  let adminEmail = "admin@gmail.com";
    const { email } = useSelector((state) => state?.auth);
    console.log(email,'email');
  if (admin && email) {
    if (email === adminEmail) {
      return children;
    }
  }
  return <Navigate to="/"/>;
}

export default AdminRouteOutlet;
