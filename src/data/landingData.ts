import {
  Bot,
  Sparkles,
  Users,
  BarChart3,
  Workflow,
  Brain,
  TrendingUp,
  Lock,
  Building2,
  Globe,
  Cpu,
  Zap,
  Layers3,
} from "lucide-react";
import { Feature, Testimonial, FAQItem } from "../types/landing";

export const COMPANY_LOGOS = [
  { name: "ACME CORP", Icon: Building2, color: "text-indigo-500" },
  { name: "TECHSCALE", Icon: Globe, color: "text-purple-500" },
  { name: "APEX GLOBAL", Icon: Cpu, color: "text-pink-500" },
  { name: "PULSE AI", Icon: Zap, color: "text-amber-500" },
  { name: "CLOUDVERTEX", Icon: Layers3, color: "text-emerald-500" },
  { name: "NEXUS SEC", Icon: Lock, color: "text-blue-500" },
];

export const FEATURES: Feature[] = [
  {
    id: "f1",
    category: "automation",
    title: "Autonomous Workflow Agents",
    description: "Deploy self-healing AI agents that trigger tasks, resolve blockages, and sync cross-platform actions automatically.",
    icon: Bot,
    badge: "Popular",
  },
  {
    id: "f2",
    category: "automation",
    title: "Natural Language Triggers",
    description: "Describe what you want to automate in plain English (e.g., 'Summarize bug reports & post to Slack') and let AI construct the pipeline.",
    icon: Sparkles,
  },
  {
    id: "f3",
    category: "collaboration",
    title: "Real-Time AI Workspace Canvas",
    description: "Co-create project specs, docs, and code snippets with live AI assistance and multi-user cursor editing.",
    icon: Users,
  },
  {
    id: "f4",
    category: "analytics",
    title: "Predictive Sprint Velocity",
    description: "AI analyzes past team velocity, task complexity, and capacity to deliver accurate release estimations.",
    icon: BarChart3,
    badge: "AI Powered",
  },
  {
    id: "f5",
    category: "automation",
    title: "100+ One-Click Integrations",
    description: "Seamlessly connect Jira, GitHub, Slack, Notion, Figma, Asana, and Linear with zero engineering overhead.",
    icon: Workflow,
  },
  {
    id: "f6",
    category: "collaboration",
    title: "Smart Document Summarizer",
    description: "Condense long technical documents, customer calls, and PR feedback into actionable bullet points in seconds.",
    icon: Brain,
  },
  {
    id: "f7",
    category: "analytics",
    title: "Automated ROI & Capacity Hub",
    description: "Track time saved per engineer and team efficiency gains with customizable executive dashboards.",
    icon: TrendingUp,
  },
  {
    id: "f8",
    category: "collaboration",
    title: "Enterprise SOC2 Security",
    description: "End-to-end encryption, strict role-based access control, and zero data training on customer data.",
    icon: Lock,
    badge: "SOC2 Type II",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marcus Vance",
    role: "VP of Engineering",
    company: "CloudScale Inc.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content: "NOVA completely transformed our engineering workflow. What used to take our lead developers 4 hours of sprint planning now happens autonomously in under 15 minutes. It feels like having a senior staff engineer on call 24/7.",
    rating: 5,
    metric: "Saved 18 hrs/week per engineer",
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Head of Product",
    company: "Apex Global",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    content: "The natural language workflow generator is pure magic. Our product managers can create complex integrations between Linear, Slack, and Customer feedback channels without writing a single line of script.",
    rating: 5,
    metric: "3x Faster Product Launches",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Chief Technology Officer",
    company: "Nexus Software",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "Security was our top priority when picking an AI partner. NOVA's enterprise SOC2 compliance and zero data retention guarantee gave our legal team full confidence to roll it out to 500+ employees.",
    rating: 5,
    metric: "100% Enterprise Security Pass",
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "Director of Operations",
    company: "Pulse Media",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    content: "The predictive velocity analytics caught three major release bottlenecks before they happened. NOVA has paid for itself ten times over in our first quarter alone.",
    rating: 5,
    metric: "$450k ROI in Q1",
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 0,
    question: "How does NOVA integrate with our existing toolstack?",
    answer: "NOVA connects natively via standard API integrations and OAuth with 100+ popular platforms including Jira, GitHub, Slack, Notion, Linear, Figma, and Google Workspace. Setup takes less than 2 minutes per integration without writing custom code.",
    category: "Integrations",
  },
  {
    id: 1,
    question: "Is our proprietary company data safe and secure?",
    answer: "Yes, absolutely. NOVA is SOC2 Type II certified and complies with GDPR and HIPAA standards. We enforce strict end-to-end encryption both in transit and at rest. Most importantly, customer data is NEVER used to train shared AI models.",
    category: "Security",
  },
  {
    id: 2,
    question: "What happens when our 14-day free trial ends?",
    answer: "During your 14-day trial, you receive full access to Pro features with unlimited AI credits. After the trial, you can choose to upgrade to a Pro or Enterprise plan, or automatically transition to our Starter Free Plan with zero interruption.",
    category: "Pricing",
  },
  {
    id: 3,
    question: "Can NOVA handle custom enterprise AI workflows?",
    answer: "Yes! On our Enterprise plan, we support custom LLM fine-tuning, self-hosted deployment options, custom security policies, dedicated account managers, and custom SLA response times.",
    category: "Enterprise",
  },
  {
    id: 4,
    question: "How many team members can I invite to a workspace?",
    answer: "Starter plans include up to 5 seats. Pro plans support unlimited team members billed per seat. Enterprise plans feature bulk licensing discounts and centralized billing controls.",
    category: "Team Management",
  },
  {
    id: 5,
    question: "How do natural language workflow triggers work?",
    answer: "You simply type a prompt describing the outcome you want—for example, 'Whenever a critical bug is filed on GitHub, create a Slack alert, summarize the error log, and assign to the on-call engineer'. NOVA interprets the intent and constructs the execution graph.",
    category: "AI Technology",
  },
];
