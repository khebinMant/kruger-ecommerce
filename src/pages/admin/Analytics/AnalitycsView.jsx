import React from "react";

export const AnalitycsView = () => {
  return (
    <div style={{ minHeight: "100vh", width: "1000px", padding: "100px" }}>
      <AreaComponent />
      <LineComponent />
      <BarComponent />
      <RadarComponent />
      <ComposedComponent />
      <PieComponent />
      <TreeComponent />
      <RadialComponent />
      <FunnelComponent />
      <SankeyComponent />
    </div>
  );
};
