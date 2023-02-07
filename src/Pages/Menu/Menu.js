import React from "react";
import Banner from "../../components/Banner/Banner";
import Cart from "../../components/Cart/Cart";
import Features from "../../components/Features/Features";
import PopularDishes from "../../components/PopularDishes/PopularDishes";
import Trending from "../../components/Trending/Trending";

function Menu() {
  return (
    <div>
      <Banner title="Menu" />
      <PopularDishes />
      <Trending />
      <Features />
      <Cart />
    </div>
  );
}

export default Menu;
