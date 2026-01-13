"use client";

import React, { useState } from "react";

import { ChartArea, SearchCheck, TextSearch } from "lucide-react";
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

      <div className="wrap">
        <div className="stage" onClick={handleBackgroundClick}>
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

          {/* SVG Diagram */}
          <svg
            viewBox="0 0 1200 600"
            role="img"
            aria-label="Interactive diagram for KomerzOS architecture"
          >
            <defs>
              <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow
                  dx="0"
                  dy="10"
                  stdDeviation="10"
                  floodColor="#000"
                  floodOpacity="0.12"
                />
              </filter>
              <filter
                id="brainShadow"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feDropShadow
                  dx="0"
                  dy="16"
                  stdDeviation="14"
                  floodColor="#000"
                  floodOpacity="0.10"
                />
              </filter>
              <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="4.5" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0
                          0 0 0 .55 0"
                  result="glow"
                />
                <feMerge>
                  <feMergeNode in="glow" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <marker
                id="arrow"
                markerWidth="12"
                markerHeight="12"
                refX="10"
                refY="6"
                orient="auto"
              >
                <path d="M0,0 L12,6 L0,12 Z" fill="#1D2D48"></path>
              </marker>
              <marker
                id="arrow-start"
                markerWidth="12"
                markerHeight="12"
                refX="2"
                refY="6"
                orient="auto"
              >
                <path d="M12,0 L0,6 L12,12 Z" fill="#1D2D48"></path>
              </marker>

              <linearGradient id="brainGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9fb8c8" />
                <stop offset="100%" stopColor="#7a9dad" />
              </linearGradient>

              {/* Backdrop blur filter */}
              <filter
                id="backdropBlur"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>

              {/* Modern card gradient */}
              <linearGradient id="boxGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(255,255,255,0.98)" />
                <stop offset="100%" stopColor="rgba(248,250,252,0.98)" />
              </linearGradient>

              {/* Enhanced Quadrant gradients */}
              <linearGradient id="quadGradTL" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgba(219,234,254,0.5)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
              </linearGradient>
              <linearGradient id="quadGradTR" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(254,243,199,0.5)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
              </linearGradient>
              <linearGradient id="quadGradBL" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="rgba(209,250,229,0.5)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
              </linearGradient>
              <linearGradient id="quadGradBR" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="rgba(254,226,226,0.5)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
              </linearGradient>

              {/* Pattern for texture */}
              <pattern
                id="gridPattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="rgba(29,45,72,0.03)"
                  strokeWidth="0.5"
                />
              </pattern>

              {/* Clip paths for accent bars */}
              <clipPath id="clipInternal">
                <rect x="40" y="195" width="160" height="50" rx="8" ry="8" />
              </clipPath>
              <clipPath id="clipExternal">
                <rect x="40" y="260" width="160" height="50" rx="8" ry="8" />
              </clipPath>
              <clipPath id="clipAgents">
                <rect x="900" y="50" width="200" height="90" rx="8" ry="8" />
              </clipPath>
              <clipPath id="clipImpact">
                <rect x="1010" y="215" width="160" height="100" rx="8" ry="8" />
              </clipPath>
              <clipPath id="clipErp">
                <rect x="885" y="440" width="285" height="120" rx="8" ry="8" />
              </clipPath>
            </defs>

            {/* FLOWS */}
            <path
              id="f_internal_to_proc"
              className={`flow soft `}
              d="M165 220 C205 220 205 220 245 220"
            />
            <path
              id="f_external_to_proc"
              className={`flow soft `}
              d="M165 285 C205 285 205 285 245 285"
            />
            <path
              id="f_proc_to_db"
              className={`flow `}
              d="M310 255 C340 255 350 255 382 255"
            />
            {/* Database to Nucleus Arrow */}
            <path
              id="f_db_to_brain"
              className={`flow `}
              d="M468 255 L560 255"
            />
            {/* Agents to Nucleus (Bidirectional) */}
            <path
              id="f_agents_to_brain"
              className={`flow `}
              d="M900 95 L720 95"
              markerStart="url(#arrow-start)"
            />
            {/* Nucleus to Impact */}
            <path
              id="f_brain_to_impact"
              className={`flow `}
              d="M880 255 L1005 255"
            />
            {/* Nucleus to ERP (Bidirectional) */}
            <path
              id="f_brain_to_erp"
              className={`flow `}
              d="M720 415 C720 460 800 500 885 500"
              markerStart="url(#arrow-start)"
            />

            {/* LEFT: Data sources */}
            <g
              className={`node card-node ${activeNode === "internal" ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick("internal");
              }}
              style={{ cursor: "pointer" }}
            >
              <rect
                className="modern-card"
                x="40"
                y="195"
                width="160"
                height="50"
                rx="8"
                ry="8"
                fill="rgba(255,255,255,0.7)"
                stroke="rgba(29,45,72,0.2)"
                strokeWidth="1"
                filter="url(#shadow)"
              ></rect>
              {/* Left accent bar */}
              <rect
                className="accent-bar"
                x="40"
                y="195"
                width="3"
                height="50"
                fill="rgba(29,45,72,0.2)"
                clipPath="url(#clipInternal)"
              ></rect>
              <text
                className="label"
                x="120"
                y="220"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                Internal Data sources
              </text>
            </g>

            <g
              className={`node card-node ${activeNode === "external" ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick("external");
              }}
              style={{ cursor: "pointer" }}
            >
              <rect
                className="modern-card"
                x="40"
                y="260"
                width="160"
                height="50"
                rx="8"
                ry="8"
                fill="rgba(255,255,255,0.7)"
                stroke="rgba(29,45,72,0.2)"
                strokeWidth="1"
                filter="url(#shadow)"
              ></rect>
              {/* Left accent bar */}
              <rect
                className="accent-bar"
                x="40"
                y="260"
                width="3"
                height="50"
                fill="rgba(29,45,72,0.2)"
                clipPath="url(#clipExternal)"
              ></rect>
              <text
                className="label"
                x="120"
                y="285"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                External Data sources
              </text>
            </g>

            {/* Intelligent Data processing */}
            <g
              className={`node card-node ${activeNode === "processing" ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick("processing");
              }}
              style={{ cursor: "pointer" }}
            >
              <circle
                className="modern-card modern-circle"
                cx="280"
                cy="255"
                r="48"
                fill="rgba(255,255,255,0.7)"
                stroke="rgba(29,45,72,0.2)"
                strokeWidth="1"
                filter="url(#shadow)"
              ></circle>
              <text className="label" x="280" y="239" textAnchor="middle">
                Intelligent
              </text>
              <text className="label" x="280" y="255" textAnchor="middle">
                Data
              </text>
              <text className="label" x="280" y="271" textAnchor="middle">
                processing
              </text>
            </g>

            {/* Komerz Proprietary Data (DB) */}
            <g
              className={`node ${activeNode === "data" ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick("data");
              }}
              style={{ cursor: "pointer" }}
            >
              <defs>
                <linearGradient id="dbGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.98)" />
                  <stop offset="50%" stopColor="rgba(248,250,252,0.98)" />
                  <stop offset="100%" stopColor="rgba(241,245,249,0.98)" />
                </linearGradient>
              </defs>
              <ellipse
                className="shape modern-db"
                cx="425"
                cy="225"
                rx="42"
                ry="14"
                fill="url(#dbGrad)"
              ></ellipse>
              <path
                className="shape modern-db"
                d="M383 225 v60 c0 18 84 18 84 0 v-60"
                fill="url(#dbGrad)"
              ></path>
              <ellipse
                className="shape modern-db"
                cx="425"
                cy="285"
                rx="42"
                ry="14"
                fill="url(#dbGrad)"
              ></ellipse>
              <ellipse
                cx="425"
                cy="225"
                rx="36"
                ry="10"
                fill="none"
                stroke="rgba(29,45,72,0.06)"
                strokeWidth="1"
              ></ellipse>
              <text className="label muted" x="425" y="325" textAnchor="middle">
                Komerz Proprietary Data
              </text>
            </g>

            {/* NUCLEUS WITH QUADRANTS - Larger and Repositioned */}
            <g className="nucleus-container">
              {/* Background glow layers */}
              <circle
                cx="720"
                cy="255"
                r="175"
                fill="rgba(179,202,214,0.15)"
                filter="url(#brainShadow)"
                className="nucleus-glow-outer"
              />
              <circle
                cx="720"
                cy="255"
                r="170"
                fill="rgba(179,202,214,0.25)"
                filter="url(#brainShadow)"
                className="nucleus-glow"
              />

              {/* Quadrant 1: Top-Left - Where to Play (Blue) */}
              <g
                className={`node quadrant ${activeNode === "q1" ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick("q1");
                }}
                style={{ cursor: "pointer" }}
              >
                <path
                  className="quadrant-shape q-blue"
                  d="M715 250 L715 95 A158 158 0 0 0 560 250 Z"
                  fill="url(#quadGradTL)"
                  stroke="rgba(59,130,246,0.4)"
                  strokeWidth="2.5"
                />
                <path
                  d="M715 250 L715 95 A158 158 0 0 0 560 250 Z"
                  fill="url(#gridPattern)"
                  opacity="0.3"
                />
                <text
                  className="quadrant-text"
                  x="638"
                  y="165"
                  textAnchor="middle"
                >
                  <tspan className="bold" fill="#1D2D48">
                    1.
                  </tspan>
                  <tspan fill="#1D2D48"> Where</tspan>
                </text>
                <text
                  className="quadrant-text"
                  x="638"
                  y="183"
                  textAnchor="middle"
                  fill="#1D2D48"
                >
                  to Play
                </text>
              </g>

              {/* Quadrant 2: Top-Right - How to Manage (Amber) */}
              <g
                className={`node quadrant ${activeNode === "q3" ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick("q3");
                }}
                style={{ cursor: "pointer" }}
              >
                <path
                  className="quadrant-shape q-amber"
                  d="M725 250 L880 250 A158 158 0 0 0 725 95 Z"
                  fill="url(#quadGradTR)"
                  stroke="rgba(245,158,11,0.4)"
                  strokeWidth="2.5"
                />
                <path
                  d="M725 250 L880 250 A158 158 0 0 0 725 95 Z"
                  fill="url(#gridPattern)"
                  opacity="0.3"
                />
                <text
                  className="quadrant-text"
                  x="802"
                  y="165"
                  textAnchor="middle"
                >
                  <tspan className="bold" fill="#1D2D48">
                    3.
                  </tspan>
                  <tspan fill="#1D2D48"> How to</tspan>
                </text>
                <text
                  className="quadrant-text"
                  x="802"
                  y="183"
                  textAnchor="middle"
                  fill="#1D2D48"
                >
                  Manage
                </text>
              </g>

              {/* Quadrant 3: Bottom-Left - How to Execute (Emerald) */}
              <g
                className={`node quadrant ${activeNode === "q4" ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick("q4");
                }}
                style={{ cursor: "pointer" }}
              >
                <path
                  className="quadrant-shape q-emerald"
                  d="M715 260 L560 260 A158 158 0 0 0 715 415 Z"
                  fill="url(#quadGradBL)"
                  stroke="rgba(16,185,129,0.4)"
                  strokeWidth="2.5"
                />
                <path
                  d="M715 260 L560 260 A158 158 0 0 0 715 415 Z"
                  fill="url(#gridPattern)"
                  opacity="0.3"
                />
                <text
                  className="quadrant-text"
                  x="638"
                  y="328"
                  textAnchor="middle"
                >
                  <tspan className="bold" fill="#1D2D48">
                    4.
                  </tspan>
                  <tspan fill="#1D2D48"> How to</tspan>
                </text>
                <text
                  className="quadrant-text"
                  x="638"
                  y="346"
                  textAnchor="middle"
                  fill="#1D2D48"
                >
                  Execute
                </text>
              </g>

              {/* Quadrant 4: Bottom-Right - How to Win (Rose) */}
              <g
                className={`node quadrant ${activeNode === "q2" ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick("q2");
                }}
                style={{ cursor: "pointer" }}
              >
                <path
                  className="quadrant-shape q-rose"
                  d="M725 260 L725 415 A158 158 0 0 0 880 260 Z"
                  fill="url(#quadGradBR)"
                  stroke="rgba(244,63,94,0.4)"
                  strokeWidth="2.5"
                />
                <path
                  d="M725 260 L725 415 A158 158 0 0 0 880 260 Z"
                  fill="url(#gridPattern)"
                  opacity="0.3"
                />
                <text
                  className="quadrant-text"
                  x="802"
                  y="328"
                  textAnchor="middle"
                >
                  <tspan className="bold" fill="#1D2D48">
                    2.
                  </tspan>
                  <tspan fill="#1D2D48"> How to</tspan>
                </text>
                <text
                  className="quadrant-text"
                  x="802"
                  y="346"
                  textAnchor="middle"
                  fill="#1D2D48"
                >
                  Win
                </text>
              </g>

              {/* Center circle with infinity loop */}
              <g
                className={`node center-core ${activeNode === "brain" ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleNodeClick("brain");
                }}
                style={{ cursor: "pointer" }}
              >
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
            </g>

            {/* TOP RIGHT: Komerz Agents chip */}
            <g
              className={`node card-node ${activeNode === "agents" ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick("agents");
              }}
              style={{ cursor: "pointer" }}
            >
              <rect
                className="modern-card"
                x="900"
                y="50"
                width="200"
                height="90"
                rx="8"
                ry="8"
                fill="rgba(255,255,255,0.7)"
                stroke="rgba(29,45,72,0.2)"
                strokeWidth="1"
                filter="url(#shadow)"
              ></rect>
              {/* Left accent bar */}
              <rect
                className="accent-bar"
                x="900"
                y="50"
                width="3"
                height="90"
                fill="rgba(29,45,72,0.2)"
                clipPath="url(#clipAgents)"
              ></rect>
              <text
                className="label"
                x="1000"
                y="95"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                Komerz Agents
              </text>

              <g
                className="chip-lines"
                stroke="#1D2D48"
                strokeWidth="2"
                strokeLinecap="round"
                opacity=".8"
              >
                <line x1="945" y1="50" x2="945" y2="26" />
                <line x1="970" y1="50" x2="970" y2="22" />
                <line x1="1000" y1="50" x2="1000" y2="18" />
                <line x1="1030" y1="50" x2="1030" y2="22" />
                <line x1="1055" y1="50" x2="1055" y2="26" />
                <line x1="1100" y1="70" x2="1130" y2="70" />
                <line x1="1100" y1="95" x2="1140" y2="95" />
                <line x1="1100" y1="120" x2="1130" y2="120" />
                <line x1="900" y1="70" x2="870" y2="70" />
                <line x1="900" y1="95" x2="860" y2="95" />
                <line x1="900" y1="120" x2="870" y2="120" />
                <line x1="945" y1="140" x2="945" y2="164" />
                <line x1="970" y1="140" x2="970" y2="168" />
                <line x1="1000" y1="140" x2="1000" y2="172" />
                <line x1="1030" y1="140" x2="1030" y2="168" />
                <line x1="1055" y1="140" x2="1055" y2="164" />
              </g>
            </g>

            {/* RIGHT: Business application and Impact */}
            <g
              className={`node card-node ${activeNode === "impact" ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick("impact");
              }}
              style={{ cursor: "pointer" }}
            >
              <rect
                className="modern-card"
                x="1010"
                y="215"
                width="160"
                height="100"
                rx="8"
                ry="8"
                fill="rgba(255,255,255,0.7)"
                stroke="rgba(29,45,72,0.2)"
                strokeWidth="1"
                filter="url(#shadow)"
              ></rect>
              {/* Left accent bar */}
              <rect
                className="accent-bar"
                x="1010"
                y="215"
                width="3"
                height="100"
                fill="rgba(29,45,72,0.2)"
                clipPath="url(#clipImpact)"
              ></rect>
              <g
                className="chart-icon"
                transform="translate(1038,235)"
                stroke="#1D2D48"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M0 50 L0 0 L50 0"></path>
                <path d="M6 42 L18 28 L30 36 L44 14"></path>
                <path d="M44 14 L44 24"></path>
                <path d="M44 14 L34 14"></path>
              </g>
              <text
                className="label"
                x="1090"
                y="300"
                textAnchor="middle"
                fontSize="12"
              >
                Business Impact
              </text>
            </g>

            {/* BOTTOM RIGHT: ERP and Integrations */}
            <g
              className={`node card-node ${activeNode === "erp" ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick("erp");
              }}
              style={{ cursor: "pointer" }}
            >
              <rect
                className="modern-card"
                x="885"
                y="440"
                width="285"
                height="120"
                rx="8"
                ry="8"
                fill="rgba(255,255,255,0.7)"
                stroke="rgba(29,45,72,0.2)"
                strokeWidth="1"
                filter="url(#shadow)"
              ></rect>
              {/* Left accent bar */}
              <rect
                className="accent-bar"
                x="885"
                y="440"
                width="3"
                height="120"
                fill="rgba(29,45,72,0.2)"
                clipPath="url(#clipErp)"
              ></rect>

              <g transform="translate(930,500)">
                <circle
                  r="26"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="12"
                  strokeDasharray="40 200"
                  strokeLinecap="round"
                ></circle>
                <circle
                  r="26"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="12"
                  strokeDasharray="55 200"
                  strokeDashoffset="-45"
                  strokeLinecap="round"
                ></circle>
                <circle
                  r="26"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="12"
                  strokeDasharray="65 200"
                  strokeDashoffset="-110"
                  strokeLinecap="round"
                ></circle>
                <circle
                  r="26"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="12"
                  strokeDasharray="30 200"
                  strokeDashoffset="-175"
                  strokeLinecap="round"
                  opacity=".0"
                ></circle>
                <circle
                  r="14"
                  fill="rgba(255,255,255,0.98)"
                  opacity=".98"
                ></circle>
              </g>

              <text
                className="label"
                x="1065"
                y="503"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                ERP and Integrations
              </text>
            </g>
          </svg>
        </div>
      </div>

      <InfraBedrock />

      <style jsx global>{`
        .pipeline-wrapper {
          height: 100vh;
          width: 100vw;
          margin: 0;
          font-family:
            ui-sans-serif,
            system-ui,
            -apple-system,
            Segoe UI,
            Roboto,
            Arial,
            "Apple Color Emoji",
            "Segoe UI Emoji";
          color: #1d2d48;
          overflow: hidden;
          background: #b3cad6;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .pipeline-wrapper::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.3),
            #b3cad6,
            #b3cad6
          );
          pointer-events: none;
        }

        /* --- HEADER BAR --- */
        .header-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          background: rgba(29, 45, 72, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #1d2d48;
          z-index: 50;
          position: relative;
          height: 64px;
          flex-shrink: 0;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: #ebe6da;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .logo-text h1 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.01em;
          line-height: 1;
        }

        .logo-text h1 .subtitle {
          font-weight: 400;
          color: #b3cad6;
        }

        .logo-text p {
          margin: 0;
          margin-top: 2px;
          font-size: 10px;
          color: rgba(179, 202, 214, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .header-btn {
          appearance: none;
          border: 1px solid rgba(235, 230, 218, 0.3);
          background: rgba(235, 230, 218, 0.1);
          color: #ebe6da;
          border-radius: 8px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }

        .header-btn:hover {
          background: rgba(235, 230, 218, 0.2);
          border-color: rgba(235, 230, 218, 0.5);
          color: white;
        }

        .header-btn:active {
          transform: translateY(1px);
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #b3cad6;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.5rem 0.75rem;
          border-left: 1px solid rgba(235, 230, 218, 0.2);
          margin-left: 0.5rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .wrap {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .stage {
          width: min(1200px, 98vw);
          height: min(640px, 92vh);
          position: relative;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stage::before {
          content: "";
          position: absolute;
          inset: -40px;
          background: radial-gradient(
            closest-side,
            rgba(255, 255, 255, 0.15),
            transparent 65%
          );
          pointer-events: none;
        }

        svg {
          width: 100%;
          height: 100%;
          display: block;
          overflow: visible;
        }

        .node {
          cursor: pointer;
        }
        .card {
          stroke: rgba(29, 45, 72, 0.25);
          stroke-width: 2;
          rx: 12;
          ry: 12;
          filter: drop-shadow(0 8px 16px rgba(29, 45, 72, 0.12))
            drop-shadow(0 2px 4px rgba(29, 45, 72, 0.08));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .modern-card {
          transition: all 0.25s ease;
        }
        .accent-bar {
          transition: all 0.25s ease;
        }
        .shape {
          stroke: rgba(29, 45, 72, 0.25);
          stroke-width: 2;
          filter: drop-shadow(0 8px 16px rgba(29, 45, 72, 0.12))
            drop-shadow(0 2px 4px rgba(29, 45, 72, 0.08));
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modern-db {
          stroke: rgba(29, 45, 72, 0.2);
          stroke-width: 2.5;
        }
        .pill {
          fill: rgba(255, 255, 255, 0.95);
          stroke: #1d2d48;
          stroke-width: 2;
          rx: 10;
          ry: 10;
          filter: url(#shadow);
          transition: all 0.3s ease;
        }
        .label {
          font-size: 13px;
          fill: #1d2d48;
          font-weight: 600;
          pointer-events: none;
        }
        .label.muted {
          fill: #475569;
          font-size: 12px;
        }
        .tiny {
          font-size: 12px;
          fill: #475569;
        }
        .bold {
          font-weight: 700;
        }

        .flow {
          fill: none;
          stroke: #1d2d48;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
          marker-end: url(#arrow);
          stroke-dasharray: 7 10;
          animation: dash 2.2s linear infinite;
          opacity: 0.85;
        }
        .flow.soft {
          opacity: 0.5;
          stroke-dasharray: 6 12;
          animation-duration: 2.8s;
        }
        .flow.active {
          stroke: #3b82f6;
          stroke-width: 3;
          opacity: 1;
          animation-duration: 1.35s;
          filter: url(#glow);
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -180;
          }
        }

        /* Nucleus Container */
        .nucleus-container {
          transform-origin: 720px 255px;
        }

        .nucleus-glow {
          animation: nucleusPulse 4s ease-in-out infinite;
        }

        @keyframes nucleusPulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(1.015);
          }
        }

        /* Quadrant Styles */
        .quadrant-shape {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 6px 12px rgba(29, 45, 72, 0.08))
            drop-shadow(0 2px 6px rgba(29, 45, 72, 0.06));
        }

        .quadrant:hover .quadrant-shape {
          filter: drop-shadow(0 8px 20px rgba(29, 45, 72, 0.12))
            drop-shadow(0 4px 10px rgba(29, 45, 72, 0.08));
          stroke-width: 3;
          transform: scale(1.015);
          transform-origin: 720px 255px;
        }

        .quadrant.active .quadrant-shape.q-blue {
          stroke: #3b82f6;
          stroke-width: 3.5;
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))
            drop-shadow(0 0 40px rgba(59, 130, 246, 0.2));
        }

        .quadrant.active .quadrant-shape.q-amber {
          stroke: #f59e0b;
          stroke-width: 3.5;
          filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.5))
            drop-shadow(0 0 40px rgba(245, 158, 11, 0.2));
        }

        .quadrant.active .quadrant-shape.q-emerald {
          stroke: #10b981;
          stroke-width: 3.5;
          filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))
            drop-shadow(0 0 40px rgba(16, 185, 129, 0.2));
        }

        .quadrant.active .quadrant-shape.q-rose {
          stroke: #f43f5e;
          stroke-width: 3.5;
          filter: drop-shadow(0 0 20px rgba(244, 63, 94, 0.5))
            drop-shadow(0 0 40px rgba(244, 63, 94, 0.2));
        }

        .quadrant-text {
          font-size: 13px;
          font-weight: 600;
          pointer-events: none;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        .quadrant:hover .quadrant-text,
        .quadrant.active .quadrant-text {
          opacity: 1;
        }

        /* Center Core */
        .core-circle {
          transition: all 0.3s ease;
        }

        .center-core:hover .core-circle {
          stroke: rgba(29, 45, 72, 0.4);
          filter: drop-shadow(0 8px 24px rgba(29, 45, 72, 0.15))
            drop-shadow(0 0 16px rgba(29, 45, 72, 0.1));
        }

        .center-core.active .core-circle {
          stroke: #3b82f6;
          stroke-width: 3.5;
          filter: drop-shadow(0 0 24px rgba(59, 130, 246, 0.6))
            drop-shadow(0 8px 32px rgba(59, 130, 246, 0.3));
        }

        /* Infinity Loop - Lottie */
        .infinity-loop-container {
          pointer-events: none;
        }

        .lottie-wrapper {
          opacity: 0.95;
          transition: all 0.3s ease;
        }

        .center-core:hover .lottie-wrapper,
        .center-core.active .lottie-wrapper {
          opacity: 1;
          transform: scale(1.05);
        }

        .infinity-lottie {
          filter: drop-shadow(0 2px 4px rgba(29, 45, 72, 0.1));
        }

        .node:hover .card,
        .node:hover .pill,
        .node:hover .shape {
          stroke: #3b82f6;
          stroke-width: 3;
          filter: drop-shadow(0 8px 20px rgba(59, 130, 246, 0.3))
            drop-shadow(0 0 16px rgba(59, 130, 246, 0.2));
        }
        .card-node:hover .modern-card {
          stroke: rgba(29, 45, 72, 0.5);
          stroke-width: 1.5;
        }
        .card-node:hover .accent-bar {
          fill: rgba(29, 45, 72, 1);
        }
        .node:hover .modern-db {
          stroke: #3b82f6;
          stroke-width: 3;
          filter: drop-shadow(0 12px 28px rgba(59, 130, 246, 0.25))
            drop-shadow(0 4px 12px rgba(59, 130, 246, 0.15));
        }

        .node:hover .chart-icon,
        .node:hover .chip-lines {
          stroke: #3b82f6;
          opacity: 1;
          filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.4));
        }

        .node.active .card,
        .node.active .pill,
        .node.active .shape {
          stroke: #3b82f6;
          stroke-width: 3.5;
          filter: drop-shadow(0 0 24px rgba(59, 130, 246, 0.6))
            drop-shadow(0 8px 32px rgba(59, 130, 246, 0.3));
        }
        .card-node.active .modern-card {
          stroke: #3b82f6;
          stroke-width: 2;
          filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.4))
            drop-shadow(0 4px 20px rgba(59, 130, 246, 0.2));
        }
        .card-node.active .accent-bar {
          fill: #3b82f6;
        }
        .node.active .modern-db {
          stroke: #3b82f6;
          stroke-width: 3.5;
          filter: drop-shadow(0 0 28px rgba(59, 130, 246, 0.6))
            drop-shadow(0 12px 40px rgba(59, 130, 246, 0.3));
        }

        .node.active .chart-icon,
        .node.active .chip-lines {
          stroke: #3b82f6;
          opacity: 1;
          filter: url(#glow);
        }

        .panel {
          position: absolute;
          left: 16px;
          top: 16px;
          width: min(360px, 92vw);
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border: 2px solid rgba(29, 45, 72, 0.15);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(29, 45, 72, 0.15);
          padding: 14px 14px 12px;
          display: flex;
          gap: 10px;
          align-items: flex-start;
          z-index: 10;
        }
        .panel .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          margin-top: 6px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          box-shadow: 0 0 0 5px rgba(59, 130, 246, 0.12);
          flex: 0 0 auto;
        }
        .panel h3 {
          margin: 0;
          font-size: 15px;
          line-height: 1.25;
          color: #1d2d48;
          font-weight: 600;
        }
        .panel p {
          margin: 6px 0 0 0;
          font-size: 13px;
          color: #475569;
          line-height: 1.4;
        }
        .panel .meta {
          margin-top: 8px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .chip {
          font-size: 11px;
          padding: 5px 10px;
          border-radius: 999px;
          border: 1px solid rgba(29, 45, 72, 0.18);
          background: rgba(235, 230, 218, 0.7);
          color: #1d2d48;
          user-select: none;
          font-weight: 500;
        }

        .paused .flow,
        .paused .nucleus-glow {
          animation-play-state: paused !important;
        }

        .hint {
          position: absolute;
          left: 16px;
          bottom: 16px;
          font-size: 12px;
          color: #475569;
          background: rgba(255, 255, 255, 0.92);
          border: 2px solid rgba(29, 45, 72, 0.15);
          border-radius: 999px;
          padding: 8px 14px;
          box-shadow: 0 10px 30px rgba(29, 45, 72, 0.12);
          user-select: none;
          font-weight: 500;
        }
        @media (max-width: 1024px) {
          .header-bar {
            padding: 0.75rem 1rem;
            height: auto;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .header-left {
            gap: 0.5rem;
          }

          .logo-text h1 {
            font-size: 1rem;
          }

          .header-right {
            gap: 0.25rem;
          }

          .header-btn {
            padding: 0.375rem 0.75rem;
            font-size: 0.75rem;
          }

          .status-badge {
            font-size: 0.65rem;
            padding: 0.375rem 0.5rem;
          }
        }

        @media (max-width: 840px) {
          .pipeline-wrapper {
            overflow: auto;
          }
          .stage {
            height: min(740px, 85vh);
          }
          .hint {
            display: none;
          }

          .header-bar {
            flex-direction: column;
            align-items: flex-start;
          }

          .header-right {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
}
