"use client";

import Lottie from "lottie-react";
import loopAnimation from "@/public/images/loop.json";
import {
  BotMessageSquare,
  Brain,
  BrainCircuit,
  ChartArea,
  SearchCheck,
  TextSearch,
} from "lucide-react";
import { InfraBedrock } from "./_components/infra-bedrock";
import Header from "./_components/header";
import {
  IconBold,
  IconBolt,
  IconChartAreaLine,
  IconCpu2,
  IconDatabaseSearch,
  IconWorldSearch,
} from "@tabler/icons-react";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const DashedArrow = ({
  className = "",
  isDouble,
}: {
  className?: string;
  isDouble?: boolean;
}) => (
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
    {isDouble && (
      <div className="w-0 h-0 border-b-[6px] border-b-transparent border-t-[6px] border-t-transparent border-r-[8px] border-r-[#1D2D48]" />
    )}
    <style jsx>{`
      @keyframes movingDash {
        to {
          background-position: 10px 0;
        }
      }
    `}</style>
  </div>
);

// Content map for all sections
const SECTION_CONTENT = {
  "internal-data-sources": {
    id: "internal-data-sources",
    title: "Internal Data Sources",
    content: (
      <div className="grid grid-cols-2 justify-center gap-2">
        <div className="border bg-white rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/exa.jpg" className="max-w-32 object-contain" />
        </div>
        <div className="border bg-white rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/google.png" className="max-w-32 object-contain " />
        </div>
      </div>
    ),
  },
  "external-data-sources": {
    id: "external-data-sources",
    title: "External Data Sources",
    content: (
      <div className="grid grid-cols-2 justify-center gap-2">
        <div className="border  bg-white rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/em.png" className="max-w-32 object-contain" />
        </div>
        <div className="border  bg-white rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/js.png" className="max-w-32 object-contain" />
        </div>
        <div className="border  bg-white rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/globaldata.png" className="max-w-32 object-contain" />
        </div>
        <div className="border   bg-white rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/NielsenIQ.webp" className="max-w-32 object-contain" />
        </div>
      </div>
    ),
  },
  "intelligent-processing": {
    id: "intelligent-processing",
    title: "Intelligent Data Processing",
    content: (
      <>
        Cleaning, normalization, entity resolution, feature creation, and
        policy/rules that turn raw inputs into decision-ready signals.
      </>
    ),
  },
  "proprietary-data": {
    id: "proprietary-data",
    title: "Komerz Proprietary Data",
    content: (
      <>
        A structured knowledge base that captures what KomerzOS learns over
        time—patterns, playbooks, outcomes, and what works for your business.
      </>
    ),
  },
  "where-to-play": {
    id: "where-to-play",
    title: "Where to Play",
    content: (
      <ul>
        <li> • Commercial Consulting</li>
        <li> • Data & Analytics</li>
        <li> • Assortment Planning</li>
        <li> • Channel Understanding</li>
      </ul>
    ),
  },
  "how-to-manage": {
    id: "how-to-manage",
    title: "How to Manage",
    content: (
      <ul>
        <li> • Performance Media</li>
        <li> • Social Marketing</li>
        <li> • Price & Promotions Management</li>
        <li> • Inventory Management</li>
      </ul>
    ),
  },
  "how-to-execute": {
    id: "how-to-execute",
    title: "How to Execute",
    content: (
      <ul>
        <li> • Retailer Activation</li>
        <li> • Planning & Execution</li>
        <li> • Social and Influencer</li>
        <li> • Measurement & Feedback</li>
      </ul>
    ),
  },
  "how-to-win": {
    id: "how-to-win",
    title: "How to Win",
    content: (
      <ul>
        <li> • Customer/Channel Plans</li>
        <li> • Revenue Growth Management</li>
        <li> • Attributed Business Plans</li>
      </ul>
    ),
  },
  "brain-center": {
    id: "brain-center",
    title: "AI Brain Center",
    content: (
      <>
        The central intelligence: continuously learns + optimizes across
        strategy and execution loops—where to play, how to win, manage, and
        execute.
      </>
    ),
  },
  "komerz-agents": {
    id: "komerz-agents",
    title: "Komerz Agents",
    content: (
      <div className="flex flex-col justify-center gap-2">
        <p>
          Specialized agents that propose, simulate, and validate actions before
          execution.
        </p>

        <div className="grid grid-cols-3 justify-center gap-2">
          <div className="border rounded-lg p-3 flex flex-col items-center ">
            <div className="rounded-full border p-1.5 bg-blue-500">
              <TextSearch className="size-5 text-white" />
            </div>
            <h2 className="text-sm text-black font-semibold">DataScout</h2>
            <p className="text-xs">Information Collection Agent</p>
          </div>
          <div className="border rounded-lg p-3 flex flex-col items-center ">
            <div className="rounded-full border p-1.5 bg-red-500">
              <SearchCheck className="size-5 text-white" />
            </div>
            <h2 className="text-sm text-black font-semibold">Logic Guard</h2>
            <p className="text-xs">Vaidation & Critique Agent</p>
          </div>
          <div className="border rounded-lg p-3 flex flex-col items-center ">
            <div className="rounded-full border p-1.5 bg-yellow-500">
              <ChartArea className="size-5 text-white" />
            </div>
            <h2 className="text-sm text-black font-semibold">Insight Forge</h2>
            <p className="text-xs">Report Generation Agent</p>
          </div>
        </div>
      </div>
    ),
  },
  "business-impact": {
    id: "business-impact",
    title: "Business Application and Impact",
    content: (
      <>
        Outcomes you can see: growth, profitability, conversion, retention,
        faster cycles, fewer mistakes—backed by explainable decisions.
      </>
    ),
  },
  "erp-integrations": {
    id: "erp-integrations",
    title: "ERP and Integrations",
    content: (
      <div>
        Syncs decisions into real systems: ERP, OMS, WMS, marketplaces, ad
        platforms, CRM—so execution happens where operations live.
        <div className="mt-2 rounded-xl overflow-hidden border ">
          <img src="/demo/erp.png" alt="ERP & Integrations" />
        </div>
      </div>
    ),
  },
};

