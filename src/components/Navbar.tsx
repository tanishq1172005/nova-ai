import React, { useState } from "react";
import { Sparkles, Play, Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
  openDemoModal: (tab?: "watch" | "book") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  openDemoModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo Brand */}
        <a href="#top" className="flex items-center space-x-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-foreground flex items-center gap-1.5">
              NOVA
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                AI 2.0
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#about" className="hover:text-foreground transition-colors">About Engine</a>
          <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
          <a href="#solutions" className="hover:text-foreground transition-colors">Solutions</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>

        {/* Right Action Items */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-accent transition-all cursor-pointer"
            aria-label="Toggle Theme"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => openDemoModal("watch")}
            className="hidden lg:inline-flex items-center gap-1.5 border-border hover:bg-muted text-foreground font-medium"
          >
            <Play className="w-3.5 h-3.5 fill-current text-indigo-500" />
            Watch Demo
          </Button>

          <Button
            size="sm"
            onClick={() => openDemoModal("book")}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md shadow-indigo-500/20 px-4"
          >
            Get Started Free
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border bg-card text-muted-foreground cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border bg-card text-foreground cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-border bg-background/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-indigo-500"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-indigo-500"
          >
            About Engine
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-indigo-500"
          >
            How It Works
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-indigo-500"
          >
            Solutions
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-indigo-500"
          >
            Testimonials
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-indigo-500"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-foreground hover:text-indigo-500"
          >
            FAQ
          </a>
          <div className="pt-2 grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setMobileMenuOpen(false);
                openDemoModal("watch");
              }}
              className="w-full justify-center"
            >
              Watch Demo
            </Button>
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                openDemoModal("book");
              }}
              className="w-full justify-center bg-indigo-600 hover:bg-indigo-500 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
