import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./addproducts.css";
function AddProducts() {
  const { register, handleSubmit } = useForm();
  const [files, setFile] = useState(null);
  const formData = new FormData();

  const handleFileChange = (e) => {
    setFile(e.target.files);
  };

  const file = files ? [...files] : [];

  file?.forEach((file, i) => {
    formData.append(`img-${i}`, file, file.name);
  });

  const onSubmit = (data) => {
    console.log(data);
    // for (let file in data.image) {
    //   if (file === "length") {
    //     break;
    //   }
    //   formData.append(`image_${file}`, data.image[file], data.image[file].name);
    // }
    // files = [...formData];
    // console.log(files);
    axios
      .post("/addproduct", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="product-form">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="product-item1">
              <label htmlFor="firsttitle">First Title</label>
              <input
                id="firsttitle"
                {...register("First Title", { required: true })}
              />
              <label htmlFor="description">Description</label>
              <textarea
                cols={12}
                rows={5}
                id="description"
                {...register("Description", { required: true })}
              />
              <label htmlFor="quote">Tags</label>
              <input
                id="quote"
                placeholder="ex: pizza,fast food,cold drinks..."
                {...register("Quote")}
              />
              <label htmlFor="Category">Category</label>
              <input
                id="Category"
                placeholder="ex: pizza,fast food,cold drinks..."
                {...register("Category")}
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
                  {...register("Discount")}
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
                  {...register("Stock")}
                />
                <label className="p-5" htmlFor="stock1">
                  True
                </label>
                <input
                  id="stock"
                  type="radio"
                  value="False"
                  name="stock"
                  {...register("Stock")}
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
                {...register("Facilities")}
              />
              <label htmlFor="image">First Image</label>

              <input onChange={handleFileChange} type="file" multiple />
            </div>
          </div>
        </div>
      </div>
      <input className="submit-btn" type="submit" />
    </form>
  );
}

export default AddProducts;