export default function PipelinePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId);
    setDrawerOpen(true);
  };

  const currentContent = selectedSection
    ? SECTION_CONTENT[selectedSection as keyof typeof SECTION_CONTENT]
    : null;

  return (
    <div className="bg-white h-screen min-h-screen max-h-screen relative flex flex-col">
      <Header />

      <div className="flex items-center justify-center h-screen ">
        <div className="max-w-7xl mx-auto  flex items-center justify-center h-150 w-full p-2">
          <div className="flex flex-row items-center gap-12 h-full">
            {/* Column 1: Sources */}
            <div className="flex flex-col gap-10 relative">
              <div className="relative">
                <div
                  onClick={() => handleSectionClick("internal-data-sources")}
                  className="p-2 flex flex-col gap-1 items-center justify-center  border rounded-lg font-semibold text-sm w-44 text-center bg-[#EBE7DD] z-10 relative transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-105 cursor-pointer"
                >
                  <IconDatabaseSearch />
                  <p className="text-xs "> Internal Data Sources</p>
                </div>
                {/* Arrow to Processing */}
                <DashedArrow className="w-12 -right-12 top-1/2 -translate-y-1/2" />
              </div>

              <div className="relative">
                <div
                  onClick={() => handleSectionClick("external-data-sources")}
                  className="p-2 flex flex-col gap-1 items-center justify-center border rounded-lg font-semibold text-sm w-44 text-center bg-[#EBE7DD] z-10 relative transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-105 cursor-pointer"
                >
                  <IconWorldSearch />
                  <p className="text-xs ">External Data Sources</p>
                </div>
                {/* Arrow to Processing */}
                <DashedArrow className="w-12 -right-12 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Column 2: Processing */}
            <div className="flex flex-col gap-8 relative">
              <div
                onClick={() => handleSectionClick("intelligent-processing")}
                className="p-2 h-36 w-36 border flex items-center justify-center flex-col rounded-lg bg-white z-10 relative transition-all duration-300 hover:shadow-xl hover:shadow-[#D4CAB3] hover:scale-105 cursor-pointer"
              >
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
              <div
                onClick={() => handleSectionClick("proprietary-data")}
                className="relative scale-75 w-48 h-64 flex flex-col items-center z-10 bg-white transition-all duration-300 hover:scale-[0.78] cursor-pointer group"
              >
                <div className="absolute top-0 w-full h-16 bg-white border-2  border-[#E4DECD] rounded-[50%] z-20 transition-all duration-300 group-hover:shadow-lg  "></div>
                <div
                  className="absolute top-8 w-full h-56 bg-[#1C2D48] border-x-2 border-b-2  border-[#E4DECD] flex items-center justify-center z-10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#D4CAB3]"
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
                  <div
                    onClick={() => handleSectionClick("where-to-play")}
                    className="w-full h-full  bg-[#EBE7DD] border-2 border-[#E4DECD] rounded-tl-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-110 hover:-translate-x-2 hover:-translate-y-2 cursor-pointer origin-bottom-right"
                  >
                    <p className="text-xs text-center pt-6 pl-2 text-[#1C2D48]">
                      1. Where to Play
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-1/2 p-0.5 group/segment">
                  <div
                    onClick={() => handleSectionClick("how-to-manage")}
                    className="w-full h-full  bg-[#EBE7DD] border-2 border-[#E4DECD] rounded-tr-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-110 hover:translate-x-2 hover:-translate-y-2 cursor-pointer origin-bottom-left"
                  >
                    <p className="text-xs text-center pt-6 pr-2 text-[#1C2D48]">
                      3. How to Manage
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-0.5 group/segment">
                  <div
                    onClick={() => handleSectionClick("how-to-execute")}
                    className="w-full h-full   bg-[#EBE7DD] border-2 border-[#E4DECD] rounded-bl-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-110 hover:-translate-x-2 hover:translate-y-2 cursor-pointer origin-top-right"
                  >
                    <p className="text-xs text-center pb-6 pl-2 text-[#1C2D48]">
                      4. How to Execute
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-0.5 group/segment">
                  <div
                    onClick={() => handleSectionClick("how-to-win")}
                    className="w-full h-full  bg-[#EBE7DD] border-2 border-[#E4DECD]  rounded-br-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#D4CAB3] hover:scale-110 hover:translate-x-2 hover:translate-y-2 cursor-pointer origin-top-left"
                  >
                    <p className="text-xs text-center pb-6 pr-2 text-[#1C2D48]">
                      2. How to Win
                    </p>
                  </div>
                </div>
                <svg
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 z-50 scale-50 hover:scale-60 transition-all"
                  viewBox="640 175 160 160"
                  onClick={() => handleSectionClick("brain-center")}
                  style={{ cursor: "pointer" }}
                >
                  <defs>
                    <filter
                      id="shadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                      <feOffset dx="0" dy="2" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <g className="node center-core ">
                    <circle
                      className="core-circle"
                      cx="720"
                      cy="255"
                      r="72"
                      fill="rgba(255,255,255,0.98)"
                      stroke="rgba(29,45,72,0.25)"
                      strokeWidth="2"
                      filter="url(#shadow)"
                    />
                    <circle
                      cx="720"
                      cy="255"
                      r="63"
                      fill="none"
                      stroke="rgba(29,45,72,0.08)"
                      strokeWidth="1"
                    />

                    {/* Lottie Animation - embedded in foreignObject */}
                    <foreignObject
                      x="650"
                      y="185"
                      width="140"
                      height="140"
                      className="infinity-loop-container"
                    >
                      <div
                        className="lottie-wrapper"
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          pointerEvents: "auto",
                        }}
                      >
                        <Lottie
                          animationData={loopAnimation}
                          loop={true}
                          autoplay={true}
                          style={{ width: "100%", height: "100%" }}
                          className="infinity-lottie"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </svg>
              </div>

              {/* Diverging Arrows to the 3 end-blocks */}
              <DashedArrow className="w-28 -right-14 top-[5%] -rotate-35 -translate-y-1/2" />
              <DashedArrow className="w-12 -right-12 top-1/2 -translate-y-1/2" />
              <DashedArrow className="w-28 -right-14 top-[95%] rotate-35 -translate-y-1/2" />
            </div>

            {/* Column 5: End Points */}
            <div className="flex flex-col items-center gap-20 justify-center relative">
              <div
                onClick={() => handleSectionClick("komerz-agents")}
                className="h-24 w-64 border rounded-lg flex flex-col  items-center justify-center bg-white  z-10 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4CAB3]/30 hover:scale-105 cursor-pointer"
              >
                <img
                  src="/demo/brain.svg"
                  className="size-8 text-[#1C2D48] object-contain"
                />
                <p className="text-sm font-medium ">Komerz Agents</p>
              </div>
              <div
                onClick={() => handleSectionClick("business-impact")}
                className="h-24 w-64 border rounded-lg flex flex-col  items-center justify-center bg-white z-10 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4CAB3]/30 hover:scale-105 cursor-pointer"
              >
                <img
                  src="/demo/chart.png"
                  className="size-8 text-[#1C2D48] object-contain"
                />
                <p className="text-sm font-medium">
                  Business application and Impact
                </p>
              </div>
              <div
                onClick={() => handleSectionClick("erp-integrations")}
                className="h-24 w-64 border rounded-lg flex flex-col  items-center justify-center bg-white z-10 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4CAB3]/30 hover:scale-105 cursor-pointer"
              >
                <img
                  src="/demo/integration.png"
                  className="size-10 text-[#1C2D48] object-contain"
                />
                <p className="text-sm font-medium">ERP and Integrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfraBedrock />

      {/* Drawer */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="max-w-2xl mx-auto">
          <div className="mx-auto w-full max-w-4xl  px-4 pb-16 lg:pb-32">
            <DrawerHeader>
              <DrawerTitle className="text-2xl font-bold text-[#1C2D48]">
                {currentContent?.title}
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="mt-3 min-h-75 overflow-y-auto">
                {currentContent?.content}
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
