import React from "react";
import "./topRecipes.css";
import toprecepie1 from "../../asstes/top-recepie1.png";
import toprecepie2 from "../../asstes/top-recepie2.png";
import toprecepie3 from "../../asstes/top-recepie3.png";
import toprecepie4 from "../../asstes/top-recepie4.png";
import toprecepie5 from "../../asstes/top-recepie5.png";
import toprecepie6 from "../../asstes/top-recepie6.png";
import delicousRecepie from "../../asstes/delicious-chicken.jpg";
import { AiOutlineRight, AiOutlineShoppingCart } from "react-icons/ai";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import TopRecipeCart from "../TopRecipeCart/TopRecipeCart";
import { Link } from "react-router-dom";

function TopRecipes() {
  const { data,isLoading} = useGetProductsQuery()
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className="container-fluid">
            <div className="d-flex justify-content-between my-5">
              <h2 className="  fw-bolder title">Top recipes</h2>
              <Link to="/shop" className="see-all">
                See All <AiOutlineRight style={{ color: "#ffcd02" }} />
              </Link>
            </div>
            <div className="row g-5">
              {data?.slice(0, 8).map((product) => (
                <TopRecipeCart product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="info">
            <img src={delicousRecepie} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRecipes;
