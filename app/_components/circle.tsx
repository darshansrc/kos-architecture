"use client";

import React from "react";
import { ArrowUpRight, Target, Settings, Zap } from "lucide-react";

const StrategicCircle = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-8">
      {/* Main Container */}
      <div className="relative flex h-[500px] w-[500px] items-center justify-center">
        {/* --- QUADRANT 1: Top Left (Blue) --- */}
        {/* Where to Play */}
        <Quadrant
          position="top-left"
          color="blue"
          number="1"
          title="Where to Play"
          icon={<Target className="h-5 w-5" />}
          description="Market selection & geography"
        />

        {/* --- QUADRANT 3: Top Right (Yellow) --- */}
        {/* How to Manage */}
        <Quadrant
          position="top-right"
          color="amber"
          number="3"
          title="How to Manage"
          icon={<Settings className="h-5 w-5" />}
          description="Governance & systems"
        />

        {/* --- QUADRANT 4: Bottom Left (Green) --- */}
        {/* How to Execute */}
        <Quadrant
          position="bottom-left"
          color="emerald"
          number="4"
          title="How to Execute"
          icon={<Zap className="h-5 w-5" />}
          description="Action plans & operations"
        />

        {/* --- QUADRANT 2: Bottom Right (Red) --- */}
        {/* How to Win */}
        <Quadrant
          position="bottom-right"
          color="rose"
          number="2"
          title="How to Win"
          icon={<ArrowUpRight className="h-5 w-5" />}
          description="Value proposition & edge"
        />

        {/* --- CENTER CORE: Data Processing --- */}
        <div className="absolute z-20 flex h-40 w-40 flex-col items-center justify-center rounded-full bg-white shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 transition-transform duration-500 hover:scale-105">
          {/* Animated Infinity Loop SVG */}
          <div className="relative h-16 w-32">
            <svg viewBox="0 0 100 50" className="h-full w-full">
              {/* The Track (Gray) */}
              <path
                d="M25,25 C25,10 5,10 5,25 C5,40 25,40 25,25 C25,10 75,10 75,25 C75,40 95,40 95,25 C95,10 75,10 75,25"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* The Data Stream (Animated Gradient/Dash) */}
              <path
                d="M25,25 C25,10 5,10 5,25 C5,40 25,40 25,25 C25,10 75,10 75,25 C75,40 95,40 95,25 C95,10 75,10 75,25"
                fill="none"
                stroke="url(#dataGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="20 180"
                className="animate-flow"
              />
              <defs>
                <linearGradient
                  id="dataGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Processing
          </span>
        </div>
      </div>

      {/* Tailwind Animation Config for the SVG flow */}
      <style jsx global>{`
        @keyframes flow {
          0% {
            stroke-dashoffset: 200;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        .animate-flow {
          animation: flow 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

// --- Sub-Component for Slices ---

type QuadrantProps = {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color: "blue" | "amber" | "rose" | "emerald";
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Quadrant = ({
  position,
  color,
  number,
  title,
  description,
  icon,
}: QuadrantProps) => {
  // Styles based on position (border radius)
  const positionClasses = {
    "top-left":
      "top-0 left-0 rounded-tl-full border-r border-b pr-8 pb-8 items-end justify-end text-right",
    "top-right":
      "top-0 right-0 rounded-tr-full border-l border-b pl-8 pb-8 items-end justify-start text-left",
    "bottom-left":
      "bottom-0 left-0 rounded-bl-full border-r border-t pr-8 pt-8 items-start justify-end text-right",
    "bottom-right":
      "bottom-0 right-0 rounded-br-full border-l border-t pl-8 pt-8 items-start justify-start text-left",
  };

  // Styles based on color theme
  const colorClasses = {
    blue: "from-blue-50 to-white border-white text-blue-900 hover:from-blue-100",
    amber:
      "from-amber-50 to-white border-white text-amber-900 hover:from-amber-100",
    rose: "from-rose-50 to-white border-white text-rose-900 hover:from-rose-100",
    emerald:
      "from-emerald-50 to-white border-white text-emerald-900 hover:from-emerald-100",
  };

  const accentColors = {
    blue: "text-blue-500",
    amber: "text-amber-500",
    rose: "text-rose-500",
    emerald: "text-emerald-500",
  };

  return (
    <div
      className={`absolute h-1/2 w-1/2 cursor-pointer overflow-hidden bg-gradient-to-br p-6 transition-all duration-300 hover:z-10 hover:scale-[1.02] hover:shadow-xl ${positionClasses[position]} ${colorClasses[color]}`}
    >
      <div
        className={`flex flex-col gap-1 ${position.includes("left") ? "items-end" : "items-start"}`}
      >
        {/* Header with Number and Icon */}
        <div
          className={`flex items-center gap-2 ${position.includes("left") ? "flex-row-reverse" : "flex-row"}`}
        >
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold shadow-sm ${accentColors[color]}`}
          >
            {number}
          </span>
          <span className={`${accentColors[color]} opacity-80`}>{icon}</span>
        </div>

        {/* Text Content */}
        <h3 className="mt-2 text-xl font-bold leading-tight">{title}</h3>
        <p className="max-w-[140px] text-sm font-medium opacity-60">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StrategicCircle;
