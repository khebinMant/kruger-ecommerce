import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service/Service";
import { getAllProducts } from "../../../../helpers/products/getAllProducts";
import "./Services.scss";
import Loading from "../../../../components/Loading";

const Services = () => {

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

  return (
    isLoading?
    <Loading/>
    :
    <section className="services_container">
      <h2 className="services_container_title">Top Servicios</h2>
      <div className="services_main">
      {products.map((item) => (
          <Service item={item} />
        ))}
      </div>
      <div className="spacer layer10"></div>
    </section>
  );
};

export default Services;
