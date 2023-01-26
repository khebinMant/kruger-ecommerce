import React from "react";
import ComposedComponent from "../Analytics/Charts/ComposedComponent/ComposedComponent";
import "./ShowCharts.scss";

const ComposedView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Composed Chart</h2>
        <ComposedComponent />
      </div>
      <div className="spacer layer2"></div>
    </div>
  );
};

export default ComposedView;
