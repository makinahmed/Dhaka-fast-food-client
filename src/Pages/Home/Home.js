import React from "react";
import { RotatingLines } from "react-loader-spinner";
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
import { useGetProductsQuery } from "../../features/api/apiSlice";

function Home() {
   const {  isLoading,isSuccess   } = useGetProductsQuery();
  return (
    <div>
      {isLoading && (
        <div className="d-flex align-items-center justify-content-center">
          <RotatingLines
            strokeWidth="5"
            animationDuration="0.75"
            width="200"
            strokeColor=" #ffc222"
          />
        </div>
      )}
     {isSuccess && <div>
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
      </div>}
    </div>
  );
}

export default Home;
