import React from "react";
import Service from "./Service/Service";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services_container">
      <h2 className="services_container_title">Top Services</h2>
      <div className="services_main">
        <Service />
        <Service />
      </div>
    </section>
  );
};

export default Services;
