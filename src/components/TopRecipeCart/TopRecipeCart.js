import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToCart } from "../../features/api/cartSlice";

function TopRecipeCart({ product, search }) {
  console.log(search);
  const dispatch = useDispatch();
  let prevPrice;
  let discount = product?.discount;
  if (product?.price) {
    prevPrice = parseFloat(product?.price);
  }
  if (product?.Price) {
    prevPrice = parseFloat(product?.Price);
  }
  let totalDiscountAmount = (prevPrice * discount) / 100;

  let currentPrice = prevPrice - totalDiscountAmount;

  const handleOnclick = (product) => {
    dispatch(addToCart(product));
    const cart = document.querySelector(".shop-cart-container");
    cart.classList.add("hide_cart");
  };
  return (
    <div className="col-sm-12 col-md-6 recepie-container">
      <div className="recipe">
        <div className="recepie-img">
          <img src={product?.image} alt="" />
        </div>
        <div className="recepie-text">
          <Link
            to={`/product/${product._id}`}
            className="recepie-title fw-bold text-decoration-none text-dark"
          >
            {product?.firsttitle}
          </Link>
          <p className="text-muted">{product?.category}</p>
          <span className="text-decoration-line-through pe-5 fw-bold">
            ${prevPrice}
          </span>
          <span className="fw-bolder" style={{ color: "#ffc107" }}>
            ${currentPrice}
          </span>
        </div>
        {!search && (
          <div className="shop-icon" onClick={() => handleOnclick(product)}>
            <AiOutlineShoppingCart
              style={{
                backgroundColor: "#ffc222",
                fontSize: "5rem",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TopRecipeCart;
