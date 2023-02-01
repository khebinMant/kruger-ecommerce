import React from "react";
import "./WhyUs.scss";
import { motion } from "framer-motion";

const WhyUs = ({ t }) => {
  const elementAnimate = {
    offscreen: { x: -70, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.8, duration: 3 },
    },
  };
  const imgAnimate = {
    offscreen: { x: 30, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.8, duration: 3 },
    },
  };
  return (
    <section className="whyUs">
      <motion.img
        src="/images/j.svg"
        alt=""
        className="whyUs__img"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        variants={elementAnimate}
      />
      <motion.div
        className="whyUs__info"
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.3 }}
        variants={imgAnimate}
      >
        <h2 className=" whyUs__title heading">
          {t("whyus-main.main")} <span>{t("whyus-main.span")}</span>
        </h2>
        <p>{t("whyus-main.text")}</p>
        <ul className="whyUs__list">
          <li className="whyUs__item">
            <h3>{t("whyus-main.item-title1")}</h3>
            <p>{t("whyus-main.item-description1")}</p>
          </li>

          <li className="whyUs__item">
            <h3>{t("whyus-main.item-title1")}</h3>
            <p>{t("whyus-main.item-description1")}</p>
          </li>
        </ul>
      </motion.div>
      <div className="spacer layer10"></div>
    </section>
  );
};

export default WhyUs;
