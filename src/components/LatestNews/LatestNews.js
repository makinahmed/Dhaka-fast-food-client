import React from "react";
import "./latestNews.css";
import blog1 from '../../asstes/blog-1.jpg';
function LatestNews() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12  col-lg-4">
          <div className="blog-container rounded">
            <div className="b-img">
              <img src={blog1} alt="" />
            </div>
            <div className="blog-text">
              <h2>10 Reasons TO DO A Digital Detox Challenge</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat enim possimus earum veniam at dolore necessitatibus
                eius quae! Dolore, beatae!
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
