import React from "react";
import Blog from "../Blog/Blog";
import BlogsCart from "../BlogsCart/BlogsCart";
import SuggestedBlogCart from "../SuggestedBlogCart/SuggestedBlogCart";

function Blogs() {
  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-sm-12 col-md-8 border rounded p-0">
          {/* <BlogsCart /> */}
          <Blog/>
        </div>
        <div className="col-sm-12 col-md-4 p-0">
          <SuggestedBlogCart />
          <SuggestedBlogCart />
          <SuggestedBlogCart />
          <SuggestedBlogCart />
          <SuggestedBlogCart />
          <SuggestedBlogCart />
          <SuggestedBlogCart />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
