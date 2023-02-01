import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Blogs from "./components/Blogs/Blogs";
import ClientSays from "./components/ClientSays/ClientSays";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import LatestNews from "./components/LatestNews/LatestNews";
import MenuList from "./components/MenuList/MenuList";
import MenuOfTheDay from "./components/MenuOfTheDay/MenuOfTheDay";
import Navbar from "./components/NavBar/Navbar";
import Offer from "./components/Offer/Offer";
import PopularDishes from "./components/PopularDishes/PopularDishes";

import ShowPieceCart from "./components/ShowPiece/ShowPieceCart";
import Sorting from "./components/Sorting/Sorting";
import TopRecipes from "./components/TopRecipes/TopRecipes";
import Trending from "./components/Trending/Trending";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import LoginForm from "./Pages/LoginForm/LoginForm";
import Menu from "./Pages/Menu/Menu";
import Shop from "./Pages/Shop/Shop";
import store from "./app/store";
import SignUpForm from "./Pages/SignUpForm/SignUp";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.config";
import { setUser } from "./features/auth/authSlice";
import AddBlogs from "./components/AddBlogs/AddBlogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddProducts from "./components/AddProduct/AddProducts";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email));
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={Menu} />
        <Route path="/shop" element={Shop} />
        <Route path="/about" element={About} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route>
          <Route path="dashboard" element={<Dashboard />}>
            <Route index path="addblog" element={<AddBlogs />} />
            <Route path="addproduct" element={<AddProducts />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
