import { WQI } from "@/components/wqi"
import { Sensors } from "@/components/sensors"
export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 sm:h-20 sm:px-6">
          <h1 className="text-lg font-semibold sm:text-xl">PRAMS</h1>
          <div className="ml-auto flex items-center gap-4">
            <div></div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <WQI />
            <Sensors />
            
          
          </div>
        </main>
      </div>
    </div>
  )
}














