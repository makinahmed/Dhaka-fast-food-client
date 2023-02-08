import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetCuponQuery, usePostCuponMutation } from "../../features/api/apiSlice";
import { makeSubTotal, makeTotal } from "../../functions/functions";
import ShoppingCartContainer from "../ShoppingCartContainer/ShoppingCartContainer";
import "./shopCart.css";
function ShopCart() {
  
  const cartProducts = useSelector((state) => state?.cart?.cart);
  const subtotal = makeSubTotal(cartProducts)
  const total = makeTotal(subtotal );
  
  return (
    <div className="container-fluid">
      <div className="row g-5">
        <div className=" col-sm-12 col-md-8 ">
          <div className="cart-wrapper">
            <div className="d-flex justify-content-between ">
              <span></span>
              <span></span>
              <span></span>
              <span>PRODUCT</span>
              <span>PRICE</span>
              <span>QUANTITY</span>
              <span>SUBTOTAL</span>
            </div>
            {cartProducts?.map((product) => (
              <ShoppingCartContainer product={product} />
            ))}
          </div>
          {!cartProducts.length && (
            <h2 className="text-danger">No PRODUCT ADDED</h2>
          )}
        </div>
        <div className=" col-sm-12 col-md-4">
          <h2 className="ms-sm-2 ms-md-2 d-flex">CART TOTALS</h2>
          <div className="cart-totals">
            <div>
              <h2 className="my-5">Subtotal</h2>
              <h2 className="my-5">
                {!total && 0}
                {total}
              </h2>
            </div>

            {/* <div>
              <h2 className="my-5">CUPON</h2>
              <h2 className="my-5">
                <input  className="w-50 ms-5" type="text" />
              </h2>
              <button className="h-50 my-auto apply-btn text-center">APPLY</button>
            </div> */}
            <div>
              <h2>Total</h2>
              <h2>{total}</h2>
            </div>
          </div>
          <Link to="/checkout"  className="proceed-btn">PROCEED TO CHECKOUT</Link>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
