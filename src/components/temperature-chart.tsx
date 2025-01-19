"use client";
import { database } from "@/app/firebase/config";
import { ref, child, get } from "firebase/database";
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
  const [currentValue, setCurrentValue] = useState("Value");
  const dbRef = ref(database);

  useEffect(() => {
    const fetchData = () => {
      get(child(dbRef, "data/temp"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            if (typeof data === "number") {
              setCurrentValue(data.toString());
            } else {
              setCurrentValue("Invalid Data");
            }
          } else {
            setCurrentValue("No Data");
          }
        })
        .catch((error) => {
          console.error(error);
          setCurrentValue("Error");
        });
    };
    
    const interval = setInterval(fetchData, 2000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);
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
        <div className="w-full sm:w-1/5 border-t sm:border-t-0 sm:border-l flex items-center justify-center py-4 sm:py-0">
          <div className="text-xl font-bold text-gray-800">{currentValue}</div>
        </div>
      </CardHeader>
      <CardContent className="aspect-auto h-[250px] w-full px-4 py-7 sm:p-6">
        <ResponsiveContainer width="100%" height={235}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 14, left: 14, bottom: 25 }}
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
              contentStyle={{
                backgroundColor: "#ffffff",
                borderColor: "#d1d5db",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "10px 15px",
                fontSize: "14px",
                color: "#333333",
                lineHeight: "1.4",
              }}
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
