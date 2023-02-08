import React from "react";
import "./shoppingCartContainer.css";
import img from "../../asstes/cake.png";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, removeFromCart } from "../../features/api/cartSlice";
import { makeSubTotal, makeTotal } from "../../functions/functions";
function ShoppingCartContainer({ product }) {
 
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    const value = e.target.value;  
    dispatch(addQuantity({ value, product }));
  };
  return (
    <div className="shopping-cart-container">
      <span onClick={() => dispatch(removeFromCart(product))} className="cross">
         
        X 
      </span>
      <img className="cart-imgg" src={product?.image} alt="" />
      <span>{product?.currentPrice.toFixed(2)}</span>
      <span>
        <input
          className="w-25"
          min={0}
          type="number"
          onChange={(e) => handleOnchange(e)}
          name=""
          id=""
          value={product?.quantity}
        />
      </span>
      <span>{(product?.quantity * product?.currentPrice).toFixed(2)}</span>
    </div>
  );
}

export default ShoppingCartContainer;
