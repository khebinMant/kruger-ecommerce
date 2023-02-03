import { useState } from "react";
import { useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarComponent = ({ customers, orders }) => {
  const [totalVentas, setTotalVentas] = useState(0);
  useEffect(() => {
    const ventas = orders?.reduce((acc, it) => acc + it.totalPrice, 0);
    setTotalVentas(ventas);
  }, [orders]);

  const data = [
    {
      name: "Customers",
      uv: customers?.length,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Pedidos",
      uv: orders?.length,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Ventas",
      uv: totalVentas,
      pv: 9800,
      amt: 2290,
    } /*,
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },*/,
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        className="floating"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" stackId="a" fill="#a1ff69" />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarComponent;
