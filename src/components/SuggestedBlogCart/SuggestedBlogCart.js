import React from 'react';
import { Link } from 'react-router-dom';
 
import './suggestedBlogCart.css';
 

function SuggestedBlogCart({ blog }) {

 
    return (
      <Link to={`/blog/${blog?._id}`} className="d-flex border rounded blog-suggestion my-2 p-1">
        <img className="w-25 p-2" src={blog?.image} alt="" />
        <div className="w-75 p-2">
          <h3 className="">{blog?.firsttitle}</h3>
          <p className="text-muted">{blog?.firstdescription.slice(0,30)}...</p>
        </div>
      </Link>
    );
}


export default SuggestedBlogCart;