import React from "react";
import { Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-card pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-foreground">NOVA</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-sm leading-relaxed">
              NOVA is an AI-powered productivity platform that helps teams manage projects, automate repetitive tasks, and collaborate efficiently.
            </p>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>System Operational: All AI Nodes Online</span>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Product</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">AI Automation</a></li>
              <li><a href="#about" className="hover:text-foreground">Core Engine</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground">Workflow Studio</a></li>
              <li><a href="#solutions" className="hover:text-foreground">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing Plans</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Resources</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#faq" className="hover:text-foreground">Documentation</a></li>
              <li><a href="#faq" className="hover:text-foreground">API Reference</a></li>
              <li><a href="#testimonials" className="hover:text-foreground">Case Studies</a></li>
              <li><a href="#faq" className="hover:text-foreground">Community Discord</a></li>
            </ul>
          </div>

          {/* Column 4: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><a href="#about" className="hover:text-foreground">About Us</a></li>
              <li><a href="#top" className="hover:text-foreground">Careers (We're hiring!)</a></li>
              <li><a href="#top" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#top" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#top" className="hover:text-foreground">SOC2 Report</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} NOVA Inc. All rights reserved. Build Better. Work Smarter.</p>
          <div className="flex items-center space-x-4">
            <a href="#top" className="hover:text-foreground">Twitter / X</a>
            <a href="#top" className="hover:text-foreground">GitHub</a>
            <a href="#top" className="hover:text-foreground">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
