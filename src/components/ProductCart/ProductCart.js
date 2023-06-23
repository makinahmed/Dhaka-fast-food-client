import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/api/cartSlice";
import { productDiscount } from "../../functions/functions";
import empty from "../../asstes/empty.png";
import fill from "../../asstes/fill.png";

import "./productCart.css";
function ProductCart({ product }) {
  const dispatch = useDispatch();

  const price = productDiscount(product);
  product = { ...product, ...price };
   const handleOnclick = (p) => {
    dispatch(addToCart(p));
    const cart = document.querySelector(".shop-cart-container");
    cart.classList.add("hide_cart");
  };
  return (
    <div className="product-cart">
      <div className="product-cart-img">
        <img src={`${product?.image}`} alt="" />
      </div>
      <div className="product-cart-text">
        <div>
          <Rating
            placeholderRating={product?.Rating}
            emptySymbol={
              <img
                src={empty}
                style={{ height: "20px", width: "20px" }}
                alt=""
              />
            }
            placeholderSymbol={
              <img
                src={fill}
                className="icon"
                style={{ height: "20px", width: "20px" }}
                alt=""
              />
            }
            fullSymbol={
              <img
                src={fill}
                className="icon"
                style={{ height: "20px", width: "20px" }}
                alt=""
              />
            }
          />
        </div>
        <Link
          to={`/product/${product?._id}`}
          className="fs-3 text-dark text-decoration-none"
        >
          {product?.firsttitle}
        </Link>
        <p>{product?.description}</p>

        <div className="cart-bottom">
          <div className="product-price">
            <h3 className="prev-price">৳{price?.prevPrice}</h3>
            <h3 className="current-price ">৳{price?.currentPrice}</h3>
          </div>

          <AiOutlineShoppingCart
            onClick={() => handleOnclick(product)}
            style={{
              backgroundColor: "#ffc222",
              fontSize: "5rem",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
