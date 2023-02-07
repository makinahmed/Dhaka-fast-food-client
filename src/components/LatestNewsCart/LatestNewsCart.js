import React from 'react';
import blog1 from "../../asstes/blog-1.jpg";
function LatestNewsCart({ blog }) {
  
  return (
    <div className="col-sm-12  col-lg-4">
      <div className="blog-container rounded">
        <div className="b-img">
          <img src={blog?.image} alt="" />
        </div>
        <div className="blog-text">
          <h2>{blog?.firsttitle}</h2>
          <p>{blog?.firstdescription.slice(0,100)}...</p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsCart;