import React from "react";
import { GiFullPizza, GiHamburger, GiPopcorn } from "react-icons/gi";
import { MdCoffeeMaker } from "react-icons/md";
import { FaRandom } from "react-icons/fa";
import "./cateogries.css";
function Cateogries({data}) {
  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <div className="categories-cart">
        <ul>
          <li>
            <span>
              <GiHamburger />
            </span>
            Burger
          </li>
          <li>
            <span>
              <GiFullPizza />
            </span>
            Cold Drinks
          </li>
          <li>
            <span>
              <MdCoffeeMaker />
            </span>
            Hot Drinks
          </li>
          <li>
            <span>
              <GiPopcorn />
            </span>
            Pasta
          </li>
          <li>
            <span>
              <GiFullPizza />
            </span>
            Pizza
          </li>
          <li>
            <span>
              <FaRandom />
            </span>
            Uncategorized
          </li>
        </ul>
        <ul>
          <li>20</li>
          <li>15</li>
          <li>12</li>
          <li>8</li>
          <li>14</li>
          <li>10</li>
        </ul>
      </div>
    </div>
  );
}

export default Cateogries;
