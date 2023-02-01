import React from "react";
import "./MainInfo.scss";
import { motion } from "framer-motion";

const MainInfoHome = ({ t }) => {
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
        <h3>{t("header-main.slogan")}</h3>
        <h2 className="header__info-title">
          <span>{t("header-main.span1")}</span> {t("header-main.presentation")}
          <span> {t("header-main.span2")}</span>
        </h2>
        <div className="header__info-btns">
          <button>{t("header-main.btn1")}</button>
          <button>{t("header-main.btn2")}</button>
        </div>
        <div className="header__info-trust">
          <div>
            <i class="fa-solid fa-sack-dollar"></i>
            <p>{t("header-main.text1")}</p>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <p>{t("header-main.text2")}</p>
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
