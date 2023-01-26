import React from "react";
import FunnelComponent from "../Analytics/Charts/FunnelComponent/FunnelComponent";
import "./ShowCharts.scss";

const FunnelView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Funnel Chart</h2>
        <FunnelComponent />
      </div>
      <div className="spacer layer2"></div>
    </div>
  );
};

export default FunnelView;
