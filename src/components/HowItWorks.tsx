import React from "react";

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            How NOVA Transforms Your Workflow in Minutes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Getting started with NOVA requires zero heavy engineering setup.
          </p>
        </div>

        {/* 4 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          {/* Step 1 */}
          <div className="p-6 rounded-2xl border border-border bg-card relative space-y-4 group hover:border-indigo-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white font-extrabold text-lg flex items-center justify-center shadow-lg shadow-indigo-600/30">
              1
            </div>
            <h3 className="text-lg font-bold text-foreground">Connect Your Tools</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Integrate Slack, Jira, GitHub, Notion, or Linear with one-click OAuth authorization in seconds.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-2xl border border-border bg-card relative space-y-4 group hover:border-indigo-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white font-extrabold text-lg flex items-center justify-center shadow-lg shadow-purple-600/30">
              2
            </div>
            <h3 className="text-lg font-bold text-foreground">Define AI Rules</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Use natural language or pick from 50+ pre-configured recipe templates tailored to your role.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-2xl border border-border bg-card relative space-y-4 group hover:border-indigo-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-pink-600 text-white font-extrabold text-lg flex items-center justify-center shadow-lg shadow-pink-600/30">
              3
            </div>
            <h3 className="text-lg font-bold text-foreground">Deploy Autonomous Agents</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Let NOVA handle issue triaging, documentation synthesis, PR reviews, and daily updates autonomously.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 rounded-2xl border border-border bg-card relative space-y-4 group hover:border-indigo-500/50 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-extrabold text-lg flex items-center justify-center shadow-lg shadow-emerald-600/30">
              4
            </div>
            <h3 className="text-lg font-bold text-foreground">Analyze & Scale ROI</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Monitor team time saved, velocity improvement, and expand automations across departments.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
