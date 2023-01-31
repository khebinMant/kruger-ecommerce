import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "./Product.scss";
import serviceBack from "../../../../../assets/internety-mobil.svg";
const Product = ({ item, i }) => {
  return (
    <NavLink to={`/product/${item.id}`}>
      <motion.article
        className="card-home"
        initial={{ opacity: 0, translateX: -50, translateY: -50 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{ duration: 0.3, delay: i * 0.3 }}
      >
        <header className="card-home__header">
          {item.images ? (
            <img
              className="card-home__img"
              src={
                item.images[0]
                  ? item.images[0].url || item.images[0].uri
                  : serviceBack
              }
              alt="ss"
            />
          ) : (
            <></>
          )}
        </header>
        <div className="card-home__body">
          <div class="circle"></div>
          <div class="circle"></div>
          <h3 className="card-home__title">{item.name}</h3>
          <section className="card-home__price">
            <h4 className="card-home__price-label">Precio</h4>
            <span className="card-home__price-value">{item.price}</span>
          </section>
          <NavLink to="/" className="card-home__btn">
            <i class="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </motion.article>
    </NavLink>
  );
};

export default Product;
