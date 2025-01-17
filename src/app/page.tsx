import ParameterCards from "@/components/parameter-cards";
import WaterQual from "@/components/water-qual";

export default function Home() {
  return (
    <>
      <div className="p-4 flex gap-4 flex-col md:flex-row">
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
          <div className="w-full h-[500px]">
              <WaterQual/>
          </div>
        </div>
      </div>  
    </>
  );
}
