import React from "react";
import { ResponsiveContainer, Sankey, Tooltip } from "recharts";
const data0 = {
  nodes: [
    {
      name: "Visit",
    },
    {
      name: "Direct-Favourite",
    },
    {
      name: "Page-Click",
    },
    {
      name: "Detail-Favourite",
    },
    {
      name: "Lost",
    },
  ],
  links: [
    {
      source: 0,
      target: 1,
      value: 3728.3,
    },
    {
      source: 0,
      target: 2,
      value: 354170,
    },
    {
      source: 2,
      target: 3,
      value: 62429,
    },
    {
      source: 2,
      target: 4,
      value: 291741,
    },
  ],
};

const SankeyComponent = () => {
  return (
    <div className="chart" style={{ height: "500px", width: "1000px" }}>
      <div className="title">hola</div>
      <ResponsiveContainer width="100%" height="100%">
        <Sankey
          width={960}
          height={500}
          data={data0}
          nodePadding={50}
          margin={{
            left: 200,
            right: 200,
            top: 100,
            bottom: 100,
          }}
          link={{ stroke: "#77c878" }}
        >
          <Tooltip />
        </Sankey>
      </ResponsiveContainer>
    </div>
  );
};

export default SankeyComponent;
