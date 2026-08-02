/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'NIIT Ltd.',
    position: 'SDE – Leadership Trainee',
    url: 'https://www.niit.com/',
    startDate: '2026-07-01',
    summary: 'Co-building and scaling NIIT\'s flagship production RAG/conversational-AI backend (Core AI Service) live for 14+ months, deployed to AWS ECS via GitLab CI/CD with Weaviate semantic caching layer.',
    highlights: [
      'Co-build and scale NIIT\'s flagship production RAG/conversational-AI backend (Core AI Service), live for 14+ months, deployed to AWS ECS via a full GitLab CI/CD pipeline, featuring a Weaviate-backed semantic caching layer and conversation-scoped context-zone retrieval to cut redundant LLM calls and improve multi-turn answer relevance.',
      'Implemented LLM tool/function calling, JSON-schema-constrained structured outputs, per-user token budgeting and rate limiting, and multi-model routing through a LiteLLM proxy, alongside a speech-to-text pipeline (Google Cloud Speech API) enabling voice-driven interaction.',
      'Independently designed and prototyped a next-generation agentic RAG architecture (Agentic RAG V2) — later ported into the production Core AI Service — combining semantic caching, LLM-as-judge cache-hit validation, and conversation-scoped context resolution with automatic primary/fallback model routing for resilience.',
      'Implemented token-aware chunking (tiktoken, 800-token sliding windows) and multilingual document ingestion (PDF/DOCX/XLSX) for Agentic RAG V2, producing fully cited, source-grounded answers.',
      'Designed and built LLM Council, a multi-agent system simulating a 5-person C-suite (CEO, CTO, CFO, CMO, CDO) debating an uploaded business deck across a 4-phase pipeline — independent analysis, cross-role debate, deep-dive, and CEO final verdict — orchestrating parallel calls across three LLMs through a company LiteLLM proxy with live reasoning streamed via Socket.IO.',
      'Built a dedicated Python microservice for LLM Council that ingests and chunks PDFs, slide decks, DOCX files, and images, producing structured verdicts (key strengths, critical gaps, strategic directives, ratings) persisted to MongoDB.',
      'Developed "Nova," Apple LMS\'s AI voice-search chatbot, combining the Microsoft Cognitive Services Speech SDK for voice I/O with Core AI Service (cai) endpoints for conversational search and response generation.',
    ],
  },
  {
    name: 'NIIT Ltd.',
    position: 'Leadership Intern',
    url: 'https://www.niit.com/',
    startDate: '2025-07-01',
    endDate: '2026-06-30',
    summary: 'Spearheaded AI solutions including PAT (Pitch Assessment Trainer) commercialized to enterprise clients (TVS, Daikin, Suzuki) and the NIIT Finance AI BI platform.',
    highlights: [
      'Identified sales pitch training gaps, independently proposed solution approach and built initial POC for PAT, an AI-evaluated sales pitch training and assessment simulator later commercially sold and deployed to enterprise clients including TVS, Daikin, and Suzuki.',
      'Designed a real-time speech evaluation pipeline for PAT: WebSocket-proxied live speech-to-text feeding an LLM-based scoring engine grading sales pitches against interactive hotspot-annotated 2D/3D product models.',
      'Built PAT\'s 3D asset pipeline (GLTF processing) alongside 2D polygon hotspot hit-testing, dual AWS S3 + MongoDB GridFS storage, and a gamified badge/rewards system delivered as multi-tenant SaaS.',
      'Independently built the NIIT Finance Dashboard, an AI-augmented financial BI platform ingesting Excel P&L/headcount data to serve KPI and trend visualizations alongside a natural-language "Finance AI" chat assistant with multi-model LLM fallback routing.',
      'Implemented role-based data scoping for Finance Dashboard enforced at both query layer and LLM system-prompt level to prevent cross-business-unit data leakage, with custom authentication and full audit/activity logging.',
    ],
  },
  {
    name: 'Wakubo',
    position: 'Co-founder & COO',
    url: 'https://drive.google.com/file/d/1KsHvoUXjkWVsN1YpyGqAeH8aRerQBXpU/view?usp=sharing',
    startDate: '2024-09-01',
    summary: 'Wakubo is a patented AI-powered fashion recommendation and virtual try-on platform that solves decision fatigue in online shopping.',
    highlights: [
      'Co-founded Wakubo and spearheaded operations and AI product strategy for personalized outfit selection and instant virtual try-ons.',
      'Published a Computer Science patent for the platform\'s AI-driven approach to enhancing outfit selection and wardrobe integration.',
      'Optimized AI/ML model efficiency for seamless performance on low-end devices.',
    ],
  },
  {
    name: 'NUmunch',
    position: 'Co-founder & CTO',
    url: 'https://numunch1-2.onrender.com/',
    startDate: '2024-04-08',
    summary: 'NUmunch is an online food ordering company. It helps student to order and get their food without having to wait in long queues for multiple hours. It is loved by many students.',
    highlights: [
      'Cuts the traditional way of ordering food at the university',
      'Easy to use app',
    ],
  },
  {
    name: 'CoEET',
    position: 'Learning Assistant',
    url: 'https://niituniversity.in/',
    startDate: '2023-02-20',
    endDate: '2023-05-09',
    summary: 'CoEET is responsible for the planning, coordination, and execution of more than 60 Educational Technology projects at NU each semester, through its various desks.',
    highlights: [
      'I helped in the development of ETIC Portal',
    ],
  },
];

export default work;
