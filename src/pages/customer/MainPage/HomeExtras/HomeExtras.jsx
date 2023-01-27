import React from "react";
import "./HomeExtras.scss";

const HomeExtras = () => {
  return (
    <section className="features">
      <div className="feature">
        <p className="feature__subtitle">¿Qué ofrecemos?</p>
        <h2 className="feature__title">Encuentra el dispositivo</h2>
        <h2 className="feature__title">
          perfecto <span> para ti</span>
        </h2>
        <p className="feature__text">
          Aquí encontrarás una amplia variedad de los últimos y mejores
          dispositivos inteligentes. Tenemos algo para
          <br />
          todos, ya sea que estes buscando el último iPhone o un dispositivo
          Android asequible.
        </p>
      </div>

      <ul className="feature__list">
        <li className="feature__item">
          <img src="/images/g.svg" alt="feature-img" className="feature__img" />
          <h5 className="feature__item-title">Variedad de productos</h5>
          <p>Mantente a la vanguardia de la tecnología con nuestra selección</p>
        </li>
        <li className="feature__item">
          <img src="/images/l.svg" alt="feature-img" className="feature__img" />
          <h5 className="feature__item-title">Compra donde sea</h5>
          <p>Experimenta la comodidad y satisfacción de comprar online</p>
        </li>
        <li className="feature__item">
          <img src="/images/b.svg" alt="feature-img" className="feature__img" />
          <h5 className="feature__item-title">Pago seguro</h5>
          <p>Compre ahora y únase a millones de clientes satisfechos</p>
        </li>
      </ul>
    </section>
  );
};

export default HomeExtras;
