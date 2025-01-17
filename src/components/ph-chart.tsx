"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Chronological month order
const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const PHChart = () => {
  const [data, setData] = useState(
    monthOrder.map((month) => ({
      name: month,
      value: Math.floor(Math.random() * 15), // Random values from 0 - 14
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        // Generate new values for each month, maintaining chronological order
        const updatedData = prevData.map((entry) => ({
          ...entry,
          value: Math.floor(Math.random() * 15), // New Random values from 0 - 14
        }));

        // Ensure the data is sorted by month (chronological order)
        updatedData.sort((a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name));

        return updatedData;
      });
    }, 10000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="bg-prumspink rounded-xl w-full h-full p-2 shadow-2xl">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold justify-center ml-5 mt-3 text-gray-700">pH Level</h1>
      </div>
      <ResponsiveContainer width="100%" height={250} >
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 10,
          }}
          syncId={1}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#000" }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#000" }}
            tickLine={false}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{paddingTop: "20px", paddingBottom: "20px" }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4a4d52"
            strokeWidth={3}
            activeDot={{ r: 10}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PHChart;