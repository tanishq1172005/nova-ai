import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../data/landingData";
import { Testimonial } from "../types/landing";

export const Testimonials: React.FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialAutoplay, setTestimonialAutoplay] = useState(true);

  // Testimonials Autoplay logic
  useEffect(() => {
    if (!testimonialAutoplay) return;
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialAutoplay]);

  const current: Testimonial = TESTIMONIALS[testimonialIndex] || TESTIMONIALS[0];

  return (
    <section id="testimonials" className="py-20 bg-muted/20 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Customer Success Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Loved by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            See how teams of all sizes build better and work smarter with NOVA.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="p-8 sm:p-12 rounded-3xl border border-border bg-card shadow-2xl relative space-y-6">
            
            {/* Star Rating */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                {current.metric}
              </span>
            </div>

            {/* Quote Content */}
            <blockquote className="text-lg sm:text-2xl font-medium text-foreground leading-relaxed italic">
              "{current.content}"
            </blockquote>

            {/* User Bio Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border/60">
              <div className="flex items-center space-x-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
                />
                <div>
                  <h4 className="font-bold text-foreground text-base">
                    {current.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {current.role} • <span className="text-indigo-400 font-semibold">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* Autoplay Pause Toggle */}
              <button
                onClick={() => setTestimonialAutoplay(!testimonialAutoplay)}
                className="text-xs text-muted-foreground hover:text-foreground hidden sm:block cursor-pointer"
              >
                {testimonialAutoplay ? "Pause Slideshow" : "Resume Slideshow"}
              </button>
            </div>

          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTestimonialIndex(idx);
                    setTestimonialAutoplay(false);
                  }}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    testimonialIndex === idx
                      ? "w-8 bg-indigo-600"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setTestimonialIndex(
                    (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
                  );
                  setTestimonialAutoplay(false);
                }}
                className="p-2.5 rounded-full border border-border bg-card text-foreground hover:bg-accent transition-colors cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
                  setTestimonialAutoplay(false);
                }}
                className="p-2.5 rounded-full border border-border bg-card text-foreground hover:bg-accent transition-colors cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
