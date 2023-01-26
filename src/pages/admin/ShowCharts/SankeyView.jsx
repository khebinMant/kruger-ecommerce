import React from "react";
import SankeyComponent from "../Analytics/Charts/SankeyComponent/SankeyComponent";
import "./ShowCharts.scss";

const SankeyView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Sankey Chart</h2>
        <SankeyComponent />
      </div>
      <div className="spacer layer2"></div>
    </div>
  );
};

export default SankeyView;
