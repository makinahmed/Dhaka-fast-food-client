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
import { BsSearch } from "react-icons/bs";
import toast from "react-hot-toast";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { useState } from "react";
import TopRecipeCart from "../TopRecipeCart/TopRecipeCart";

let search = {
  width: " 200px",
  maxWidth: "0",
  transition: "all 1s ease",
  boxSizing: "border-box",
  opacity: "0",
};
let expanded = {
  maxWidth: "200px",
  opacity: "1",
  transition: "all 1s ease",
};

function Navbar() {
  const [products, setProducts] = useState();
  const [hide, setHide] = useState(true);
  const navRef = useRef();
  const dispatch = useDispatch();
  let adminEmail = "admin@gmail.com";
  const { email } = useSelector((state) => state?.auth);
  const { data, isSuccess, isError } = useGetProductsQuery();
  console.log(data, "dataaaaaaa");

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

  const handleSearch = (e) => {
    let searchItem = e.target.value.toLowerCase();
    let searchProducts = data.filter((product) =>
      product?.firsttitle?.toLowerCase().includes(searchItem)
    );
    setProducts(searchProducts);
    if (searchItem === "") {
      setProducts([]);
    }
  };

  const handOnBlue = () => {
    setTimeout(() => {
      setProducts([]);
    }, 500);
  };
  const handelSearchBar = () => {
    setHide(!hide);
  };
  return (
    <div>
      <div className="navigation-bar position-relative" id="navbar">
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
            {/* <li>
            <Link to="/contact">Contact</Link>
          </li> */}
            {email === adminEmail && (
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
                  cursor: "pointer",
                }}
              />
            </li>
            <li className="search-wrapper position-relative">
              <input
                className="search-box "
                onChange={handleSearch}
                type="text"
                onBlur={handOnBlue}
                style={hide ? search : expanded}
              />
              <BsSearch
                onClick={handelSearchBar}
                style={{
                  fontSize: "4rem",
                  borderRadius: "5px",
                  padding: "10px",
                  cursor: "pointer",
                }}
              />
            </li>
            <li>
              {email && (
                <button
                  className="border-0"
                  onClick={handleSignOut}
                  style={{ backgroundColor: "#cccbcb" }}
                >
                  Log out
                </button>
              )}
              {!email && <Link to="/login">Log In</Link>}
            </li>
            <button onClick={showNavbar} className="cross-btn">
              <RxCross1 />
            </button>
          </ul>
        </nav>
      </div>
      <div className="search-cart">
        {products?.map((product) => (
          <TopRecipeCart product={product} search="search" />
        ))}
      </div>
    </div>
  );
}

export default Navbar;

/*


{products?.map((product) => (
        <TopRecipeCart product={product} />
      ))}




*/
