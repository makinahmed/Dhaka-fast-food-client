import React, { useState } from "react";
import "./populardish.css";
import cake from "../../asstes/cake.png";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import ProductCart from "../ProductCart/ProductCart";
import { useGetProductsQuery } from "../../features/api/apiSlice";

function PopularDishes() {
  const [categorizedData, setCategorizedData] = useState([]);
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery();

  const handleClick = (category) => {
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

  console.log(categorizedData, "Categori");
  return (
    <div className="container-fluid">
      <h2>Popular dishes</h2>
      <ul className="dish-name">
        <li onClick={() => handleClick("ALL")}>ALL</li>
        <li onClick={() => handleClick("Pizza")}>PIZZA</li>
        <li onClick={() => handleClick("Pasta")}>PASTA</li>
        <li onClick={() => handleClick("Drinks")}>DRINKS</li>
        <li onClick={() => handleClick("Burger")}>BURGER</li>
        <li onClick={() => handleClick("Cake")}>DESERT</li>
      </ul>
      <div className="row gy-5 gx-1">
        {categorizedData?.map((product) => (
          <div className="col-sm-12 col-md-4 col-lg-3">
            <ProductCart product={product} />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center my-5">
        <button className="all-products ">All Products</button>
      </div>
    </div>
  );
}

export default PopularDishes;
