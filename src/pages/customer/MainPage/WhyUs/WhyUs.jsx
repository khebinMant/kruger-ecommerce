import React from "react";
import "./WhyUs.scss";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <img src="/images/j.svg" alt="" className="whyUs__img" />
      <div className="whyUs__info">
        <h2 className="whyUs__title">
          ¿Por qué <span>nosotros?</span>
        </h2>
        <p>
          Ofrecemos una amplia selección de los últimos y mejores dispositivos
          móviles, con precios competitivos, envío gratis y atención al cliente
          dedicada para ayudarle en todo momento
        </p>
        <ul className="whyUs__list">
          <li className="whyUs__item">
            <h3>Precios competitivos</h3>
            <p>
              Trabajamos duro para asegurarnos de que nuestros precios sean
              competitivos, para que pueda obtener el mejor valor por su dinero.
            </p>
          </li>

          <li className="whyUs__item">
            <h3>Envío gratuito</h3>
            <p>
              Ofrecemos envío gratis en todos los pedidos, para que pueda
              recibir su dispositivo de manera rápida y sin costo adicional.
            </p>
          </li>
        </ul>
      </div>
      <div className="spacer layer10"></div>
    </section>
  );
};

export default WhyUs;
