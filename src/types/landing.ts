import React from "react";

export interface Feature {
  id: string;
  category: "automation" | "collaboration" | "analytics";
  title: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  metric: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export type SolutionRole = "pm" | "eng" | "marketing" | "exec";

export type ProductTab = "engine" | "workflow" | "analytics";
