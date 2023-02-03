import React from "react";
import "./HomeExtras.scss";
import { motion } from "framer-motion";

const HomeExtras = ({ t }) => {
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
        <p className="feature__subtitle">{t("extra-main.text")}</p>
        <h2 className="feature__title heading">
          {t("extra-main.main")}
          <span> {t("extra-main.span")}</span>
        </h2>
        <p className="feature__text">{t("extra-main.description")}</p>
      </div>

      <ul className="feature__list">
        <motion.li
          className="feature__item"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.3 }}
          variants={imgAnimate}
        >
          <img
            src="/images/g.svg"
            alt="feature-img"
            className="feature__img floating"
          />
          <h5 className="feature__item-title">
            {t("extra-main.feature-title1")}
          </h5>
          <p>{t("extra-main.feature-description1")}</p>
        </motion.li>
        <motion.li
          className="feature__item"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.3 }}
          variants={imgAnimate}
        >
          <img
            src="/images/l.svg"
            alt="feature-img"
            className="feature__img floating"
          />
          <h5 className="feature__item-title">
            {t("extra-main.feature-title2")}
          </h5>
          <p>{t("extra-main.feature-description2")}</p>
        </motion.li>
        <motion.li
          className="feature__item"
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.3 }}
          variants={imgAnimate}
        >
          <img
            src="/images/b.svg"
            alt="feature-img"
            className="feature__img floating"
          />
          <h5 className="feature__item-title">
            {t("extra-main.feature-title3")}
          </h5>
          <p>{t("extra-main.feature-description3")}</p>
        </motion.li>
      </ul>
      <div className="spacer layer10"></div>
    </motion.section>
  );
};

export default HomeExtras;
