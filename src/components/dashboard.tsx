// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"

import { WQI } from "@/components/wqi"
import { DOChart } from "@/components/do-chart"
import { PHChart } from "./ph-chart"
import { Temperature } from "./temperature-chart"
import { Turbidity } from "./turbidity-chart"

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-1.5 border-b px-4 sm:h-20 sm:px-6">
          <img src="prams-logo.png" className="h-10 w-10"></img>
          <h1 className="text-lg font-semibold sm:text-xl mt-2">PRAMS</h1>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <WQI />
            <DOChart />
            <PHChart />
            <Temperature/>
            <Turbidity/>
          </div>
        </main>
      </div>
    </div>
  )
}














