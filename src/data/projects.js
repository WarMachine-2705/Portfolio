const data = [
  {
    title: 'Wakubo',
    subtitle: 'Co-founder & COO | Patented AI Fashion Recommendation & Virtual Try-On',
    image: '/images/projects/wizard.png',
    date: '2025-01-24',
    desc:
      'Co-founded Wakubo and built an AI-powered platform for outfit selection and online shopping, addressing decision fatigue with personalized fashion recommendations and a virtual try-on system with integrated wardrobe management. '
      + 'Published a patent for the platform\'s AI-driven approach to enhancing outfit selection, and optimized model efficiency for performance on low-end devices. '
      + 'Tech stack: Python, Django, React, PostgreSQL, TensorFlow, AWS.',
  },

  {
    title: 'DiagnoRAG',
    subtitle: 'Multi-Modal Medical Diagnosis Agent & Knowledge Graph',
    image: '/images/projects/hello.jpg',
    date: '2025-11-15',
    desc:
      'Designed a medical diagnosis agent leveraging multi-modal inputs (clinical data, lab tests, X-rays, DNA), implementing NLP/CV models, fine-tuned LLMs, and knowledge graphs for accurate validation. '
      + 'Extracted symptoms via an ETL pipeline and matched them against ICD data for precise disease identification. '
      + 'Tech stack: Python, TensorFlow, Knowledge Graphs, AWS.',
  },

  {
    title: 'LLM Council & Agentic RAG V2',
    subtitle: 'Multi-Agent C-Suite Simulation & Advanced RAG System',
    image: '/images/projects/project2.png',
    date: '2026-06-01',
    desc:
      'Designed and prototyped Agentic RAG V2 featuring semantic caching (Weaviate), LLM-as-judge cache-hit validation, and sliding-window token chunking. '
      + 'Built LLM Council, a multi-agent system simulating a 5-person C-suite debating business decks across a 4-phase pipeline with live Socket.IO reasoning streams. '
      + 'Tech stack: Python, LiteLLM, Weaviate, MongoDB, Socket.IO, FastApi.',
  },

  {
    title: 'PAT (Pitch Assessment Trainer)',
    subtitle: 'AI-Evaluated Sales Pitch Simulator Deployed to TVS, Daikin & Suzuki',
    image: '/images/projects/wizard.png',
    date: '2026-02-10',
    desc:
      'Designed a real-time speech evaluation pipeline for PAT: WebSocket-proxied live speech-to-text feeding an LLM scoring engine grading sales pitches against interactive 2D/3D product models. '
      + 'Built 3D asset pipeline (GLTF), 2D polygon hotspot hit-testing, dual AWS S3 + MongoDB storage, and multi-tenant SaaS gamification. '
      + 'Tech stack: React, Node.js, WebSockets, Three.js, AWS S3, MongoDB.',
  },

  {
    title: 'NIIT Finance Dashboard',
    subtitle: 'AI-Augmented Financial BI Platform with Natural Language Chat',
    image: '/images/projects/Project1.png',
    date: '2025-10-05',
    desc:
      'Built an AI-augmented financial BI platform ingesting Excel P&L/headcount data to serve KPI and trend visualizations alongside a natural-language "Finance AI" chat assistant with multi-model LLM fallback routing. '
      + 'Implemented role-based data scoping enforced at query and system-prompt levels with full audit logging. '
      + 'Tech stack: React, Python, FastAPI, MongoDB, Excel ETL.',
  },

  {
    title: 'Nova (Apple LMS AI Chatbot)',
    subtitle: 'Voice-Search Conversational AI for LMS',
    image: '/images/projects/hello.jpg',
    date: '2026-04-12',
    desc:
      'Developed "Nova," Apple LMS\'s AI voice-search chatbot, combining Microsoft Cognitive Services Speech SDK for voice I/O with Core AI Service endpoints for conversational search and response generation.',
  },

  {
    title: 'NUmunch',
    subtitle: 'Web-App for TMP',
    image: '/images/projects/Project1.png',
    date: '2024-04-25',
    desc:
      'Built Web-App for my University Night Cafeteria. '
      + 'NUmunch helps student to order food online, '
      + 'without having to wait in long queues for multiple hours. ',
  },

  {
    title: 'TEDxNIITUNIVERSITY',
    subtitle: 'Website for TedXNIITUniversity',
    image: '/images/projects/project2.png',
    date: '2023-03-21',
    desc:
      'Built website for my Tedx '
      + 'It showcases all the previous talks, events and the sponsors. '
      + 'The website was build by group of 5 members. ',
  },

  {
    title: 'Voice-Assistant',
    subtitle: 'Voice-Assistant with Facial Recognition',
    image: '/images/projects/hello.jpg',
    date: '2024-03-21',
    desc:
      'Built a Voice-assistant '
      + 'It has facial recognition feature which makes it operable only for me. '
      + 'It was a side project that I made for fun.',
  },

];

export default data;
