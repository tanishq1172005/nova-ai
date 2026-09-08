import React, { useState } from "react";
import { Cpu, Workflow, BarChart3, CheckCircle2, Check } from "lucide-react";
import { ProductTab } from "../types/landing";

export const AboutProduct: React.FC = () => {
  const [productTab, setProductTab] = useState<ProductTab>("engine");

  return (
    <section id="about" className="py-20 bg-muted/20 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Inside NOVA Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Built for Modern Product & Engineering Teams
          </h2>
          <p className="text-muted-foreground text-base">
            Explore how NOVA combines large language models with custom rule execution graphs for enterprise precision.
          </p>

          {/* Product Tabs */}
          <div className="flex justify-center border-b border-border pt-4">
            <button
              onClick={() => setProductTab("engine")}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                productTab === "engine"
                  ? "border-indigo-500 text-indigo-500"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              AI Core Engine
            </button>
            <button
              onClick={() => setProductTab("workflow")}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                productTab === "workflow"
                  ? "border-indigo-500 text-indigo-500"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Workflow Studio
            </button>
            <button
              onClick={() => setProductTab("analytics")}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
                productTab === "analytics"
                  ? "border-indigo-500 text-indigo-500"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Executive Analytics Hub
            </button>
          </div>
        </div>

        {/* Tab Showcase Card */}
        <div className="p-6 md:p-10 rounded-2xl border border-border bg-card shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {productTab === "engine" && (
            <>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Cpu className="w-4 h-4" /> Autonomous Execution Engine
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Zero-latency Context Awareness
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  NOVA continuously indexes code repositories, pull requests, issue trackers, and customer feedback channels to maintain a live semantic graph of your entire software ecosystem.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    Semantic vector indexing across 100k+ docs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    Sub-second prompt parsing & tool invocation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                    Self-correcting error fallback loops
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-300 space-y-2 shadow-2xl">
                <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-2 text-[11px]">
                  <span>nova-engine-v2.ts</span>
                  <span className="text-emerald-400">Status: OK</span>
                </div>
                <p className="text-slate-400">// Parsing natural language prompt</p>
                <p className="text-indigo-400">const task = await nova.parse("Summarize PR #821 & trigger release notes");</p>
                <p className="text-slate-400">// Executing multi-agent tool pipeline</p>
                <p className="text-purple-400">const result = await task.executeWithFallback();</p>
                <p className="text-emerald-400">&gt; Output: 4 release notes generated and posted to Slack.</p>
              </div>
            </>
          )}

          {productTab === "workflow" && (
            <>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Workflow className="w-4 h-4" /> Visual Drag & Drop Builder
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  No-Code Automation Canvas
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build multi-step automated workflows with intuitive visual nodes. Connect webhooks, AI models, third-party apps, and custom logic rules without writing backend scripts.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                    50+ pre-built workflow templates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                    Conditional branching & parallel execution
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" />
                    Live webhooks and audit trail logging
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-3">
                <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                  <span className="font-semibold text-slate-200">Workflow: Customer Bug Triage</span>
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Active</span>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <span>1. Trigger: New Zendesk Ticket</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <span>2. AI Action: Categorize & Assign Severity</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                  <span>3. Sync: Create Jira Issue & Slack Alert</span>
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </>
          )}

          {productTab === "analytics" && (
            <>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <BarChart3 className="w-4 h-4" /> Predictive Intelligence Hub
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Actionable Team Insights & ROI Metrics
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gain full visibility into team bandwidth, release velocity, and hours saved through AI automation. Make data-backed resource decisions with confidence.
                </p>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Real-time velocity tracking & burndown forecasts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Automated weekly executive reporting digests
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Customizable ROI metrics dashboard
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs text-slate-400">
                  <span>Q3 Velocity Forecast</span>
                  <span className="text-emerald-400 font-bold">+28% Efficiency</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Sprint Completion Rate</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-emerald-500 h-full rounded-full w-[94%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>AI Automation Time Saved</span>
                      <span>420 Hours</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-indigo-500 h-full rounded-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
};
