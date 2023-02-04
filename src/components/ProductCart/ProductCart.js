import React from "react";
import { AiOutlineShoppingCart, AiOutlineStar } from "react-icons/ai";
import cake from "../../asstes/cake.png";
import "./productCart.css";
function ProductCart({ product }) {
  let prevPrice;
  let discount = product?.discount
  if (product?.price) {
    prevPrice = parseFloat(  product?.price);
  }
  if (product?.Price) {
    prevPrice = parseFloat(product?.Price);
  }
  let totalDiscountAmount = (prevPrice * discount) / 100;
  
  let currentPrice = prevPrice - totalDiscountAmount;
   
  console.log(currentPrice);
  
  return (
    <div className="product-cart">
      <div className="product-cart-img">
        <img src={`${product?.image}`} alt="" />
      </div>
      <div className="product-cart-text">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <AiOutlineStar />
        <h1>{product?.firsttitle}</h1>
        <p>{product?.description}</p>

        <div className="cart-bottom">
          <div className="product-price">
            <h3 className="prev-price">${prevPrice}</h3>
            <h3 className="current-price ">${currentPrice}</h3>
          </div>

          <AiOutlineShoppingCart
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
