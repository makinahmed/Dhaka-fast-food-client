import React, { useEffect, useState } from "react";
import "./populardish.css";
import cake from "../../asstes/cake.png";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import ProductCart from "../ProductCart/ProductCart";

import { useGetProductsQuery } from "../../features/api/apiSlice";
import { Link } from "react-router-dom";

function PopularDishes() {
  const [categorizedData, setCategorizedData] = useState([]);
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();
  useEffect(() => {

    setCategorizedData(data);
   
  }, [isLoading]);
  const handleClick = (category = "ALL") => {
    if (category === "Cake") {
      let res = data?.filter((product) => product.category === category);
      setCategorizedData(res);
    } else if (category === "Pizza") {
      let res = data?.filter((product) => product.category === category);
      setCategorizedData(res);
    } else if (category === "Pasta") {
      let res = data?.filter((product) => product.category === category);
      setCategorizedData(res);
    } else if (category === "Drinks") {
      let res = data?.filter((product) => product.category === category);
      setCategorizedData(res);
    } else if (category === "Burger") {
      let res = data?.filter((product) => product.category === category);
      setCategorizedData(res);
    } else {
      let res = data;
      setCategorizedData(res);
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="popular-dish  mt-5 fw-bolder">Popular dishes</h2>
      <div className="row">
        <ul className="dish-name">
          <li onClick={handleClick}>ALL</li>
          <li onClick={() => handleClick("Pizza")}>PIZZA</li>
          <li onClick={() => handleClick("Pasta")}>PASTA</li>
          <li onClick={() => handleClick("Drinks")}>DRINKS</li>
          <li onClick={() => handleClick("Burger")}>BURGER</li>
          <li onClick={() => handleClick("Cake")}>DESERT</li>
        </ul>
      </div>
      <div className="row gy-5 gx-1">
        {categorizedData?.map((product) => (
          <div className="col-sm-12 col-md-4 col-lg-3  mx-auto">
            <ProductCart product={product} />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center my-5">
        <Link to="/shop" className="all-products ">All Products</Link>
      </div>
    </div>
  );
}

export default PopularDishes;
