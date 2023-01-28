import React from "react";
import Service from "../MainPage/Services/Service/Service";
import "./AllServices.scss";
import { motion } from "framer-motion";

const AllServices = () => {
  return (
    <motion.div
      className="show_services"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <h2 className="show_services_title">Todo los Servicios</h2>
      <div className="show_services_container">
        <Service />
        <Service />
        <Service />
      </div>
      <div className="spacer layer10"></div>
    </motion.div>
  );
};

export default AllServices;
