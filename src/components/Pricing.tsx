import React, { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

interface PricingProps {
  openDemoModal: (tab?: "watch" | "book") => void;
}

export const Pricing: React.FC<PricingProps> = ({ openDemoModal }) => {
  const [pricingBilling, setPricingBilling] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Simple Plans that Scale With Your Team
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Start free for 14 days. No credit card required. Cancel anytime.
          </p>

          {/* Monthly / Annual Billing Toggle Switch */}
          <div className="pt-4 flex items-center justify-center space-x-4">
            <span className={`text-sm font-semibold ${pricingBilling === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>
              Billed Monthly
            </span>
            <button
              onClick={() => setPricingBilling(pricingBilling === "monthly" ? "annual" : "monthly")}
              className="relative w-14 h-8 rounded-full bg-indigo-600/30 p-1 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Pricing Period"
            >
              <div
                className={`w-6 h-6 rounded-full bg-indigo-600 shadow-md transition-transform transform ${
                  pricingBilling === "annual" ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <div className="flex items-center space-x-1.5">
              <span className={`text-sm font-semibold ${pricingBilling === "annual" ? "text-foreground" : "text-muted-foreground"}`}>
                Billed Annually
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Starter Plan */}
          <div className="p-8 rounded-3xl border border-border bg-card space-y-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Starter</h3>
              <p className="text-xs text-muted-foreground">Perfect for individual developers & small side projects.</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl font-extrabold text-foreground">$0</span>
                <span className="text-xs text-muted-foreground">/ forever free</span>
              </div>
              <ul className="space-y-3 pt-4 border-t border-border text-xs text-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> Up to 5 team seats
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> 1,000 AI credits / month
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> 5 Active workflow triggers
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> Standard Slack & GitHub integration
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              onClick={() => openDemoModal("book")}
              className="w-full justify-center h-11"
            >
              Get Started Free
            </Button>
          </div>

          {/* Pro Plan (Highlighted Most Popular) */}
          <div className="p-8 rounded-3xl border-2 border-indigo-500 bg-card space-y-6 flex flex-col justify-between relative shadow-2xl shadow-indigo-500/15 transform md:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md">
              Most Popular Choice
            </div>
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-bold text-foreground">Pro Team</h3>
              <p className="text-xs text-muted-foreground">Designed for fast-growing engineering & product squads.</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl font-extrabold text-foreground">
                  ${pricingBilling === "annual" ? "23" : "29"}
                </span>
                <span className="text-xs text-muted-foreground">/ seat / month</span>
              </div>
              <ul className="space-y-3 pt-4 border-t border-border text-xs text-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> Unlimited team seats
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> 50,000 AI credits / month
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> Unlimited workflow triggers
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> 100+ Integrations & Webhooks
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> Predictive Sprint Velocity analytics
                </li>
              </ul>
            </div>
            <Button
              onClick={() => openDemoModal("book")}
              className="w-full justify-center h-11 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30"
            >
              Start 14-Day Free Trial
            </Button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-8 rounded-3xl border border-border bg-card space-y-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Enterprise</h3>
              <p className="text-xs text-muted-foreground">For large organizations requiring custom security & SLAs.</p>
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl font-extrabold text-foreground">Custom</span>
              </div>
              <ul className="space-y-3 pt-4 border-t border-border text-xs text-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> Dedicated LLM Fine-tuning
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> Self-hosted / On-premise options
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> Custom SOC2 & HIPAA compliance
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-500" /> 24/7 Priority Support & Dedicated CSM
                </li>
              </ul>
            </div>
            <Button
              variant="outline"
              onClick={() => openDemoModal("book")}
              className="w-full justify-center h-11"
            >
              Contact Enterprise Sales
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};
