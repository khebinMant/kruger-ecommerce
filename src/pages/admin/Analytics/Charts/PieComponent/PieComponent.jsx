import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { getProduct } from "../../../../../helpers/products/getProduct";
import useAnalize from "../helper/useAnalize";



const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    fontSize="12px"
    >
      {`${(percent * 100).toFixed(0)}%  `+name}
    </text>
  );
};

const PieComponent = ({ customers, orders }) => {

  const {gamaBaja,gamaMedia,gamaAlta,servicio}=useAnalize(orders);  
  const data = [
    { name: "Gama baja", value: gamaBaja * 100 },
    { name: "Gama media", value: gamaMedia * 100 },
    { name: "Gama alta", value: gamaAlta * 100 },
    { name: "Servicio", value: servicio * 100 }
  ];




  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
         nameKey="name"
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieComponent;
