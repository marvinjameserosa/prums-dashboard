"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Chronological month order
const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const WaterQual = () => {
  const [data, setData] = useState(
    monthOrder.map((month) => ({
      name: month,
      value: Math.floor(Math.random() * 100), // Initial random values for each month
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        // Generate new values for each month, maintaining chronological order
        const updatedData = prevData.map((entry) => ({
          ...entry,
          value: Math.floor(Math.random() * 100), // New random value for each month
        }));

        // Ensure the data is sorted by month (chronological order)
        updatedData.sort((a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name));

        return updatedData;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Water Quality</h1>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={3}
            activeDot={{ r: 10}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WaterQual;