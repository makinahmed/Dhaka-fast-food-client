import React from "react";
import blog6 from "../../asstes/blog-6.jpg";
import './blogsCart.css';
function BlogsCart({ blog }) {
   
  return (
    <div className="rounded blog-cart ">
      <img className="img-fluid" src={blog?.image} alt="" />
      <h1 className="my-5 text-dark fw-bolder">{blog?.firsttitle}</h1>
      <p>{blog?.firstdescription?.slice(0,250)}....</p>
      <button className="my-5">READ MORE</button>
    </div>
  );
}

export default BlogsCart;
