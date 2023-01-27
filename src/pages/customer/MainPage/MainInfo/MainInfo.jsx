import React from "react";
import "./MainInfo.scss";

const MainInfoHome = () => {
  return (
    <section className="header__info">
      <div className="spacer layer2"></div>

      <div className="header__info-content">
        <h3>La forma más fácil de comprar</h3>
        <h2 className="header__info-title">
          <span>Productos?</span> Esperalos en la puerta de{" "}
          <span> tu casa</span>
        </h2>

        <div className="header__info-btns">
          <button>Comprar</button>
          <button>Explora</button>
        </div>
        <div className="header__info-trust">
          <div>
            <i class="fa-solid fa-sack-dollar"></i>
            <p>Envío 100% gratis!</p>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <p>100% seguro al comprar</p>
          </div>
        </div>
      </div>

      <img className="header__info-img" src="/images/k.svg" alt="" />
      <div className="spacer layer12"></div>
    </section>
  );
};

export default MainInfoHome;
