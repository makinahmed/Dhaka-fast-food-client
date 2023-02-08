import React, { useState } from "react";
import { useDeleteCuponMutation, useGetCuponQuery, usePostCuponMutation } from "../../features/api/apiSlice";
import "./addCupon.css";
import { useForm } from "react-hook-form";

function AddCupon() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { data,  isSuccess } = useGetCuponQuery()
  
  console.log( isSuccess);

  
   
  const [postCupon, { isLoading,    isError }] = usePostCuponMutation();
const {deleteCupon} = useDeleteCuponMutation()
  const onSubmit = (data) => {
    postCupon(data);
  };
   
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container">
      <div className="row  ">
        <div className="col-sm-12 col-md-6">
          <div className="product-item1">
            <label htmlFor="cupon" className="fs-bolder  ">
              Cupon
            </label>
            <input
              {...register("cupon", { required: true })}
              className=" "
              id="cupon"
              type="text"
            />

            <label htmlFor="discount" className="fs-bolder ">
              Discount
            </label>
            <input
              {...register("discount", { required: true })}
              className=""
              id="discount"
              type="number"
            />

            <input className="mt-5" id="discount" type="submit" />

            {isLoading && <h1 className="text-danger">Loading....</h1>}
            {isSuccess && <h1 className="text-success">Success!</h1>}
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="product-item1 w-50 mt-4">
            <p>Current Cupon: Cupon</p>
            <button >Delete Cupon</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddCupon;
