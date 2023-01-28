import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../MainPage/Services/Service/Service";
import "./AllServices.scss";

import { motion } from "framer-motion";

import { getAllProducts } from "../../../helpers/products/getAllProducts";
import Loading from "../../../components/Loading";


const AllServices = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const responseProducts = await Promise.resolve(getAllProducts());
    setProducts(
      responseProducts.filter((product) => product.type === "SERVICE")
    );
    setIsLoading(false);
  };
  return (

    isLoading?
    <Loading/>
    :
        <motion.div
      className="show_services"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <h2 className="show_services_title">Todo los Servicios</h2>
      <div className="show_services_container">
        {products.map((item) => (
                <Service key={item.id} item={item} />
        ))}
      </div>
      <div className="spacer layer10"></div>
    </motion.div>
  );
};

export default AllServices;
