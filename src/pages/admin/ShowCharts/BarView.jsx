import React from "react";
import BarComponent from "../Analytics/Charts/BarComponent/BarComponent";
import "./ShowCharts.scss";

const BarView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Bar Chart</h2>
        <BarComponent />
      </div>
    </div>
  );
};

export default BarView;
