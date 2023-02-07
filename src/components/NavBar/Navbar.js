import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import logo from '../../asstes/logo.png';
function Navbar() {
   
  const navRef = useRef();
  const dispatch = useDispatch();

  const { email, isLoading } = useSelector((state) => state?.auth);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log('show');
  };
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
    });
  };

  return (
    <div className="navigation-bar mb-5">
      <button onClick={showNavbar} className="hamburger-btn">
        <HiMenuAlt1 />
      </button>
      <nav>
        <ul ref={navRef}>
          <div className="logo d-flex  ">
            <img className="" src={logo} alt="" />
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            {email && <button onClick={handleSignOut}>Log out</button>}
            {!email && <Link to="/signup">Sign Up</Link>}
          </li>
          <button onClick={showNavbar} className="cross-btn">
            <RxCross1 />
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
