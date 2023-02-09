import React from "react";
import { RotatingLines } from "react-loader-spinner";
import Banner from "../../components/Banner/Banner";
import Cart from "../../components/Cart/Cart";
import Features from "../../components/Features/Features";
import PopularDishes from "../../components/PopularDishes/PopularDishes";
import Trending from "../../components/Trending/Trending";
import { useGetProductsQuery } from "../../features/api/apiSlice";

function Menu() {
   const {  isLoading, isSuccess, isError } = useGetProductsQuery();
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
      {
        isSuccess && <div>
          <Banner title="Menu" />
          <PopularDishes />
          <Trending />
          <Features />
          <Cart />
        </div>
      }
    </div>
  );
}

export default Menu;
