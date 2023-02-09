import React, { useEffect, useRef } from "react";
import "./navbar.css";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../features/auth/authSlice";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import logo from "../../asstes/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import toast from "react-hot-toast";

function Navbar() {
  const navRef = useRef();
  const dispatch = useDispatch();

  const { email } = useSelector((state) => state?.auth);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log("show");
  };
  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
      if (!email) {
        toast.success("Log Out Successfully!", { id: "logout" });
      }
      
    });
    Navigate("/login");
  };

  const handleOnclick = () => {
    const cart = document.querySelector(".shop-cart-container");
    cart.classList.add("hide_cart");
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
          {email && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
          <li>
            <AiOutlineShoppingCart
              onClick={() => handleOnclick()}
              style={{
                fontSize: "5rem",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </li>
          <li>
            {email && <button onClick={handleSignOut}>Log out</button>}
            {!email && <Link to="/login">Log In</Link>}
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
