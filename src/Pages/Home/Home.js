import React from "react";
import Cart from "../../components/Cart/Cart";
import ClientSays from "../../components/ClientSays/ClientSays";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import LatestNews from "../../components/LatestNews/LatestNews";
import MenuList from "../../components/MenuList/MenuList";
import Offer from "../../components/Offer/Offer";
import PopularDishes from "../../components/PopularDishes/PopularDishes";
import ShowPieceCart from "../../components/ShowPiece/ShowPieceCart";
import TopRecipes from "../../components/TopRecipes/TopRecipes";
import Trending from "../../components/Trending/Trending";

function Home() {
  return (
    <div>
      <HomeBanner />
      <MenuList />
      <ShowPieceCart />
      <PopularDishes />
      <Offer />
      <TopRecipes />
      <ClientSays />
      <Trending />
      <LatestNews />
      <Cart />
    </div>
  );
}

export default Home;
