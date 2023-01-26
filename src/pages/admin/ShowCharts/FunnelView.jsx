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
    </div>
  );
};

export default FunnelView;
