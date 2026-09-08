import React from "react";
import { COMPANY_LOGOS } from "../data/landingData";

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 border-y border-border/50 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by forward-thinking teams at 10,000+ companies worldwide
        </p>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {COMPANY_LOGOS.map((company, index) => {
            const IconComp = company.Icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center font-bold text-lg tracking-wider text-foreground/80 hover:text-indigo-500 transition-colors"
              >
                <IconComp className={`w-5 h-5 mr-1.5 ${company.color}`} />
                {company.name}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
