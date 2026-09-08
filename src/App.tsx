import React, { useState, useEffect } from "react";
import "./index.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustedBy } from "./components/TrustedBy";
import { Features } from "./components/Features";
import { AboutProduct } from "./components/AboutProduct";
import { HowItWorks } from "./components/HowItWorks";
import { Statistics } from "./components/Statistics";
import { Solutions } from "./components/Solutions";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { DemoModal } from "./components/DemoModal";

export function App() {
  // Theme State (Dark / Light Mode)
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("nova-theme");
      if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("nova-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Demo Modal State
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoModalTab, setDemoModalTab] = useState<"watch" | "book">("watch");

  const openDemoModal = (tab: "watch" | "book" = "watch") => {
    setDemoModalTab(tab);
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 font-sans selection:bg-indigo-500/20 selection:text-indigo-400">
      {/* 1. Navigation Bar Component */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        openDemoModal={openDemoModal}
      />

      {/* 2. Hero Section Component */}
      <Hero openDemoModal={openDemoModal} />

      {/* 3. Trusted By / Company Logos Component */}
      <TrustedBy />

      {/* 4. Features Section Component (8 Features + Category Filter) */}
      <Features />

      {/* 5. Product / About Section Component (3 Core Product Showcase Tabs) */}
      <AboutProduct />

      {/* 6. How It Works Section Component (4 Step Process) */}
      <HowItWorks />

      {/* 7. Statistics Section Component (Animated Counter on Scroll) */}
      <Statistics />

      {/* 8. Solutions / Use Cases Section Component (Role Switcher) */}
      <Solutions />

      {/* 9. Testimonials Section Component (Carousel + Autoplay + Ratings) */}
      <Testimonials />

      {/* 10. Pricing Section Component (3 Plans + Monthly/Annual Discount Toggle) */}
      <Pricing openDemoModal={openDemoModal} />

      {/* 11. FAQ Section Component (Accordion Q&A) */}
      <FAQ />

      {/* 12. Final CTA Section Component (Email Validation & Digest Subscription) */}
      <FinalCTA />

      {/* 13. Footer Component */}
      <Footer />

      {/* Floating Back-To-Top Button */}
      <BackToTop />

      {/* Interactive Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultTab={demoModalTab}
      />
    </div>
  );
}

export default App;
