import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePostBlogMutation } from "../../features/api/apiSlice";
import "./addblogs.css";
function AddBlogs() {
  const { register, handleSubmit, reset } = useForm();
  const key = "d3150d32256faac89674b55ff1a3d474";
  const [fileList, setFileList] = useState();
  const [postBlog, { isLoading, isSuccess, isError }] = usePostBlogMutation();
  const handleFileChange = (e) => {
    setFileList(e.target.files[0]);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", fileList);

    fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((link) => (data.image = link.data.image.url))
      .finally(() => {
        console.log(data, "data");
        postBlog(data)
        reset()
      });
  };
 
 

  return (
    <div>
      {isLoading && <h1 className="text-danger">Loading..........</h1>}
      {isError && <h1 className="text-danger">Error Occured..........</h1>}
      <form onSubmit={handleSubmit(onSubmit)} className="blog-form">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="blog-item1 ">
                <label htmlFor="firsttitle">First Title</label>
                <input
                  id="firsttitle"
                  {...register("firsttitle", { required: true })}
                />
                <label htmlFor="secondtitle">Second Title</label>
                <input id="secondtitle" {...register("secondtitle")} />{" "}
                <label htmlFor="thirdtitle">Third Title</label>
                <input id="thirdtitle" {...register("thirdtitle")} />{" "}
                <label htmlFor="Name">Name</label>
                <input id="Name" {...register("Name")} />{" "}
                <label htmlFor="firstdescription">First Description</label>
                <textarea
                  cols={12}
                  rows={5}
                  id="firstdescription"
                  {...register("firstdescription", { required: true })}
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
                  {...register("seconddescription")}
                />
                <label htmlFor="Quote">Quote</label>
                <textarea
                  cols={12}
                  rows={5}
                  id="Quote"
                  {...register("Quote")}
                />
                <label htmlFor="firstimage">First Image</label>
                <input onChange={handleFileChange} type="file" multiple />
                <input className="submit-btn" type="submit" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBlogs;
