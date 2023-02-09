import React, { useState } from "react";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { sorting } from "../../functions/functions";
import "./sorting.css";
function Sorting() {
  const {data,isLoading,isSuccess} =  useGetProductsQuery()
  const [sort, setSort] = useState();
  const [products, setProducts] = useState()
  

  const handleOnChange = (e) => {
    setSort(e.target.value);
     if (data) {
      let result = sorting(data, sort);
      setProducts(result);
    }
  };

  console.log(data, "prddddddddddddddddddddd");
  return (
    <div className="d-flex justify-content-between">
      <p className="text-muted">Sowing 1-12 of 52 results</p>
      <select onChange={handleOnChange} value={sort} className="me-4">
        <option value="Default" name="default" id="">
          Default
        </option>
        <option value="A to Z" name="atoz" id="">
          A to Z
        </option>

        <option value="Price" name="price" id="">
          Price
        </option>
        <option value="Rating" name="rating" id="">
          Rating
        </option>
      </select>
    </div>
  );
}

export default Sorting;
