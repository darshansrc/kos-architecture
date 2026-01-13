"use client";

import { Brain } from "lucide-react";
import { InfraBedrock } from "./_components/infra-bedrock";
import Header from "./_components/header";
import {
  IconBold,
  IconBolt,
  IconChartAreaLine,
  IconCpu2,
} from "@tabler/icons-react";

const DashedArrow = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center absolute z-0 ${className}`}>
    <div
      className="grow h-px"
      style={{
        backgroundImage:
          "linear-gradient(to right, #1D2D48 50%, transparent 50%)",
        backgroundSize: "10px 1px",
        backgroundRepeat: "repeat-x",
        animation: "movingDash 0.6s linear infinite",
      }}
    />
    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-[#1D2D48]" />
    <style jsx>{`
      @keyframes movingDash {
        to {
          background-position: 10px 0;
        }
      }
    `}</style>
  </div>
);

export default function PipelinePage() {
  return (
    <div className="bg-white h-screen min-h-screen max-h-screen relative flex flex-col">
      <Header />

      <div className="flex items-center justify-center h-screen ">
        <div className="max-w-7xl mx-auto  flex items-center justify-center h-150 w-full p-2">
          <div className="flex flex-row items-center gap-12 h-full">
            {/* Column 1: Sources */}
            <div className="flex flex-col gap-12 relative">
              <div className="relative">
                <div className="p-2 border rounded-lg font-semibold text-sm w-44 text-center bg-[#EBE7DD] z-10 relative transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-105 cursor-pointer">
                  Internal Data Sources
                </div>
                {/* Arrow to Processing */}
                <DashedArrow className="w-12 -right-12 top-1/2 -translate-y-1/2" />
              </div>

              <div className="relative">
                <div className="p-2 border rounded-lg font-semibold text-sm w-44 text-center bg-[#EBE7DD] z-10 relative transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-105 cursor-pointer">
                  External Data Sources
                </div>
                {/* Arrow to Processing */}
                <DashedArrow className="w-12 -right-12 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Column 2: Processing */}
            <div className="flex flex-col gap-8 relative">
              <div className="p-2 h-36 w-36 border flex items-center justify-center flex-col rounded-lg bg-white z-10 relative transition-all duration-300 hover:shadow-xl hover:shadow-[#D4CAB3] hover:scale-105 cursor-pointer">
                <img
                  src="/data-processing.png"
                  className="size-16"
                  alt="Processing"
                />
                <p className="text-xs text-center font-medium">
                  Intelligent data processing
                </p>
              </div>
              {/* Arrow to Proprietary Data */}
              <DashedArrow className="w-18 -right-18 top-1/2 -translate-y-1/2" />
            </div>

            {/* Column 3: Proprietary Data */}
            <div className="flex items-center justify-center relative">
              <div className="relative scale-75 w-48 h-64 flex flex-col items-center z-10 bg-white transition-all duration-300 hover:scale-[0.78] cursor-pointer group">
                <div className="absolute top-0 w-full h-16 bg-white border-2  border-[#E4DECD] rounded-[50%] z-20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#D4CAB3]"></div>
                <div
                  className="absolute top-8 w-full h-56 bg-[#1C2D48] border-x-2 border-b-2  border-[#E4DECD] flex items-center justify-center z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#D4CAB3]/50"
                  style={{ borderRadius: "0 0 50% 50% / 0 0 25% 25%" }}
                >
                  <p className="text-white text-center font-bold text-lg mt-4 tracking-tight">
                    Komerz Proprietary Data
                  </p>
                </div>
              </div>
              {/* Arrow to Circle Chart */}
              <DashedArrow className="w-20 -right-12 top-1/2 -translate-y-1/2" />
            </div>

            {/* Column 4: Circle Chart */}
            <div className="flex items-center justify-center relative">
              <div className="relative w-80 h-80 z-10">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 p-0.5 group/segment">
                  <div className="w-full h-full  bg-[#EBE7DD] border-2 border-[#E4DECD] rounded-tl-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-110 hover:-translate-x-2 hover:-translate-y-2 cursor-pointer origin-bottom-right">
                    <p className="text-xs text-center pt-6 pl-2 text-[#1C2D48]">
                      Where to Play
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 p-0.5 group/segment">
                  <div className="w-full h-full  bg-[#EBE7DD] border-2 border-[#E4DECD] rounded-tr-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-110 hover:translate-x-2 hover:-translate-y-2 cursor-pointer origin-bottom-left">
                    <p className="text-xs text-center pt-6 pr-2 text-[#1C2D48]">
                      How to Manage
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-0.5 group/segment">
                  <div className="w-full h-full   bg-[#EBE7DD] border-2 border-[#E4DECD] rounded-bl-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-110 hover:-translate-x-2 hover:translate-y-2 cursor-pointer origin-top-right">
                    <p className="text-xs text-center pb-6 pl-2 text-[#1C2D48]">
                      How to Execute
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-0.5 group/segment">
                  <div className="w-full h-full  bg-[#EBE7DD] border-2 border-[#E4DECD]  rounded-br-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-110 hover:translate-x-2 hover:translate-y-2 cursor-pointer origin-top-left">
                    <p className="text-xs text-center pb-6 pr-2 text-[#1C2D48]">
                      How to Win
                    </p>
                  </div>
                </div>
                <div className="absolute bg-[#1C2D48] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20  rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-[#1C2D48]/70 hover:scale-110 cursor-pointer z-50">
                  <div className="text-white  font-bold text-sm text-center border border-[#1C2D48]">
                    <Brain />
                  </div>
                </div>
              </div>

              {/* Diverging Arrows to the 3 end-blocks */}
              <DashedArrow className="w-28 -right-12 top-[10%] -translate-y-1/2" />
              <DashedArrow className="w-12 -right-12 top-1/2 -translate-y-1/2" />
              <DashedArrow className="w-28 -right-12 top-[90%] -translate-y-1/2" />
            </div>

            {/* Column 5: End Points */}
            <div className="flex flex-col items-center gap-8 justify-center relative">
              <div className="h-24 w-64 border rounded-lg flex flex-col  items-center justify-center bg-white  z-10 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4CAB3]/30 hover:scale-105 cursor-pointer">
                <IconCpu2 className="size-6 text-[#1C2D48]" />
                <p className="text-sm font-medium ">Komerz Agents</p>
              </div>
              <div className="h-24 w-64 border rounded-lg flex flex-col  items-center justify-center bg-white z-10 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4CAB3]/30 hover:scale-105 cursor-pointer">
                <IconChartAreaLine className="size-6 text-[#1C2D48]" />
                <p className="text-sm font-medium">
                  Business application and Impact
                </p>
              </div>
              <div className="h-24 w-64 border rounded-lg flex flex-col  items-center justify-center bg-white z-10 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4CAB3]/30 hover:scale-105 cursor-pointer">
                <IconBolt className="size-6 text-[#1C2D48]" />
                <p className="text-sm font-medium">ERP and Integrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfraBedrock />
    </div>
  );
}
