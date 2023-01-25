import React from "react";
import RadarComponent from "../Analytics/Charts/RadarComponent/RadarComponent";
import "./ShowCharts.scss";

const RadarView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Radar Chart</h2>
        <RadarComponent />
      </div>
    </div>
  );
};

export default RadarView;
