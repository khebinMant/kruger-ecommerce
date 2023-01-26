import React from "react";
import AreaComponent from "../Analytics/Charts/AreaComponent/AreaComponent";
import "./ShowCharts.scss";

const AreaView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Area Chart</h2>
        <AreaComponent />
      </div>
      <div className="spacer layer2"></div>
    </div>
  );
};

export default AreaView;
