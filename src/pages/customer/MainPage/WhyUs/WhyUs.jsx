import React from "react";
import "./WhyUs.scss";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <img src="/images/j.svg" alt="" className="whyUs__img" />
      <div className="whyUs__info">
        <h2 className="whyUs__title">
          Why <span>US?</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          quam exercitationem commodi officia, totam in provident id suscipit
          iure quae.
        </p>
        <ul className="whyUs__list">
          <li className="whyUs__item">
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, iusto.
            </p>
          </li>

          <li className="whyUs__item">
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, iusto.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
