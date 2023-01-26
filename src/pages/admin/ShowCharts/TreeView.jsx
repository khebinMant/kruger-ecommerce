import React from "react";
import TreeComponent from "../Analytics/Charts/TreeComponent/TreeComponent";
import "./ShowCharts.scss";

const TreeView = () => {
  return (
    <div className="show_container">
      <div className="show_chart">
        <h2>Tree Chart</h2>
        <TreeComponent />
      </div>
      <div className="spacer layer2"></div>
    </div>
  );
};

export default TreeView;
