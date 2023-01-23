import React from "react";
import Service from "../MainPage/Services/Service/Service";
import "./AllServices.scss";

const AllServices = () => {
  return (
    <div className="show_services">
      <h2 className="show_services_title">All Services</h2>
      <div className="show_services_container">
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
};

export default AllServices;
