import React from "react";
import "./MainInfo.scss";
import { motion } from "framer-motion";

const MainInfoHome = () => {
  const elementAnimate = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.8, duration: 3 },
    },
  };
  const imgAnimate = {
    offscreen: { x: 80, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.8, duration: 3 },
    },
  };

  return (
    <section className="header__info">
      <div className="spacer layer2"></div>

      <motion.div
        className="header__info-content"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        variants={elementAnimate}
      >
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
      </motion.div>

      <motion.img
        className="header__info-img"
        src="/images/k.svg"
        alt=""
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        variants={imgAnimate}
      />
      <div className="spacer layer12"></div>
    </section>
  );
};

export default MainInfoHome;
