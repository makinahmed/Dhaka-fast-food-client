import React from "react";
import Blogs from "../../components/Blogs/Blogs";
import Features from "../../components/Features/Features";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import MenuList from "../../components/MenuList/MenuList";
import MenuOfTheDay from "../../components/MenuOfTheDay/MenuOfTheDay";
import Offer from "../../components/Offer/Offer";
import PopularDishes from "../../components/PopularDishes/PopularDishes";
import Shop from "../../components/Shop/Shop";
import ShowPieceCart from "../../components/ShowPiece/ShowPieceCart";
import Sorting from "../../components/Sorting/Sorting";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUp";

function Home() {
  return (
    <div>
      <HomeBanner />
      <MenuList />
      <ShowPieceCart />
      <PopularDishes />
      <MenuOfTheDay />
      <Features />
      <Sorting />
      <Shop />
      <Offer />
      
    </div>
  );
}

export default Home;
