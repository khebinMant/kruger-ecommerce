import React from "react";
import "./HomeExtras.scss";
import { motion } from "framer-motion";

const HomeExtras = () => {
  const elementAnimate = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.8, duration: 3 },
    },
  };

  const imgAnimate = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.1, duration: 5 },
    },
  };

  return (
    <motion.section
      className="features"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.3 }}
      variants={elementAnimate}
    >
      <div className="feature">
        <p className="feature__subtitle">¿Qué ofrecemos?</p>
        <h2 className="feature__title heading">
          Encuentra el dispositivo
          <br />
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
        <motion.li
          className="feature__item"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.3 }}
          variants={imgAnimate}
        >
          <img src="/images/g.svg" alt="feature-img" className="feature__img" />
          <h5 className="feature__item-title">Variedad de productos</h5>
          <p>Mantente a la vanguardia de la tecnología con nuestra selección</p>
        </motion.li>
        <motion.li
          className="feature__item"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.3 }}
          variants={imgAnimate}
        >
          <img src="/images/l.svg" alt="feature-img" className="feature__img" />
          <h5 className="feature__item-title">Compra donde sea</h5>
          <p>Experimenta la comodidad y satisfacción de comprar online</p>
        </motion.li>
        <motion.li
          className="feature__item"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.3 }}
          variants={imgAnimate}
        >
          <img src="/images/b.svg" alt="feature-img" className="feature__img" />
          <h5 className="feature__item-title">Pago seguro</h5>
          <p>Compre ahora y únase a millones de clientes satisfechos</p>
        </motion.li>
      </ul>
      <div className="spacer layer10"></div>
    </motion.section>
  );
};

export default HomeExtras;
