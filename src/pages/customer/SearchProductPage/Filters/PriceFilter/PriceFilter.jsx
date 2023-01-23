import React from "react";
import "./PriceFilter.scss";

const PriceFilter = () => {
  return (
    <form className="price">
      <h3 className="price__title">Price</h3>
      <ul className="price__list">
        <li className="price__item">
          <label className="price__label" htmlFor="fromPrice">
            From
          </label>
          <input className="price__input" type="number" id="fromPrice" />
        </li>
        <li className="price__item">
          <label className="price__label" htmlFor="toPrice">
            To
          </label>
          <input className="price__input" type="number" id="toPrice" />
        </li>
      </ul>
      <button className="price__btn">Filter Price</button>
    </form>
  );
};

export default PriceFilter;
