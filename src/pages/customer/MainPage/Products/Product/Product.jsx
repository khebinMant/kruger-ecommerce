import React from "react";
import "./Product.scss";

const Product = () => {
  return (
    <article className="card-home">
      <header className="card-home__header">
        <img
          className="card-home__img"
          src="https://guide-images.cdn.ifixit.com/igi/o4OjCNmNeOhvsS1P.medium"
          alt=""
        />
      </header>
      <div className="card-home__body">
        <div class="circle"></div>
        <div class="circle"></div>
        <h3 className="card-home__title">Test1</h3>
        <section className="card-home__price">
          <h4 className="card-home__price-label">Price</h4>
          <span className="card-home__price-value">100$</span>
        </section>
        <button className="card-home__btn">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </article>
  );
};

export default Product;
