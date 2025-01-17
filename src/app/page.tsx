import DoChart from "@/components/do-chart";
import ParameterCards from "@/components/parameter-cards";
import WaterQual from "@/components/water-qual";
import PHChart from "@/components/ph-chart";
import TemperatureChart from "@/components/temperature-chart";
import TurbidityChart from "@/components/turbidity-chart";

export default function Home() {
  return (
    <>
      <div className="p-4 flex gap-4 flex-col md:flex-row ml-56">
        {/* LEFT */}
        <div className="w-full">
          {/* PARAMETER CARDS */}
          <div className="flex gap-20 flex-row justify-between flex-wrap">
            <ParameterCards type="Dissolved Oxygen"/>
            <ParameterCards type="pH Level"/>
            <ParameterCards type="Temperature"/>
            <ParameterCards type="Turbidity"/>
          </div>
           {/* WQI */}
          <div className="w-full h-[600px] mt-20">
              <WaterQual/>
          </div>
          <div className="w-full h-[350px] mt-20 flex flex-row gap-5">
              <DoChart/>
              <PHChart/>
          </div>
          <div className="w-full h-[350px] mt-10 mb-20 flex flex-row gap-5">
              <TemperatureChart/>
              <TurbidityChart/>
          </div>
        </div>
      </div>  
    </>
  );
}
