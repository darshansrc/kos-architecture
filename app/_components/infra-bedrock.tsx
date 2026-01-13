"use client";

import { useState } from "react";

import { Server, ChevronUp, ChevronDown } from "lucide-react";

interface StackItem {
  label: string;
  icon?: string;
}

interface StackSectionProps {
  title: string;
  items: StackItem[];
}

export function InfraBedrock() {
  const [isStackOpen, setIsStackOpen] = useState(false);

  return (
    <div>
      {/* --- BOTTOM: TECH STACK DRAWER --- */}
      <div
        className={`z-30 bg-[#1D2D48] border-t-2 border-[#EBE6DA] transition-all duration-300 ease-in-out fixed bottom-0 w-full ${isStackOpen ? "h-[500px]" : "h-12 hover:h-14"}`}
      >
        {/* Toggle Handle */}
        <div
          className="h-12 flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors"
          onClick={() => setIsStackOpen(!isStackOpen)}
        >
          <div className="flex items-center space-x-2  text-xs font-bold text-[#EBE6DA] uppercase ">
            <Server className="size-4 max-h-6" />
            <span className="text-xs text-wrap whitespace-nowrap">
              Infrastructure Bedrock
            </span>
            {isStackOpen ? (
              <ChevronDown className="size-4 max-h-6" />
            ) : (
              <ChevronUp className="size-4 max-h-6" />
            )}
          </div>
        </div>

        {/* Expanded Content */}
        {isStackOpen && (
          <div className="grid grid-cols-5 gap-4 p-6 animate-in fade-in duration-300">
            <StackSection
              title="Tech Stack & App Framework"
              items={[
                { label: "Next.js", icon: "/logos/nextjs.svg" },
                { label: "Node.js", icon: "/logos/nodejs.svg" },
                { label: "TypeScript", icon: "/logos/typescript.png" },
                { label: "Vercel AI SDK", icon: "/logos/ai-sdk.png" },
                { label: "LangChain", icon: "/logos/langchain.svg" },
              ]}
            />
            <StackSection
              title="AI / Model Providers"
              items={[
                { label: "OpenAI", icon: "/logos/openai.svg" },
                { label: "Google Gemini", icon: "/logos/gemini.svg" },
                { label: "AWS Bedrock (Claude)", icon: "/logos/bedrock.png" },
              ]}
            />
            <StackSection
              title="Data & RAG Layer"
              items={[
                { label: "Neo4j", icon: "/logos/neo4j.png" },
                {
                  label:
                    "RAG datasets (products, retailers, SKUs, market data)",
                  icon: "/logos/rag.png",
                },
              ]}
            />
            <StackSection
              title="Infrastructure & Hosting"
              items={[
                { label: "Amazon Web Services", icon: "/logos/aws.png" },
                { label: "EC2", icon: "/logos/ec2.jpg" },
                { label: "S3", icon: "/logos/s3.png" },
                { label: "S3 Vectors", icon: "/logos/s3-vectors.png" },
                { label: "Coolify", icon: "/logos/coolify.png" },
              ]}
            />
            <StackSection
              title="Search & External Tools"
              items={[{ label: "Exa", icon: "/logos/exa.png" }]}
            />
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes dash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -90;
          }
        }
      `}</style>
    </div>
  );
}

const StackSection = ({ title, items }: StackSectionProps) => (
  <div>
    <h4 className="text-sm font-bold text-[#EBE6DA] mb-3">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="text-xs text-[#B3CAD6] flex items-center group"
        >
          <div className=" mr-2 flex items-center justify-center bg-white/5 rounded overflow-hidden shrink-0 border border-white/10 group-hover:border-white/30 transition-colors">
            {item.icon ? (
              <div className="bg-white p-0.5 rounded">
                <img
                  src={item.icon}
                  alt={item.label}
                  className="size-10 object-contain opacity-80 group-hover:opacity-100"
                />
              </div>
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-[#EBE6DA]/50"></div>
            )}
          </div>
          <span className="leading-tight text-sm">{item.label}</span>
        </li>
      ))}
    </ul>
  </div>
);
