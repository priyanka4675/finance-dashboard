import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

export default function Chart({ data }) {
  return (
    <div>
      <h2>Spending Chart</h2>
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" />
      </BarChart>
    </div>
  );
}
