import React from "react";
import "./topRecipes.css";
import toprecepie1 from "../../asstes/top-recepie1.png";
import toprecepie2 from "../../asstes/top-recepie2.png";
import toprecepie3 from "../../asstes/top-recepie3.png";
import toprecepie4 from "../../asstes/top-recepie4.png";
import toprecepie5 from "../../asstes/top-recepie5.png";
import toprecepie6 from "../../asstes/top-recepie6.png";
import delicousRecepie from "../../asstes/delicious-chicken.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

function TopRecipes() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className="container-fluid">
            <div className="d-flex justify-content-between">
              <h2 className="fs-1 fw-bolder title">Top recipes</h2>
              <p>See All</p>
            </div>
            <div className="row g-5">
              <div className="col-sm-12 col-md-6 recepie-container">
                <div className="recipe ">
                  <div className="recepie-img">
                    <img src={toprecepie1} alt="" />
                  </div>
                  <div className="recepie-text">
                    <h3 className="recepie-title">Title</h3>
                    <p>Cold Drinks</p>
                    <span>$17.30</span>
                    <span>$11.00</span>
                  </div>
                  <div className="shop-icon">
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
              <div className="col-sm-12 col-md-6 recepie-container">
                <div className="recipe">
                  <div className="recepie-img">
                    <img src={toprecepie2} alt="" />
                  </div>
                  <div className="recepie-text">
                    <h3 className="recepie-title">Title</h3>
                    <p>Cold Drinks</p>
                    <span>$17.30</span>
                    <span>$11.00</span>
                  </div>
                  <div className="shop-icon">
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
              <div className="col-sm-12 col-md-6 recepie-container">
                <div className="recipe">
                  <div className="recepie-img">
                    <img src={toprecepie3} alt="" />
                  </div>
                  <div className="recepie-text">
                    <h3 className="recepie-title">Title</h3>
                    <p>Cold Drinks</p>
                    <span>$17.30</span>
                    <span>$11.00</span>
                  </div>
                  <div className="shop-icon">
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
              <div className="col-sm-12 col-md-6 recepie-container">
                <div className="recipe">
                  <div className="recepie-img">
                    <img src={toprecepie4} alt="" />
                  </div>
                  <div className="recepie-text">
                    <h3 className="recepie-title">Title</h3>
                    <p>Cold Drinks</p>
                    <span>$17.30</span>
                    <span>$11.00</span>
                  </div>
                  <div className="shop-icon">
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
              <div className="col-sm-12 col-md-6 recepie-container">
                <div className="recipe">
                  <div className="recepie-img">
                    <img src={toprecepie5} alt="" />
                  </div>
                  <div className="recepie-text">
                    <h3 className="recepie-title">Title</h3>
                    <p>Cold Drinks</p>
                    <span>$17.30</span>
                    <span>$11.00</span>
                  </div>
                  <div className="shop-icon">
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
              <div className="col-sm-12 col-md-6 recepie-container">
                <div className="recipe">
                  <div className="recepie-img">
                    <img src={toprecepie6} alt="" />
                  </div>
                  <div className="recepie-text">
                    <h3 className="recepie-title">Title</h3>
                    <p>Cold Drinks</p>
                    <span>$17.30</span>
                    <span>$11.00</span>
                  </div>
                  <div className="shop-icon">
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
