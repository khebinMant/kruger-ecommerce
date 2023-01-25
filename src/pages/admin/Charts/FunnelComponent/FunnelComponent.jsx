import React from "react";
import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
const data = [
  {
    value: 100,
    name: "Customer",
    fill: "#8884d8",
  },
  {
    value: 80,
    name: "Customer",
    fill: "#83a6ed",
  },
  {
    value: 50,
    name: "Customer",
    fill: "#8dd1e1",
  },
  {
    value: 40,
    name: "Customer",
    fill: "#82ca9d",
  },
  {
    value: 26,
    name: "Customer",
    fill: "#a4de6c",
  },
];
const FunnelComponent = () => {
  return (
    <div className="chart" style={{ height: "500px", width: "1000px" }}>
      <div className="title">hola</div>
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart width={730} height={250}>
          <Tooltip />
          <Funnel dataKey="value" data={data} isAnimationActive>
            <LabelList
              position="right"
              fill="#000"
              stroke="none"
              dataKey="name"
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FunnelComponent;
