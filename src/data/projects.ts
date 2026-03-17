import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    slug: "meetpeople-recommendation-system",
    title: "MeetPeople",
    tagline: "Recommendation-system demo with an explainable \"For You\" ranking pipeline",
    summary:
      "Built a full-stack social feed demo that combines ranking controls, explainability, and AI-generated personas to make recommendation behavior inspectable.",
    description:
      "This project reimplements a personalized feed pipeline inspired by large-scale social ranking systems. It pairs a Next.js frontend with a Python FastAPI backend, stores interactions in SQLite, and exposes the stages of candidate sourcing, filtering, scoring, diversity, and final selection so the ranking logic is easy to understand and tune.",
    role: "Independent Builder",
    teamSize: 1,
    period: "2026",
    stack: ["Next.js", "TypeScript", "FastAPI", "OpenAI", "SQLite"],
    highlights: [
      "Built a tunable ranking pipeline with candidate hydration, filtering, scoring, diversity, and post-filtering stages.",
      "Added transparent feed explanations so users can inspect why content appears in their timeline.",
      "Integrated AI persona and content generation to simulate more realistic recommendation-system inputs."
    ],
    impact: [
      "Turns recommendation-system internals into a recruiter-friendly, demonstrable product.",
      "Shows end-to-end ownership across ML logic, backend APIs, frontend UX, and system design."
    ],
    links: {
      repo: "https://github.com/danjung9/MeetPeople",
      caseStudy: "/projects/meetpeople-recommendation-system"
    },
    image: "/projects/meetpeople-recommendation-system.svg",
    featured: true,
    status: "live"
  },
  {
    slug: "requirements-assistant",
    title: "Requirements Assistant",
    tagline: "RAG-powered requirements analysis for tickets and compliance workflows",
    summary:
      "Built an interactive assistant that ingests specification documents and turns them into Jira-style tickets or compliance matrices with lightweight retrieval.",
    description:
      "This project uses Gradio for the interface, ChromaDB for in-memory retrieval, local sentence-transformer embeddings for document chunk search, and a Qwen model through OpenRouter to generate structured outputs. It is designed to help technical teams move from long-form requirements documents to actionable downstream artifacts faster.",
    role: "Independent Builder",
    teamSize: 1,
    period: "2025",
    stack: ["Python", "Gradio", "ChromaDB", "RAG", "Qwen"],
    highlights: [
      "Supports uploaded specification documents and routes outputs into either Jira-ticket or compliance-matrix workflows.",
      "Uses local embeddings and in-memory retrieval to keep the system lightweight and fast to iterate on.",
      "Demonstrates applied LLM orchestration for practical engineering-process automation."
    ],
    impact: [
      "Shows applied ML beyond chat by focusing on document understanding and workflow acceleration.",
      "Highlights product thinking around structured outputs, operator usability, and clear task framing."
    ],
    links: {
      repo: "https://github.com/danjung9/requirements_management",
      caseStudy: "/projects/requirements-assistant"
    },
    image: "/projects/requirements-assistant.svg",
    featured: true,
    status: "live"
  },
  {
    slug: "ai-shopping-glasses",
    title: "AI Shopping Assistant Glasses",
    tagline: "Real-time in-store product intelligence using smart glasses and multimodal AI",
    summary:
      "Built a live shopping assistant using Meta Ray-Ban smart glasses that detects product interactions and performs real-time research on pricing, specs, and alternatives.",
    description:
      "Developed an end-to-end multimodal AI system that integrates Meta Ray-Ban smart glasses with real-time product recognition and web search. When a user picks up an item in-store, the system detects the interaction, retrieves relevant product data using a web search tool via MCP, and delivers insights through a conversational AI assistant. Users can explore comparisons, pricing, and specifications hands-free, and trigger actions like 'Buy Now' through integrated tooling.",
    role: "Builder in NexHacks 2026",
    period: "2026",
    stack: [
    "Computer Vision",
    "Multimodal AI",
    "LiveKit",
    "Overshoot (YC W26)",
    "MCP",
    "Web Search APIs"
    ],
    highlights: [
      "Built real-time product interaction detection using smart glasses input.",
      "Integrated live web search for pricing, specs, and comparable products.",
      "Enabled conversational AI interface for hands-free in-store assistance.",
      "Implemented voice-triggered actions such as 'Buy Now'."
    ],
    impact: [
      "Demonstrates ability to build multimodal, real-time AI systems.",
      "Strong signal in human-AI interaction and applied computer vision.",
      "Bridges physical retail and AI-driven decision-making."
    ],
    links: {
      repo: "https://github.com/danjung9/shoppinglens",
      caseStudy: "/projects/ai-shopping-glasses"
    },
    image: "/projects/commavq-world-models.svg",
    featured: true,
    status: "archived"
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
