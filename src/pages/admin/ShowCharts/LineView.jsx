import React from "react";
import LineComponent from "../Analytics/Charts/LineComponent/LineComponent";
import "./ShowCharts.scss";

const LineView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Line Chart</h2>
        <LineComponent />
      </div>
      <div className="spacer layer2"></div>
    </div>
  );
};

export default LineView;
