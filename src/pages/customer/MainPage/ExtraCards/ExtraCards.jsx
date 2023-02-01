import React from "react";
import "./ExtraCards.scss";
import { motion } from "framer-motion";

const ExtraCards = ({ t }) => {
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
          <h1 class="title"> {t("extracards-main.card-title1")}</h1>
        </div>

        <div class="content">
          <p>{t("extracards-main.card-text1")}</p>
        </div>
      </motion.div>
      <div class="card">
        <div class="header">
          <div class="img-box">
            <i class="fa-solid fa-truck"></i>
          </div>
          <h1 class="title">{t("extracards-main.card-title2")}</h1>
        </div>

        <div class="content">
          <p>{t("extracards-main.card-text2")}</p>
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
          <h1 class="title">{t("extracards-main.card-title3")}</h1>
        </div>

        <div class="content">
          <p>{t("extracards-main.card-text3")}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ExtraCards;
