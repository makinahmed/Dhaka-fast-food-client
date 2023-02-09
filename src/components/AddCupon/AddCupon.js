import React, { useState } from "react";
import { useDeleteCuponMutation, useGetCuponQuery, usePostCuponMutation } from "../../features/api/apiSlice";
import "./addCupon.css";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function AddCupon() {
 const [cupon, setCupon] = useState({});
 const [postCupon, { isLoading, isSuccess, isError }] = usePostCuponMutation();
 const onChangeHandler = (e) => {
   let obj = {};
   let name = e.target.name;
   let value = e.target.value;
   obj[name] = value;
   let newObj = { ...cupon, ...obj };
   setCupon(newObj);
 };

 const onClickHandler = () => {
   postCupon(cupon);

   if (isLoading) {
     toast.loading("Loading....", { id: "cupon1" });
   }
   if (isSuccess) {
     toast.success("Success", { id: "cupon1" });
   }
   if (isError) {
     toast.error("Failed", { id: "cupon1" });
   }
   setCupon({});
 };
   
  return (
    <div className="dashboard mt-5">
      <label htmlFor="cupon">Cupon</label>
      <input onChange={onChangeHandler} type="text" id="cupon" name="cupon" />
      <label htmlFor="quantity">Discount</label>
      <input
        onChange={onChangeHandler}
        type="number"
        name="discount"
        min={0}
        id="quantity"
      />
      <button onClick={onClickHandler}>Apply</button>
    </div>
  );
}

export default AddCupon;
