"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const TurbidityChart = () => {
    const [data, setData] = useState(
      monthOrder.map((month) => ({
        name: month,
        value: Math.floor(Math.random() * (100 - 50 + 1)) + 50, // Initial random values for each month (50-100)
      }))
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setData((prevData) => {
          // Generate new values for each month, maintaining chronological order
          const updatedData = prevData.map((entry) => ({
            ...entry,
            value: Math.floor(Math.random() * (100 - 50 + 1)) + 50, // New random value for each month (50-100)
          }));
  
          // Ensure the data is sorted by month (chronological order)
          updatedData.sort((a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name));
  
          return updatedData;
        });
      }, 10000); // Update every 10 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
  
    return (
      <div className="bg-prumspurple rounded-xl w-full h-full p-2 shadow-2xl">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold justify-center ml-5 mt-3 text-gray-700">Dissolved Oxygen</h1>
        </div>
        <ResponsiveContainer width="100%" height={250}>
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
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4a4d52"
              strokeWidth={3}
              activeDot={{ r: 10 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default TurbidityChart;
  