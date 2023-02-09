import React from "react";
import { Link } from "react-router-dom";
 
import './blogsCart.css';
function BlogsCart({ blog }) {
   
  return (
    <div className="rounded blog-cart ">
      <img className="img-fluid" src={blog?.image} alt="" />
      <h1 className="my-5 text-dark fw-bolder">{blog?.firsttitle}</h1>
      <p>{blog?.firstdescription?.slice(0,250)}....</p>
      <Link to={`/blog/${blog._id}`} className="my-5">READ MORE</Link>
    </div>
  );
}

export default BlogsCart;
