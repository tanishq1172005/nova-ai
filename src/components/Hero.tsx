import React from "react";
import { Sparkles, ArrowRight, Play, CheckCircle2, Zap, Bot } from "lucide-react";
import { Button } from "./ui/button";

interface HeroProps {
  openDemoModal: (tab?: "watch" | "book") => void;
}

export const Hero: React.FC<HeroProps> = ({ openDemoModal }) => {
  return (
    <section id="top" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Release Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 backdrop-blur-md animate-float">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>NOVA 2.0 AI Platform is Live</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
          <a href="#features" className="hover:underline flex items-center gap-0.5">
            Explore What's New <ArrowRight className="w-3 h-3 ml-0.5" />
          </a>
        </div>

        {/* Main Headline & Tagline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-5xl mx-auto leading-[1.1]">
          Build Better. <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Work Smarter with AI.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto font-normal leading-relaxed">
          NOVA is the AI-powered productivity platform that helps engineering & product teams manage projects, automate repetitive tasks, and collaborate effortlessly.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            size="lg"
            onClick={() => openDemoModal("book")}
            className="w-full sm:w-auto h-12 px-8 text-base bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-xl shadow-indigo-600/30 hover:scale-105 transition-all group"
          >
            Start 14-Day Free Trial
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => openDemoModal("watch")}
            className="w-full sm:w-auto h-12 px-7 text-base border-border bg-card/60 backdrop-blur-md hover:bg-accent text-foreground font-medium flex items-center gap-2"
          >
            <Play className="w-4 h-4 fill-current text-indigo-500" />
            Watch Interactive Demo
          </Button>
        </div>

        {/* Trust Highlights under Hero CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground pt-4">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            No credit card required
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            Instant 2-min setup
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            SOC2 Type II certified
          </div>
        </div>

        {/* Interactive Hero Dashboard Mockup Card */}
        <div className="pt-8 max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-border/80 bg-card/70 backdrop-blur-xl shadow-2xl p-3 sm:p-5 overflow-hidden group">
            
            {/* Card Window Top Bar */}
            <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4 px-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs text-muted-foreground font-mono ml-2">app.nova.ai/dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  AI Engine Live
                </span>
              </div>
            </div>

            {/* Simulated UI Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {/* Left Task Feed */}
              <div className="p-4 rounded-xl bg-muted/40 border border-border/50 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-foreground flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-indigo-500" />
                    Active AI Triggers
                  </span>
                  <span className="text-muted-foreground">3 Running</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-background border border-border text-xs space-y-1 hover:border-indigo-500/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">PR Review Assistant</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-indigo-500/10 text-indigo-400 rounded">Auto</span>
                    </div>
                    <p className="text-muted-foreground">Summarized 12 files on PR #142 in repo main</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-background border border-border text-xs space-y-1 hover:border-indigo-500/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground">Slack Triage Bot</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-500/10 text-emerald-400 rounded">Active</span>
                    </div>
                    <p className="text-muted-foreground">Converted 5 customer issues to Linear tickets</p>
                  </div>
                </div>
              </div>

              {/* Center Live AI Prompt Sandbox */}
              <div className="md:col-span-2 p-4 rounded-xl bg-gradient-to-br from-indigo-950/20 via-background to-purple-950/20 border border-indigo-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-indigo-400" />
                    NOVA Natural Language Copilot
                  </span>
                  <span className="text-xs text-indigo-400 font-mono">GPT-4o + Custom FineTune</span>
                </div>

                <div className="p-3 rounded-lg bg-card border border-border text-xs space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-indigo-500 font-semibold">&gt;</span>
                    <span className="text-foreground">Prompt:</span> "Generate a sprint summary for Q3 roadmap and notify product leads."
                  </div>
                  <div className="p-3 rounded-md bg-muted/60 text-foreground font-mono text-[11px] leading-relaxed border border-border/40">
                    ✓ Analyzed 48 completed user stories <br />
                    ✓ Sprint velocity: +24% vs baseline <br />
                    ✓ 3 potential risks flagged in API migration <br />
                    ✓ Digest posted to #product-updates & email sent.
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center space-x-2 text-[11px] text-muted-foreground">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Execution time: 0.8s</span>
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => openDemoModal("watch")} 
                    className="h-7 text-xs bg-indigo-600 hover:bg-indigo-500 text-white"
                  >
                    Try Interactive Sandbox
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
