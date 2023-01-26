import React from "react";
import RadialComponent from "../Analytics/Charts/RadialComponent/RadialComponent";
import "./ShowCharts.scss";

const RadialView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Radial Chart</h2>
        <RadialComponent />
      </div>
    </div>
  );
};

export default RadialView;
