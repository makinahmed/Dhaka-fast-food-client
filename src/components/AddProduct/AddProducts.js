import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { usePostProductMutation } from "../../features/api/apiSlice";
import "./addproducts.css";

function AddProducts() {
  const [postProduct, { isError, isLoading   }] =
    usePostProductMutation();
  const key = "d3150d32256faac89674b55ff1a3d474";
  const { register, handleSubmit, reset } = useForm();
  const [fileList, setFileList] = useState();

  const handleFileChange = (e) => {
    setFileList(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", fileList);
    const ingredients = data.ingredients.split(",");
    const tags = data.tags.split(",");
    const facilities = data.facilities.split(",");
    data.ingredients = ingredients;
    data.tags = tags;
    data.facilities = facilities;




    fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((link) => (data.image = link.data.image.url))
      .finally(() => {
         
        postProduct(data)
          reset();
      })
  };

  return (
    <div>
      {isLoading && <h1 className="text-danger">Loading..........</h1>}
      {isError && <h1 className="text-danger">Error Occured..........</h1>}
      <form onSubmit={handleSubmit(onSubmit)} className="product-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="product-item1">
                <label htmlFor="firsttitle">First Title</label>
                <input
                  id="firsttitle"
                  {...register("firsttitle", { required: true })}
                />
                <label htmlFor="description">Description</label>
                <textarea
                  cols={12}
                  rows={5}
                  id="description"
                  {...register("description", { required: true })}
                />
                <label htmlFor="tags">Tags</label>
                <input
                  id="tags"
                  placeholder="ex: pizza,fast food,cold drinks..."
                  {...register("tags")}
                />
                <label htmlFor="Category">Category</label>
                <input
                  id="Category"
                  placeholder="ex: pizza,fast food,cold drinks..."
                  {...register("category")}
                />
                <label htmlFor="stock" className="fw-bolder">
                  Stock
                </label>

                <div className="d-flex justify-content-between my-3">
                  <label htmlFor="Price">Price</label>
                  <input className="w-25" id="Price" {...register("Price")} />
                  <label htmlFor="Discount">Discount</label>
                  <input
                    className="w-25"
                    id="Discount"
                    {...register("discount")}
                  />
                </div>
                <label htmlFor="Rating">Rating</label>
                <input className="w-25" id="Rating" {...register("Rating")} />
                <div className="d-flex ">
                  <input
                    id="stock1"
                    type="radio"
                    value="True"
                    name="stock"
                    {...register("stock")}
                  />
                  <label className="p-5" htmlFor="stock1">
                    True
                  </label>
                  <input
                    id="stock"
                    type="radio"
                    value="False"
                    name="stock"
                    {...register("stock")}
                  />
                  <label className="p-5" htmlFor="stock">
                    False
                  </label>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="product-item1">
                <label htmlFor="ingredients">Ingredients</label>
                <textarea
                  placeholder="ex:  Crispy bacon, tasty ham, pineapple, onion and stretchy mozzarella, finished with a BBQ swirl."
                  cols={12}
                  rows={5}
                  id="ingredients"
                  {...register("ingredients", { required: true })}
                />
                <label htmlFor="facilities">Facilities</label>
                <textarea
                  cols={12}
                  placeholder="ex:Free global shipping on all orders,30 days easy returns if you change your mind"
                  rows={5}
                  id="facilities"
                  {...register("facilities")}
                />
                <label htmlFor="image">First Image</label>

                <input onChange={handleFileChange} type="file" multiple />
              </div>
            </div>
          </div>
        </div>
        <input className="submit-btn" type="submit" />
      </form>
    </div>
  );
}

export default AddProducts;
