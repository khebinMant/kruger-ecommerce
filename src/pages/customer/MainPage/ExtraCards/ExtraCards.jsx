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
        className="card floating"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        variants={imgAnimate}
      >
        <div className="header">
          <div className="img-box">
            <i className="fa-solid fa-lock"></i>
          </div>
          <h1 className="title"> {t("extracards-main.card-title1")}</h1>
        </div>

        <div className="content">
          <p>{t("extracards-main.card-text1")}</p>
        </div>
      </motion.div>
      <div className="card floating">
        <div className="header">
          <div className="img-box">
            <i className="fa-solid fa-truck"></i>
          </div>
          <h1 className="title">{t("extracards-main.card-title2")}</h1>
        </div>

        <div className="content">
          <p>{t("extracards-main.card-text2")}</p>
        </div>
      </div>
      <motion.div
        className="card floating"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        variants={imgAnimate}
      >
        <div className="header">
          <div className="img-box">
            <i className="fa-solid fa-people-group"></i>
          </div>
          <h1 className="title">{t("extracards-main.card-title3")}</h1>
        </div>

        <div className="content">
          <p>{t("extracards-main.card-text3")}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ExtraCards;
