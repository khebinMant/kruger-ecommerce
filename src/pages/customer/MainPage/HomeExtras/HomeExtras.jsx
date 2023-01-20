import React from "react";
import "./HomeExtras.scss";

const HomeExtras = () => {
  return (
    <section className="features">
      <div className="feature">
        <p className="feature__subtitle">What we offer</p>
        <h2 className="feature__title">Just sit back at home</h2>
        <h2 className="feature__title">
          we will <span>take care</span>
        </h2>
        <p className="feature__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam, eius.
        </p>
      </div>

      <ul className="feature__list">
        <li className="feature__item">
          <img src="/images/g.svg" alt="feature-img" className="feature__img" />
          <h5 className="feature__item-title">Lot of products</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </li>
        <li className="feature__item">
          <img src="/images/l.svg" alt="feature-img" className="feature__img" />
          <h5 className="feature__item-title">Buy from anywhere</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </li>
        <li className="feature__item">
          <img src="/images/b.svg" alt="feature-img" className="feature__img" />
          <h5 className="feature__item-title">Safe payment</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </li>
      </ul>
    </section>
  );
};

export default HomeExtras;
