"use client";

import React, { useState } from "react";

import { Brain, ChartArea, SearchCheck, TextSearch } from "lucide-react";
import Lottie from "lottie-react";
import loopAnimation from "@/public/images/loop.json";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { InfraBedrock } from "./_components/infra-bedrock";
import Header from "./_components/header";
import Image from "next/image";
import StrategicCircle from "./_components/circle";

interface NodeContent {
  title: string;
  body: React.ReactNode;
  chips: string[];
}

const content: Record<string, NodeContent> = {
  internal: {
    title: "Internal Data Sources & social listening",
    body: (
      <div className="grid grid-cols-2 justify-center gap-2">
        <div className="border rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/exa.jpg" className="max-w-32 object-contain" />
        </div>
        <div className="border rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/google.png" className="max-w-32 object-contain " />
        </div>
      </div>
    ),
    chips: ["First-party", "High-signal", "Continuous"],
  },
  external: {
    title: "External Data Sources",
    body: (
      <div className="grid grid-cols-2 justify-center gap-2">
        <div className="border rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/em.png" className="max-w-32 object-contain" />
        </div>
        <div className="border rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/js.jpg" className="max-w-32 object-contain" />
        </div>
        <div className="border rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/globaldata.png" className="max-w-32 object-contain" />
        </div>
        <div className="border rounded-lg p-1 flex items-center justify-center">
          <img src="/demo/NielsenIQ.webp" className="max-w-32 object-contain" />
        </div>
      </div>
    ),
    chips: ["Market context", "Benchmarks", "Enrichment"],
  },
  processing: {
    title: "Intelligent Data Processing",
    body: (
      <>
        Cleaning, normalization, entity resolution, feature creation, and
        policy/rules that turn raw inputs into decision-ready signals.
      </>
    ),
    chips: ["ETL/ELT", "Feature store", "Governance"],
  },
  data: {
    title: "Komerz Proprietary Data",
    body: (
      <>
        A structured knowledge base that captures what KomerzOS learns over
        time—patterns, playbooks, outcomes, and what works for your business.
      </>
    ),
    chips: ["Proprietary", "Compounding", "Secure"],
  },
  agents: {
    title: "Komerz Agents",
    body: (
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
    chips: ["Autonomous", "Guardrails", "Tool-using"],
  },
  brain: {
    title: "KomerzOS Decision Core",
    body: (
      <>
        The central intelligence: continuously learns + optimizes across
        strategy and execution loops—where to play, how to win, manage, and
        execute.
      </>
    ),
    chips: ["Closed-loop", "Learning system", "Optimization"],
  },
  q1: {
    title: "1. Where to Play",
    body: (
      <ul>
        <li> • COMMERCIAL CONSULTING</li>
        <li> • DATA & ANALYTICS</li>
        <li> • ASSORTMENT PLANNING</li>
        <li> • CHANNEL UNDERSTANDING</li>
      </ul>
    ),
    chips: ["Size of price", "competitive analysis", "PPA and RTM analysis"],
  },
  q2: {
    title: "2. How to Win",
    body: (
      <ul>
        <li> • CUSTOMER/CHANNEL PLANS</li>
        <li> • REVENUE GROWTH MANAGEMENT</li>
        <li> • ATTRIBUTED BUSINESS PLANS</li>
      </ul>
    ),
    chips: [
      "Channel and customer plans and forecast for 2 years based on brand PPA",
    ],
  },
  q3: {
    title: "3. How to Manage",
    body: (
      <ul>
        <li> • PERFORMANCE MEDIA</li>
        <li> • SOCIAL MARKETING</li>
        <li> • PRICE & PROMTIONS MANAGEMENT</li>
        <li> • INVENTORY MANAGEMENT</li>
      </ul>
    ),
    chips: ["Developing the activation plan with measurement"],
  },
  q4: {
    title: "4. How to Execute",
    body: (
      <ul>
        <li> • RETAILER ACTIVATION</li>
        <li> • PLANNING & EXECUTION</li>
        <li> • SOCIAL AND INFLUENCER</li>
        <li> • MEASUREMENT & FEEDBACK</li>
      </ul>
    ),
    chips: ["Getting the activation framework deployed and monitored"],
  },
  impact: {
    title: "Business Application & Impact",
    body: (
      <>
        Outcomes you can see: growth, profitability, conversion, retention,
        faster cycles, fewer mistakes—backed by explainable decisions.
      </>
    ),
    chips: ["Impact", "Reporting", "Attribution"],
  },
  erp: {
    title: "ERP & Integrations",
    body: (
      <div>
        Syncs decisions into real systems: ERP, OMS, WMS, marketplaces, ad
        platforms, CRM—so execution happens where operations live.
        <div>
          <img src="/demo/erp.png" alt="ERP & Integrations" />
        </div>
      </div>
    ),
    chips: [],
  },
};

export default function PipelinePage() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const [panelContent, setPanelContent] = useState<NodeContent | null>(null);

  const handleNodeClick = (id: string) => {
    setActiveNode(id);
    setPanelContent(
      content[id] || {
        title: "KomerzOS Architecture",
        body: (
          <>
            Click any block to highlight connected flows and see what it does.
          </>
        ),
        chips: ["Single-fold", "Interactive", "Animated flows"],
      },
    );
  };

  const handleBackgroundClick = () => {
    setActiveNode("");
  };

  return (
    <div className="bg-white h-screen min-h-screen max-h-screen relative flex flex-col">
      <Header />

      <div
        className="flex items-center justify-center h-screen "
        onClick={handleBackgroundClick}
      >
        <Drawer
          open={!!activeNode && !!panelContent}
          onOpenChange={(open) => !open && setActiveNode("")}
        >
          {panelContent && (
            <DrawerContent className="max-w-2xl mx-auto">
              <div className="mx-auto w-full px-4 pb-16 lg:pb-32">
                <DrawerHeader>
                  <DrawerTitle>{panelContent.title}</DrawerTitle>
                  <DrawerDescription>{panelContent.body}</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {panelContent.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </DrawerContent>
          )}
        </Drawer>

        <div className="max-w-7xl mx-auto border flex items-center justify-center h-150 w-full p-2">
          <div className="flex flex-row items-center gap-8 h-full">
            {/* start */}
            <div className="flex flex-col gap-8">
              <div className="p-2 border rounded-lg font-semibold text-sm">
                Internal Data Sources
              </div>
              <div className="p-2 border rounded-lg font-semibold text-sm ">
                External Data Sources
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="p-2 border flex items-center justify-center flex-col rounded-lg">
                <img src="/data-processing.png" className="size-24" />
                <p className="text-xs font-medium">
                  Intelligent data processing
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div className="relative scale-75 w-48 h-64 flex flex-col items-center">
                <div className="absolute top-0 w-full h-16 bg-white border-2 border-gray-300 rounded-[50%] z-20"></div>

                <div
                  className="absolute top-8 w-full h-56 bg-[#1e293b] border-x-2 border-b-2 border-gray-300 flex items-center justify-center z-10"
                  style={{ borderRadius: "0 0 50% 50% / 0 0 25% 25%" }}
                >
                  <p className="text-white text-center font-bold text-lg mt-4 tracking-tight">
                    Komerz Proprietary Data
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center ">
              <div className="relative w-80 h-80">
                <div className="absolute top-0 left-0 w-1/2 h-1/2 p-1">
                  <div className="w-full h-full bg-blue-500 rounded-tl-full flex items-center justify-center text-white font-semibold">
                    <p className="text-sm ">Where to Play</p>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-1/2 h-1/2 p-1">
                  <div className="w-full h-full bg-green-500 rounded-tr-full flex items-center justify-center text-white font-semibold">
                    <p className="text-sm ">How to Manage</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 p-1">
                  <div className="w-full h-full bg-yellow-500 rounded-bl-full flex items-center justify-center text-white font-semibold">
                    <p className="text-sm ">How to Execute</p>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 p-1">
                  <div className="w-full h-full bg-red-500 rounded-br-full flex items-center justify-center text-white font-semibold">
                    <p className="text-sm ">How to Win</p>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="text-gray-800 font-bold text-sm text-center">
                    <Brain />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 justify-center ">
              <div className="h-16 w-64 border rounded flex items-center justify-center">
                <p>Komerz Agents</p>
              </div>
              <div className="h-16 w-64 border rounded flex items-center justify-center">
                <p>Business application and Impact</p>
              </div>
              <div className="h-16 w-64 border rounded flex items-center justify-center">
                <p>ERP and Integrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InfraBedrock />
    </div>
  );
}
