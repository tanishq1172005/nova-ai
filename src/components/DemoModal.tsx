import React, { useState, useEffect } from "react";
import { X, Play, Calendar, CheckCircle2, Sparkles, Clock, Users, Video } from "lucide-react";
import { Button } from "./ui/button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "watch" | "book";
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  defaultTab = "watch",
}) => {
  const [activeTab, setActiveTab] = useState<"watch" | "book">(defaultTab);
  const [isPlaying, setIsPlaying] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "10-50",
    date: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [videoTimestamp, setVideoTimestamp] = useState("0:00");

  useEffect(() => {
    setActiveTab(defaultTab);
    setIsSubmitted(false);
  }, [defaultTab, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl overflow-hidden bg-background border border-border/80 rounded-2xl shadow-2xl dark:shadow-indigo-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">NOVA Experience Studio</h3>
              <p className="text-xs text-muted-foreground">Discover how AI transforms your team's workflow</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-border bg-muted/20 px-6">
          <button
            onClick={() => setActiveTab("watch")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all cursor-pointer ${
              activeTab === "watch"
                ? "border-indigo-500 text-indigo-500"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Video className="w-4 h-4" />
            Watch Product Demo (2 min)
          </button>
          <button
            onClick={() => setActiveTab("book")}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all cursor-pointer ${
              activeTab === "book"
                ? "border-indigo-500 text-indigo-500"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Calendar className="w-4 h-4" />
            Book 1-on-1 Live Walkthrough
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {activeTab === "watch" ? (
            <div className="space-y-4">
              {/* Simulated Interactive Video Screen */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group shadow-inner flex flex-col justify-between p-4">
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                    NOVA 2.0 Feature Preview
                  </span>
                  <span className="text-xs text-slate-400 font-mono bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    {videoTimestamp} / 2:30
                  </span>
                </div>

                {/* Video Mockup Animation Graphic */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-950/80 via-slate-950 to-purple-950/80">
                  {isPlaying ? (
                    <div className="w-full h-full p-6 flex flex-col justify-between animate-pulse">
                      <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-700/60 shadow-xl max-w-md mx-auto text-xs font-mono space-y-2">
                        <div className="flex items-center justify-between text-indigo-400 border-b border-slate-800 pb-2">
                          <span>🤖 NOVA AI Agent Execution</span>
                          <span className="text-green-400">ACTIVE</span>
                        </div>
                        <p className="text-slate-300">Prompt: "Synthesize customer feedback from Slack & auto-assign Jira tasks"</p>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-indigo-500 h-full w-3/4 animate-pulse"></div>
                        </div>
                        <div className="text-slate-400 text-[11px]">✓ 42 items summarized • 6 tasks assigned</div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/40 hover:scale-105 transition-all cursor-pointer"
                      >
                        <Play className="w-8 h-8 fill-current ml-1" />
                      </button>
                      <p className="text-sm font-medium text-slate-200">Click to Play Interactive Product Tour</p>
                    </div>
                  )}
                </div>

                {/* Controls Bar */}
                <div className="relative z-10 flex items-center justify-between bg-slate-900/80 backdrop-blur-sm p-2 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="px-2.5 py-1 rounded text-xs bg-indigo-600 text-white font-medium hover:bg-indigo-500 cursor-pointer"
                    >
                      {isPlaying ? "Pause" : "Play Tour"}
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <button 
                      onClick={() => { setIsPlaying(true); setVideoTimestamp("0:15"); }}
                      className="hover:text-indigo-400 underline-offset-2 hover:underline cursor-pointer"
                    >
                      0:15 AI Task Triaging
                    </button>
                    <span>•</span>
                    <button 
                      onClick={() => { setIsPlaying(true); setVideoTimestamp("1:10"); }}
                      className="hover:text-indigo-400 underline-offset-2 hover:underline cursor-pointer"
                    >
                      1:10 Automations
                    </button>
                  </div>
                </div>
              </div>

              {/* Highlights below video */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-lg border border-border bg-card text-xs space-y-1">
                  <p className="font-semibold text-foreground flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    Zero-Code AI Triggers
                  </p>
                  <p className="text-muted-foreground">Build complex multi-step automations in plain English.</p>
                </div>
                <div className="p-3 rounded-lg border border-border bg-card text-xs space-y-1">
                  <p className="font-semibold text-foreground flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-500" />
                    10x Faster Sprints
                  </p>
                  <p className="text-muted-foreground">Automate ticket creation, summaries, & daily updates.</p>
                </div>
                <div className="p-3 rounded-lg border border-border bg-card text-xs space-y-1">
                  <p className="font-semibold text-foreground flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-purple-500" />
                    Unified Workspaces
                  </p>
                  <p className="text-muted-foreground">Connect Jira, Slack, GitHub, Notion, and Figma.</p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground">Demo Scheduled Successfully!</h4>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you, <span className="font-semibold text-foreground">{formData.name}</span>. A calendar invitation and video link have been dispatched to <span className="font-semibold text-foreground">{formData.email}</span>.
                  </p>
                  <div className="pt-4">
                    <Button onClick={onClose} variant="default" className="bg-indigo-600 hover:bg-indigo-500 text-white px-8">
                      Done
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Work Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Company Name</label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-foreground">Team Size</label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="1-10">1-10 employees</option>
                        <option value="10-50">10-50 employees</option>
                        <option value="50-250">50-250 employees</option>
                        <option value="250+">250+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-foreground">Preferred Demo Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <Button type="button" variant="outline" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6">
                      Confirm Live Demo Request
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
