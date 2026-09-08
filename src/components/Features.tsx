import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FEATURES } from "../data/landingData";
import { Feature } from "../types/landing";

export const Features: React.FC = () => {
  const [featureCategory, setFeatureCategory] = useState<"all" | "automation" | "collaboration" | "analytics">("all");

  const filteredFeatures =
    featureCategory === "all"
      ? FEATURES
      : FEATURES.filter((f) => f.category === featureCategory);

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Powerful Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Supercharge Every Aspect of Your Workflow
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Eliminate repetitive manual tasks and empower your team to focus on high-impact strategic shipping.
          </p>

          {/* Filter Category Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setFeatureCategory("all")}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                featureCategory === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              All Features ({FEATURES.length})
            </button>
            <button
              onClick={() => setFeatureCategory("automation")}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                featureCategory === "automation"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              AI Automations
            </button>
            <button
              onClick={() => setFeatureCategory("collaboration")}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                featureCategory === "collaboration"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              Team Collaboration
            </button>
            <button
              onClick={() => setFeatureCategory("analytics")}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                featureCategory === "analytics"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              Predictive Analytics
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFeatures.map((feature: Feature) => {
            const IconComp = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative p-6 rounded-2xl border border-border/80 bg-card hover:bg-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <IconComp className="w-6 h-6" />
                    </div>
                    {feature.badge && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-500 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/40 mt-4 flex items-center justify-between text-xs font-medium text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
