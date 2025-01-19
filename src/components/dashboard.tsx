// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
'use client'
import { WQI } from "@/components/wqi"
import { PHChart } from "./ph-chart"
import { Temperature } from "./temperature-chart"
import { Turbidity } from "./turbidity-chart"
import { useState } from "react"



type DataType = {
  id: string; // Unique identifier
  ph: number; // pH value
  temp: number; // Temperature value
  turb: number; // Turbidity value
};
export function Dashboard() {
  const [datas, setDatas] = useState<DataType[]>([]);

 

  console.log({ datas });
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-1.5 border-b px-4 sm:h-20 sm:px-6">
          <img src="prams-logo.png" className="h-10 w-10"></img>
          <h1 className="text-lg font-semibold sm:text-xl mt-2">PRAMS</h1>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {datas.map((data) => (
              <div key={data.id} className="p-4 border rounded">
                <p><strong>ID:</strong> {data.id}</p>
                <p><strong>PH:</strong> {data.ph}</p>
                <p><strong>Temperature:</strong> {data.temp}°C</p>
                <p><strong>Turbidity:</strong> {data.turb} NTU</p>
              </div>
            ))}
            <WQI />
            <PHChart />
            <Temperature />
            <Turbidity />
          </div>
        </main>
      </div>
    </div>
  )
}














