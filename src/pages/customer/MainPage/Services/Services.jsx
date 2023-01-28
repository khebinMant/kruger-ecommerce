import React from "react";
import Service from "./Service/Service";
import "./Services.scss";
import { motion } from "framer-motion";

const Services = () => {
  const elementAnimate = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.6, duration: 3 },
    },
  };
  return (
    <motion.section
      className="services_container"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.3 }}
      variants={elementAnimate}
    >
      <h2 className="services_container_title">Top Servicios</h2>
      <div className="services_main">
        <Service />
        <Service />
      </div>
      <div className="spacer layer10"></div>
    </motion.section>
  );
};

export default Services;
