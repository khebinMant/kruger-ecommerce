import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";


const RadarComponent = ({customers,orders}) => {
  const [totalVentas,setTotalVentas]=useState(0);

  useEffect(()=>{
    const ventas=orders?.reduce((acc, it) =>
    acc + it.totalPrice, 0)
    setTotalVentas(ventas);
  },[orders]);




  const data = [
    {
      subject: "Clientes",
      A: customers?.length,
     // B: 120,
      fullMark: 20,
    },
    {
      subject: "Pedidos",
      A: orders?.length,
     // B: 130,
      fullMark: 20,
    },
    {
      subject: "Ventas",
      A: totalVentas? totalVentas : 0,
     // B: 130,
      fullMark: 100,
    }
   /* ,{
      subject: "Geography",
      A: 5,
     // B: 100,
      fullMark: 20,
    },
    {
      subject: "Physics",
      A: 5,
      //B: 90,
      fullMark: 20,
    },
    {
      subject: "History",
      A: 5,
      //B: 85,
      fullMark: 20,
    },*/
  ];




  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={60} domain={[0, 1000]} />
        <Radar
          name="Mes curriente"
          dataKey="A"
          stroke="#a1ff69"
          fill="#a1ff69"
          fillOpacity={0.6}
        />
        {/*<Radar
          name="Lily"
          dataKey="B"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
  />*/}
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarComponent;
