import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateOutlet() {
  const { email } = useSelector((state) => state?.auth);
  return email ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateOutlet;
