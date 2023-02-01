import React from 'react';
import blog6 from "../../asstes/blog-6.jpg";
function SuggestedBlogCart( ) {
    return (
      <div className="d-flex border rounded p-1">
        <img className="w-25 p-2" src={blog6} alt="" />
        <div className="w-75 p-2">
          <h3 className="title">
            The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese
          </h3>
          <p className="text-muted">August 31, 2020</p>
        </div>
      </div>
    );
}

export default SuggestedBlogCart;