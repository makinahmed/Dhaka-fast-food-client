import React from "react";
import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
import "./addblogs.css";
function AddBlogs() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="blog-form">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="blog-item1 ">
              <label htmlFor="firsttitle">First Title</label>
              <input
                id="firsttitle"
                {...register("First Title", { required: true })}
              />
              <label htmlFor="secondtitle">Second Title</label>
              <input id="secondtitle" {...register("Second Title")} />{" "}
              <label htmlFor="thirdtitle">Third Title</label>
              <input id="thirdtitle" {...register("Third Title")} />{" "}
              <label htmlFor="quote">Quote</label>
              <input id="quote" {...register("Quote")} />{" "}
              <label htmlFor="firstdescription">First Description</label>
              <textarea
                cols={12}
                rows={5}
                id="firstdescription"
                {...register("First Description", { required: true })}
              />
            </div>
          </div>

            <div className="col-sm-12 col-md-6">
          <div className="blog-item1">
              <label htmlFor="seconddescription">Second Description</label>
              <textarea
                cols={12}
                rows={5}
                id="seconddescription"
                {...register("Second Description", { required: true })}
              />
              <label htmlFor="thirddescription">Third Description</label>
              <textarea
                cols={12}
                rows={5}
                id="thirddescription"
                {...register("Third Description")}
              />
              <label htmlFor="firstimage">First Image</label>
              <input
                id="firstimage"
                {...register("First Image", { required: true })}
              />
              <label htmlFor="secondimage">Second Image</label>
              <input id="secondimage" {...register("Second Image")} />
              <label htmlFor="thirdimage">Third Image</label>
              <input id="thirdimage" {...register("Third Image")} />
              <input className="submit-btn" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddBlogs;
