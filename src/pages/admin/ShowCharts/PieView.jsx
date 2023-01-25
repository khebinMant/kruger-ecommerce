import React from "react";
import PieComponent from "../Analytics/Charts/PieComponent/PieComponent";
import "./ShowCharts.scss";

const PieView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Pie Chart</h2>
        <PieComponent />
      </div>
    </div>
  );
};

export default PieView;
