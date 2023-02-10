import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { aToz, price, rating } from "../../features/api/filterSlice";
import { sorting } from "../../functions/functions";
import "./sorting.css";
function Sorting() {
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  const [sortType, setSortType] = useState();

  const products = useSelector((state) => state.products);

  const handleOnChange = (e) => {
    setSortType(e.target.value);
    console.log(sortType);
    // if (sortType === "A to Z") {

    //   aToz(data);
    // }

    // if (sortType === "Price") {

    //   price(data);
    // }
    // if (sortType === "Rating") {

    //   rating(data);
    // }
  };

  return (
    <div className="d-flex justify-content-between">
      <p className="text-muted">Sowing 1-12 of 52 results</p>

      <select value={sortType} onChange={handleOnChange}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
    </div>
  );
}

export default Sorting;
