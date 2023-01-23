import React from "react";
import "./Service.scss";

const Service = () => {
  return (
    <article className="service-home">
      <header className="card-home__header">
        <img
          className="card-home__img"
          src="https://www.movistar.com.ec/documents/17502/201287/PopUp-NuevaPortabilidad.png"
          alt=""
        />
      </header>
      <div className="card-home__body">
        <div class="circle circle_service"></div>
        <div class="circle circle_service"></div>
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

export default Service;
