import React from 'react';
import { AiOutlineShoppingCart, AiOutlineStar } from 'react-icons/ai';
import cake from "../../asstes/cake.png";
import './productCart.css';
function ProductCart( ) {
    return (
      <div className="product-cart">
        <div className="product-cart-img">
          <img src={cake} alt="" />
        </div>
        <div className="product-cart-text">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <h1>Chocolate cake</h1>
          <p>
            Browse unique Coca-Cola products, clothing, & accessories, or
            customize
          </p>

          <div className="cart-bottom">
            <div className="product-price">
              <h3 className="prev-price">$17.30</h3>
              <h3 className="current-price ">$11.00</h3>
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