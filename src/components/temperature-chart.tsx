"use client";

import React, { useState, useEffect } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function Temperature() {
  const [data, setData] = useState(
    monthOrder.map((month) => ({
      name: month,
      value: Math.floor(Math.random() * (50 - 20 + 1)) + 20, // Random temperatures between 20 and 50
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const updatedData = prevData.map((entry) => ({
          ...entry,
          value: Math.floor(Math.random() * (50 - 20 + 1)) + 20,
        }));

        return updatedData.sort(
          (a, b) => monthOrder.indexOf(a.name) - monthOrder.indexOf(b.name)
        );
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="col-span-2 lg:col-span-3 xl:col-span-4">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Temperature</CardTitle>
          <CardDescription>
            Showing the Average Temperature of the Pasig River per month for the current year.
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="aspect-auto h-[250px] w-full px-4 py-7 sm:p-6">
        <ResponsiveContainer width="100%" height={235}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 14, left: 14, bottom: 25 }}
            syncId={1}
          >
            <CartesianGrid vertical={false} stroke="#f8f8f9" strokeWidth={1.75} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={5}
              fontSize={"12"}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "#f9fafb", borderColor: "#d1d5db" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="orange" 
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
