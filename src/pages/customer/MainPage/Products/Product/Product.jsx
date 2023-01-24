import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Product.scss";

const Product = ({ item }) => {

  return (
    <NavLink to={`/product/${item.id}`}>
      <article className="card-home">
        <header className="card-home__header">
        {
          item.images?
          <img
            className="card-home__img"
            src={item.images[0].uri}
            alt="ss"
          />
          :<></>
        }
        </header>
        <div className="card-home__body">
          <div class="circle"></div>
          <div class="circle"></div>
          <h3 className="card-home__title">{item.name}</h3>
          <section className="card-home__price">
            <h4 className="card-home__price-label">Price</h4>
            <span className="card-home__price-value">{item.price}</span>
          </section>
          <button className="card-home__btn">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </article>
    </NavLink>
  );
};

export default Product;
