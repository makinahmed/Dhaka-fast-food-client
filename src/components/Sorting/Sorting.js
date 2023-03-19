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

  };

  return (
    <div className="d-flex justify-content-between">
      <p className="text-muted">Sowing 1-12 of 52 results</p>

      <select value={sortType} onChange={handleOnChange}>
        <option value="atoz">A to Z</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
}

export default Sorting;
