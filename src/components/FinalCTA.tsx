import React, { useState } from "react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export const FinalCTA: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "error">("idle");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail || !emailRegex.test(newsletterEmail)) {
      setNewsletterStatus("error");
      setNewsletterMsg("Please enter a valid work email address.");
      return;
    }
    setNewsletterStatus("success");
    setNewsletterMsg("Success! You've been subscribed to the NOVA Product Digest.");
    setNewsletterEmail("");
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 p-8 sm:p-14 text-white shadow-2xl overflow-hidden space-y-8 text-center">
          
          {/* Background Glow Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-indigo-200 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              Ready to Supercharge Your Squad?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Start Automating Your Workflows Today.
            </h2>
            <p className="text-indigo-200 text-base sm:text-lg">
              Join over 10,000 teams using NOVA to build better products and work 10x smarter.
            </p>
          </div>

          {/* Email Newsletter Input Validation Form */}
          <div className="relative z-10 max-w-md mx-auto space-y-3">
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your work email..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-3 text-sm rounded-xl bg-white/10 text-white placeholder-indigo-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                type="submit"
                className="bg-white text-indigo-900 hover:bg-indigo-50 font-bold px-6 h-11 shrink-0 shadow-lg cursor-pointer"
              >
                Start Free Trial
              </Button>
            </form>

            {/* Status Alert Banner */}
            {newsletterStatus === "error" && (
              <p className="text-xs text-rose-300 font-semibold bg-rose-950/60 p-2 rounded-lg border border-rose-500/40">
                ⚠️ {newsletterMsg}
              </p>
            )}
            {newsletterStatus === "success" && (
              <p className="text-xs text-emerald-300 font-semibold bg-emerald-950/60 p-2 rounded-lg border border-emerald-500/40 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {newsletterMsg}
              </p>
            )}

            <p className="text-[11px] text-indigo-200">
              14 days free • No credit card required • Instant setup
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
