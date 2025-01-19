// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
'use client'
import { WQI } from "@/components/wqi"
import { DOChart } from "@/components/do-chart"
import { PHChart } from "./ph-chart"
import { Temperature } from "./temperature-chart"
import { Turbidity } from "./turbidity-chart"

import {get, getDatabase, ref} from 'firebase/database'
import { useActionState, useEffect, useState } from "react"
import {app, database} from '@/app/firebase/config'

type DataType = {
  id: string;    // Unique identifier
  ph: number;    // pH value
  temp: number;  // Temperature value
  turb: number;  // Turbidity value
};
export function Dashboard() {
  // const [datas, setDatas] = useState<{ id: string; [key: string]: any }[]>([]);
  const [datas, setDatas] = useState([]);
  const fetchData = async () =>{
    const db = getDatabase(app);
    const dbRef = ref(db, 'data');
    const snapshot = await get(dbRef);
    if(snapshot.exists()){
      setDatas(Object.values(snapshot.val()));
    }
    else{
      alert("error");
    }
  }
  // useEffect(() => {
  //   const dataRef = ref(database, 'data');
  //   get(dataRef).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       const dataArray = Object.entries(snapshot.val()).map(([id, data]) => ({
  //         id,
  //         ...(data as Omit<DataType, 'id'>), // TypeScript: Cast data properly
  //       }));
  //       setDatas(dataArray);
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }, []);
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-1.5 border-b px-4 sm:h-20 sm:px-6">
          <img src="prams-logo.png" className="h-10 w-10"></img>
          <h1 className="text-lg font-semibold sm:text-xl mt-2">PRAMS</h1>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* {datas.map((data) => (
            <div key={data.id}>
              console.log(data.id);
              console.log(data.ph);
              <p>PH: {data.ph}</p>
              <p>Temperature: {data.temp}</p>
              <p>Turbidity: {data.turb}</p>
            </div>
          ))} */}
            {/* <WQI />
            <DOChart />
            <PHChart />
            <Temperature/>
            <Turbidity/> */}
          </div>
        </main>
      </div>
    </div>
  )
}














