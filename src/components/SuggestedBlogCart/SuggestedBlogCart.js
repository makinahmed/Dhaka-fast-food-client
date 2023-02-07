import React from 'react';
 
import './suggestedBlogCart.css';
 

function SuggestedBlogCart({ blog }) {

 
    return (
      <div className="d-flex border rounded blog-suggestion">
        <img className="w-25 p-2" src={blog?.image} alt="" />
        <div className="w-75 p-2">
          <h3 className="title">{blog?.firsttitle}</h3>
          <p className="text-muted">{blog?.firstdescription.slice(0,30)}...</p>
        </div>
      </div>
    );
}


export default SuggestedBlogCart;