import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCheckCuponQuery  } from "../../features/api/apiSlice";
 
import {
  cuponDiscount,
  makeSubTotal,
  makeTotal,
} from "../../functions/functions";
import Empty from "../Empty/Empty";
import ShoppingCartContainer from "../ShoppingCartContainer/ShoppingCartContainer";
import "./shopCart.css";
function ShopCart() {
  const [cupon, setCupon] = useState();
  const { data, isLoading, isSuccess } = useCheckCuponQuery({cupon});
  const cartProducts = useSelector((state) => state?.cart?.cart);
  const subtotal = makeSubTotal(cartProducts);
  const total = makeTotal(subtotal);
  const onChangeHandler = (e) => {
    setCupon(e.target.value);
  };

  let discountForCupon;
  const onClickHandler = () => {
  
    if (isSuccess) {
      console.log(data);
   }
  };
  useEffect(() => {
    if (!isLoading) {
      console.log(" ");
    }
  });
  isLoading && console.log("object");
  isSuccess && console.log("2");
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
          {!cartProducts?.length && <Empty title="No Cart Added!" />}
        </div>
        <div className=" col-sm-12 col-md-4">
          <h2 className="ms-sm-2 ms-md-2 d-flex fw-bold">CART TOTALS</h2>
          <div className="cart-totals">
            <div>
              <h2 className="my-5">Subtotal:</h2>
              <h2 className="my-5">
                {!total && 0}
                {total}
              </h2>
            </div>

            <div>
              <h2 className="my-5">CUPON</h2>
              <h2 className="my-5">
                <input
                  onChange={onChangeHandler}
                  className="w-50 ms-5"
                  type="text"
                />
              </h2>
              <button
                onClick={onClickHandler}
                className="h-50 my-auto apply-btn text-center"
              >
                APPLY
              </button>
            </div>
            <div>
              <h2>Vat:</h2>
              <h2>${0}</h2>
            </div>
            <div>
              <h2>Total:</h2>
              <h2>${0}</h2>
            </div>
            <div>
              <h2>Delivery Charge:</h2>
              <h2>${discountForCupon || total}</h2>
            </div>
          </div>
          <Link to="/checkout" className="proceed-btn">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
