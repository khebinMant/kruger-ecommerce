import React from "react";
import "./ExtraCards.scss";
import { motion } from "framer-motion";

const ExtraCards = () => {
  const imgAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", duration: 1 },
    },
  };
  return (
    <div className="extra_card">
      <motion.div
        class="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        variants={imgAnimate}
      >
        <div class="header">
          <div class="img-box">
            <i class="fa-solid fa-lock"></i>
          </div>
          <h1 class="title">Seguridad</h1>
        </div>

        <div class="content">
          <p>
            Absolutamente todas las transaciones son privadas y 100% seguras
          </p>
        </div>
      </motion.div>
      <div class="card">
        <div class="header">
          <div class="img-box">
            <i class="fa-solid fa-truck"></i>
          </div>
          <h1 class="title">Rapidez</h1>
        </div>

        <div class="content">
          <p>Enviamos tu pedido en 24 horas. ¡Disfruta tu nuevo dispositivo!</p>
        </div>
      </div>
      <motion.div
        class="card"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        variants={imgAnimate}
      >
        <div class="header">
          <div class="img-box">
            <i class="fa-solid fa-people-group"></i>
          </div>
          <h1 class="title">Eficiencia</h1>
        </div>

        <div class="content">
          <p>
            Soporte al cliente dedicado las 24/7 para ayudarte en todo momento
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ExtraCards;
