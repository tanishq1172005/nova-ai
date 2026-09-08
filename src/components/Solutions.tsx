import React, { useState } from "react";
import { Layers, Terminal, Flame, Building2, CheckCircle2 } from "lucide-react";
import { SolutionRole } from "../types/landing";

export const Solutions: React.FC = () => {
  const [solutionRole, setSolutionRole] = useState<SolutionRole>("pm");

  return (
    <section id="solutions" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Tailored Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Designed for Every Key Role in Your Organization
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Select your domain to see how NOVA optimizes your daily operations.
          </p>

          {/* Role Switcher Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setSolutionRole("pm")}
              className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                solutionRole === "pm"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Layers className="w-4 h-4" />
              Product Managers
            </button>
            <button
              onClick={() => setSolutionRole("eng")}
              className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                solutionRole === "eng"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Terminal className="w-4 h-4" />
              Engineering Leads
            </button>
            <button
              onClick={() => setSolutionRole("marketing")}
              className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                solutionRole === "marketing"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Flame className="w-4 h-4" />
              Marketing & Content
            </button>
            <button
              onClick={() => setSolutionRole("exec")}
              className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all flex items-center gap-2 cursor-pointer ${
                solutionRole === "exec"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Building2 className="w-4 h-4" />
              Executives & Operations
            </button>
          </div>
        </div>

        {/* Solutions Content Box */}
        <div className="p-8 rounded-2xl border border-border bg-card shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {solutionRole === "pm" && (
            <>
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-foreground">
                  Auto-Generate PRDs & Triage Backlogs Effortlessly
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Product Managers eliminate hours of administrative drag. NOVA turns scattered Slack threads and customer feedback into structured Jira tickets and feature specs automatically.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Automated Feature Specs</span>
                      <p className="text-xs text-muted-foreground">Draft detailed PRDs with user stories & acceptance criteria in seconds.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Customer Voice Aggregator</span>
                      <p className="text-xs text-muted-foreground">Cluster feedback from Intercom, Gong, and Slack into prioritized themes.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-950/40 via-background to-slate-950 border border-indigo-500/30 space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-indigo-300 border-b border-border pb-2">
                  <span>Product Manager Copilot</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <p className="text-xs text-slate-300">
                  "NOVA generated sprint acceptance criteria for our authentication overhaul and auto-assigned subtasks to 3 dev squads."
                </p>
                <div className="p-3 rounded bg-card/80 border border-border text-xs space-y-1">
                  <div className="font-semibold text-foreground">Result:</div>
                  <p className="text-muted-foreground">Saved 14 hours per sprint cycle in planning overhead.</p>
                </div>
              </div>
            </>
          )}

          {solutionRole === "eng" && (
            <>
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-foreground">
                  Automate Code Reviews, Release Notes & CI/CD Summaries
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Engineering leads keep developers in the flow state. NOVA synthesizes pull request diffs, generates release changelogs, and tracks tech debt trends.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Smart PR Summaries</span>
                      <p className="text-xs text-muted-foreground">Instant architectural impact summaries for complex multi-file pull requests.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Flaky Test Diagnostics</span>
                      <p className="text-xs text-muted-foreground">Identify failing integration tests & propose root cause fixes automatically.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-950/40 via-background to-slate-950 border border-purple-500/30 space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-purple-300 border-b border-border pb-2">
                  <span>Engineering Copilot</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <p className="text-xs text-slate-300">
                  "PR reviews that used to take 2 days now get approved in 20 minutes with automated security & linting digests."
                </p>
                <div className="p-3 rounded bg-card/80 border border-border text-xs space-y-1">
                  <div className="font-semibold text-foreground">Result:</div>
                  <p className="text-muted-foreground">PR cycle time reduced from 48h to 2.5h.</p>
                </div>
              </div>
            </>
          )}

          {solutionRole === "marketing" && (
            <>
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-foreground">
                  Scale Campaign Content & Product Release Communication
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Marketing & Growth teams turn new feature launches into polished blog posts, social announcements, and newsletter copy instantly.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Release Copy Generator</span>
                      <p className="text-xs text-muted-foreground">Transform technical Git release notes into customer-facing feature blogs.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-pink-950/40 via-background to-slate-950 border border-pink-500/30 space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-pink-300 border-b border-border pb-2">
                  <span>Marketing Copilot</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <p className="text-xs text-slate-300">
                  "We publish release newsletters within 10 minutes of code deployments without waiting for copywriters."
                </p>
              </div>
            </>
          )}

          {solutionRole === "exec" && (
            <>
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-foreground">
                  Complete Cross-Department Visibility & Operational Control
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  C-level executives get real-time ROI tracking, headcount efficiency analytics, and enterprise-grade compliance governance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-foreground">Executive Weekly Briefings</span>
                      <p className="text-xs text-muted-foreground">Automated AI briefing on project velocity, risks, and budget status.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-950/40 via-background to-slate-950 border border-emerald-500/30 space-y-4">
                <div className="flex items-center justify-between text-xs font-semibold text-emerald-300 border-b border-border pb-2">
                  <span>Executive Copilot</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <p className="text-xs text-slate-300">
                  "NOVA gave us total clarity on team throughput and enabled us to scale output 3x without increasing headcount."
                </p>
              </div>
            </>
          )}
        </div>

      </div>
    </section>
  );
};
