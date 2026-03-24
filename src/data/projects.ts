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
    image: "/projects/meetpeople.png",
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
    teamSize: 4,
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
    image: "/projects/requirements-assistant.png",
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
    image: "/projects/shopping_lens.png",
    featured: true,
    status: "archived"
  },
  {
    slug: "outfit-assistant",
    title: "Outfit Assistant",
    tagline: "AI wardrobe rating and outfit recommendation powered by vision models",
    summary:
      "Built an interactive computer-vision app that rates clothing items, auto-categorizes wardrobe pieces, and recommends pairings using image embeddings and color/style matching.",
    description:
      "Outfit Assistant is an AI-powered wardrobe analysis tool built for rapid experimentation with fashion and style data. The project combines a Gradio interface with a Python vision pipeline to let users upload wardrobe images, automatically score clothing items on a 1–100 scale, infer garment categories, and receive pairing recommendations. The recommendation flow blends CLIP-based image embeddings with complementary color and style heuristics, creating a practical end-to-end system that connects model inference, lightweight ranking logic, and user-facing interaction design.",
    role: "Co-Builder",
    teamSize: 2,
    period: "2025",
    stack: [
      "Python",
      "Gradio",
      "PyTorch",
      "Transformers",
      "OpenCV",
      "Hugging Face"
    ],
    highlights: [
      "Built a wardrobe manager that ingests multiple clothing images and auto-generates ratings and categories.",
      "Implemented a rate-and-recommend workflow that scores new items and returns matching pieces from a saved wardrobe.",
      "Used CLIP embeddings together with complementary color and similarity-based matching for outfit recommendations.",
      "Designed the interface to support upload, webcam, and clipboard image input for faster experimentation.",
      "Packaged the project with Hugging Face-compatible dependencies and a live demo deployment path."
    ],
    impact: [
      "Demonstrates the ability to turn computer-vision models into a usable interactive product.",
      "Shows end-to-end ML systems thinking across inference, heuristics, UI, and deployment.",
      "Presents a concrete example of applying multimodal AI to a consumer-facing recommendation experience."
    ],
    links: {
      repo: "https://github.com/danjung9/outfit_assistant",
      caseStudy: "https://huggingface.co/spaces/danjung9/P1-Outfit-Assistant"
    },
    image: "/projects/outfit.png",
    featured: true,
    status: "archived"
  },
  {
    slug: "chemical-plant-design-project",
    title: "Chemical Plant Design (ChE 613)",
    tagline: "End-to-end chemical process design integrating thermodynamics, transport, and control",
    summary: "Designed a large-scale chemical plant by integrating core chemical engineering principles including material and energy balances, thermodynamics, transport phenomena, reaction engineering, and process control.",
    description: "This project is a comprehensive chemical plant design completed as part of a capstone ChE curriculum. It applies the five foundational pillars of chemical engineering: material and energy balances, thermodynamics, mass and heat transport, reactive process engineering, and process control. The work involved designing and analyzing unit operations such as compressors, heat exchangers, and reactors, while ensuring system-wide efficiency, feasibility, and controllability. The final design incorporates both steady-state analysis and control strategies, demonstrating the ability to translate theoretical principles into a functional, large-scale process system.",
    role: "Team Member",
    teamSize: 4,
    period: "2023",
    stack: ["Process Design", "Thermodynamics", "Mass & Heat Transfer", "Reaction Engineering", "Process Control"],
    highlights: [
      "Performed material and energy balances across complex process systems.",
      "Applied thermodynamic models to determine system efficiency and equipment sizing.",
      "Designed and analyzed heat exchangers and transport processes.",
      "Developed reactor systems based on reaction engineering principles.",
      "Implemented process control strategies using PID and system-level control design."
    ],
    impact: [
      "Demonstrates ability to design and analyze a full-scale chemical process from first principles.",
      "Integrates multiple engineering disciplines into a cohesive, production-ready system design.",
      "Showcases readiness for real-world process engineering and plant design roles."
    ],
    links: {
      repo: "",
      caseStudy: ""
    },
    image: "/projects/ammoniaplant.jpeg",
    featured: true,
    status:"archived"
  },
];


export const featuredProjects = projects.filter((project) => project.featured);
