import React, { useState, useEffect, useRef } from "react";

export const Statistics: React.FC = () => {
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [statCounts, setStatCounts] = useState({ speed: 0, uptime: 0, saved: 0, recipes: 0 });
  const statsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          let duration = 1500;
          let steps = 40;
          let stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            setStatCounts({
              speed: Math.round(10 * progress),
              uptime: +(99.9 * progress).toFixed(1),
              saved: +(2.4 * progress).toFixed(1),
              recipes: Math.round(50 * progress),
            });
            if (currentStep >= steps) {
              clearInterval(timer);
              setStatCounts({ speed: 10, uptime: 99.9, saved: 2.4, recipes: 50 });
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }
    return () => observer.disconnect();
  }, [statsAnimated]);

  return (
    <section ref={statsSectionRef} className="py-16 bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-slate-900/40 border-y border-indigo-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
              {statCounts.speed}x
            </div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-indigo-400">
              Faster Sprint Velocity
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
              {statCounts.uptime}%
            </div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-purple-400">
              Uptime SLA Reliability
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
              ${statCounts.saved}M
            </div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-pink-400">
              Saved Annually Per Enterprise
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
              {statCounts.recipes}k+
            </div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-emerald-400">
              Automation Recipes Executed
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
