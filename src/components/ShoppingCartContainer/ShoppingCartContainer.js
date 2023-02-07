import React from "react";
import "./shoppingCartContainer.css";
import img from "../../asstes/cake.png";
import { useDispatch } from "react-redux";
import { addQuantity } from "../../features/api/cartSlice";
function ShoppingCartContainer({ product }) {
  const dispatch  = useDispatch()
  const handleOnchange = (e) => {
    const value = e.target.value;
  
        dispatch(addQuantity({value,product}));
}
  return (
    <div className="shopping-cart-container">
      <span className="cross"> X </span>
      <img className="cart-imgg" src={img} alt="" />
      <span>{product?.currentPrice}</span>
      <span><input className="w-25" min={0} type="number" onChange={(e)=>handleOnchange(e)} name="" id="" /></span>
      <span>{(product?.quantity * product?.currentPrice).toFixed(2)}</span>
    </div>
  );
}

export default ShoppingCartContainer;
