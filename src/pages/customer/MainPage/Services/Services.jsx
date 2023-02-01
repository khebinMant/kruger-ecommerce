import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service/Service";
import { getAllProducts } from "../../../../helpers/products/getAllProducts";
import "./Services.scss";

import { motion } from "framer-motion";

import Loading from "../../../../components/Loading";

const Services = ({ t }) => {
  const elementAnimate = {
    offscreen: { y: 30, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.6, duration: 3 },
    },
  };

  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const responseProducts = await Promise.resolve(getAllProducts());
    setProducts(
      responseProducts.filter(
        (product) => product.type === "SERVICE" && product.status === true
      )
    );
    setIsLoading(false);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <motion.section
      className="services_container"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.3 }}
      variants={elementAnimate}
    >
      <h2 className="services_container_title heading">
        {t("service-main.title")}
      </h2>
      <div className="services_main">
        {products.map((item) => (
          <Service item={item} />
        ))}
      </div>
      <div className="spacer layer10"></div>
    </motion.section>
  );
};

export default Services;
