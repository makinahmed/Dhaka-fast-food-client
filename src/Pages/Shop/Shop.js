import React, { useRef } from "react";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import Banner from "../../components/Banner/Banner";
import Cateogries from "../../components/Cateogries/Cateogries";
import ProductCart from "../../components/ProductCart/ProductCart";
import Sorting from "../../components/Sorting/Sorting";
import "./shop.css";
import RightNav from "../../components/RightNav/RightNav";
import Cart from "../../components/Cart/Cart";
import { RotatingLines } from "react-loader-spinner";
function Shop() {
  const { data, isLoading,isSuccess } = useGetProductsQuery();
const navRef = useRef()
   const showLeftBar = () => {
     navRef.current.classList.toggle("res_show_left_bar");
   };


  return (
    <div>
      {isLoading && (
        <div className="d-flex align-items-center justify-content-center">
          <RotatingLines
            strokeWidth="5"
            animationDuration="0.75"
            width="100"
            strokeColor=" #ffc222"
          />
        </div>
      )}
      {isSuccess && (
        <div className="shop-page">
          <div className="left-nav" onClick={showLeftBar}>
            <RightNav />
          </div>
          <div className="container-fluid  ">
            <Banner title="Shop" />
            <div className="row  gy-5  shop-container">
              <div className="row gy-4 col-sm-12 col-md-9 ">
                <Sorting />
                {data?.map((product) => (
                  <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
                    <ProductCart product={product} />
                  </div>
                ))}
              </div>
              <div
                ref={navRef}
                className="col-sm-12 col-md-6 col-lg-3 category-container"
              >
                <Cateogries data={data} />
              </div>
            </div>
          </div>
          <Cart />
        </div>
      )}
    </div>
  );
}

export default Shop;
