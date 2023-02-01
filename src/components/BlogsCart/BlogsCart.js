import React from "react";
import blog6 from "../../asstes/blog-6.jpg";
import './blogsCart.css';
function BlogsCart() {
  return (
    <div className="rounded blog-cart ">
      <img className="img-fluid" src={blog6} alt="" />
      <h1 className="my-5 text-dark fw-bolder">Traditional Soft Pretzels with Sweet Beer Cheese</h1>
      <p>
        Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius
        per a augue magna hac. Nec hac et vestibulum duis a tincidunt per a
        aptent interdum purus feugiat a id aliquet erat himenaeos nunc torquent
        euismod adipiscing adipiscing dui gravida justo.
      </p>
      <button className="my-5">READ MORE</button>
    </div>
  );
}

export default BlogsCart;
