import React, { useRef, useState } from "react";
import "./cart.css";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeSubTotal, makeTotal  } from "../../functions/functions";

function Cart() {
  const shopRef = useRef();
  const handleOnClick = (e) => {
    shopRef.current.classList.toggle("hide_cart");
  };
  let totalPrice;
  const cartProducts = useSelector((state) => state?.cart?.cart);
  totalPrice = makeSubTotal(cartProducts);
  totalPrice = makeTotal(totalPrice);
  
  return (
    <div ref={shopRef} className="shop-cart-container ">
      <div className="d-flex justify-content-between sc-title">
        <h2 className="p-2 fs-1">SHOPPING CART</h2>
        <span onClick={handleOnClick} className="p-2 fs-1">
          <RxCross1 />
        </span>
      </div>

      <div className="only-cart">
        {cartProducts?.map((product) => (
          <div className="shopping-cart ">
            <div className="d-flex ">
              <div>
                <span className="border rounded-circle p-1">
                  <RxCross1 />
                </span>
              </div>
              <img className="w-25" src={product.image} alt="" />
              <div>
                <p className="fs-3">{product?.firsttitle}</p>
                <p>
                  {product?.quantity}X{product?.currentPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex flex-column sc-bottom">
        <div className="total-amount d-flex justify-content-between">
          <h2>Sub Total</h2>
          <h2>${totalPrice}</h2>
        </div>
        <Link to="/checkout">Checkout</Link>
        <Link to="/cart">View Cart</Link>
      </div>
    </div>
  );
}

export default Cart;
