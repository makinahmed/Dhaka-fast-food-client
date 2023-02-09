import React from "react";
import { Link } from "react-router-dom";
import './latestNews.css';
function LatestNewsCart({ blog }) {
  return (
    <div className="col-sm-12  col-lg-4 latest-news">
      <div className="blog-container rounded">
        <div className="b-img">
          <img src={blog?.image} alt="" />
        </div>
        <div className="blog-text">
          <h2>{blog?.firsttitle}</h2>
          <p className="my-5">{blog?.firstdescription.slice(0, 100)}...</p>
          <Link to={`/blog/${blog._id}`}>READ MORE</Link>
        </div>
      </div>
    </div>
  );
}

export default LatestNewsCart;
