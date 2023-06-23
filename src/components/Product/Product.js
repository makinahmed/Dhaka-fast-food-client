import React from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import "./product.css";
import empty from "../../asstes/empty.png";
import fill from "../../asstes/fill.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/api/cartSlice";
import Cart from "../Cart/Cart";
function Product() {
  const dispatch = useDispatch()
  const { data, isLoading, isSuccess } = useGetProductsQuery();
  let { id } = useParams();
  const product = data?.find((p) => p._id === id);


   const handleOnclick = (product) => {
     dispatch(addToCart(product));
     const cart = document.querySelector(".shop-cart-container");
     cart.classList.add("hide_cart");
   };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="single-product">
            <img src={product?.image} alt="" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="product-details">
            <h2>{product?.firsttitle}</h2>
            <Rating
              placeholderRating={product?.Rating}
              emptySymbol={
                <img
                  src={empty}
                  style={{ height: "30px", width: "30px" }}
                  alt=""
                />
              }
              placeholderSymbol={
                <img
                  src={fill}
                  className="icon"
                  style={{ height: "30px", width: "30px" }}
                  alt=""
                />
              }
              fullSymbol={
                <img
                  src={fill}
                  className="icon"
                  style={{ height: "30px", width: "30px" }}
                  alt=""
                />
              }
            />

            <p className="my-5">{product?.description}</p>
            <span>৳{product?.Price}</span>
          </div>
          <hr />
          <button
            onClick={() => handleOnclick(product)}
            className="addtocart my-5"
          >
            Add To cart
          </button>
          <div>
            <hr />
            <h3 className="fw-bolder my-5">Category</h3>
            <hr />
            <p>List Items</p>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
}

export default Product;
