import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/api/cartSlice";
import { productDiscount } from "../../functions/functions";

import "./productCart.css";
function ProductCart({ product }) {
  const dispatch = useDispatch();

  const price = productDiscount(product);
  product = { ...product, ...price };
  console.log(product,'product');
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
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <h1 className="fs-3 text-dark">{product?.firsttitle}</h1>
        <p>{product?.description}</p>

        <div className="cart-bottom">
          <div className="product-price">
            <h3 className="prev-price">${price?.prevPrice}</h3>
            <h3 className="current-price ">${price?.currentPrice}</h3>
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
