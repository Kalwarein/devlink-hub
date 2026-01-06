export const projects = [
  {
    id: "fintrack-dashboard",
    title: "FinTrack Dashboard",
    category: "Dashboards",
    shortDescription: "Real-time financial analytics platform with advanced charting",
    fullDescription: "FinTrack is a comprehensive financial analytics platform that helps investment firms track portfolio performance in real-time. Built with React and D3.js, the dashboard processes millions of data points to deliver actionable insights through intuitive visualizations.",
    tech: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    color: "from-blue-500 to-indigo-600",
    challenge: "The client needed a platform that could handle real-time data from multiple financial APIs while maintaining sub-second response times.",
    solution: "We implemented a microservices architecture with Redis caching and WebSocket connections for live updates, achieving 99.9% uptime and <200ms response times.",
    results: [
      "40% reduction in time spent on data analysis",
      "Real-time updates for 50,000+ data points",
      "99.9% uptime over 12 months",
      "Adopted by 200+ investment analysts"
    ],
    client: "Global Investment Firm",
    duration: "4 months",
    year: "2024"
  },
  {
    id: "shopease-ecommerce",
    title: "ShopEase E-commerce",
    category: "Websites",
    shortDescription: "Full-featured online marketplace with 10k+ products",
    fullDescription: "ShopEase is a modern e-commerce platform serving customers across West Africa. The platform features advanced search, personalized recommendations, and seamless payment integration with local and international payment providers.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind", "Algolia", "AWS"],
    color: "from-emerald-500 to-teal-600",
    challenge: "The client needed an e-commerce solution that could handle high traffic during sales events while supporting multiple payment methods popular in West Africa.",
    solution: "We built a headless commerce architecture with Next.js, implementing CDN caching and auto-scaling to handle traffic spikes. Integrated 5+ payment providers including mobile money.",
    results: [
      "300% increase in online sales",
      "50% improvement in page load times",
      "Support for 5+ payment methods",
      "Successfully handled 100k+ concurrent users during Black Friday"
    ],
    client: "Leading African Retail Brand",
    duration: "6 months",
    year: "2024"
  },
  {
    id: "healthhub-mobile",
    title: "HealthHub Mobile",
    category: "Mobile Apps",
    shortDescription: "Healthcare appointment booking and telemedicine app",
    fullDescription: "HealthHub is a comprehensive healthcare app that connects patients with doctors across Sierra Leone. The app features appointment booking, video consultations, prescription management, and health records—all in a secure, HIPAA-compliant platform.",
    tech: ["React Native", "Firebase", "WebRTC", "Node.js", "MongoDB"],
    color: "from-rose-500 to-pink-600",
    challenge: "Healthcare access in rural Sierra Leone is limited. The client needed a solution that would work on low-bandwidth connections while maintaining security standards.",
    solution: "We developed a React Native app with offline-first architecture, low-bandwidth video calling, and end-to-end encryption. The app works seamlessly even on 2G networks.",
    results: [
      "25,000+ patient registrations in first year",
      "10,000+ telemedicine consultations",
      "Average 4.8 star rating on app stores",
      "Expanded healthcare access to 50+ rural communities"
    ],
    client: "Sierra Leone Health Ministry Partner",
    duration: "8 months",
    year: "2023"
  },
  {
    id: "logiflow-erp",
    title: "LogiFlow ERP",
    category: "Systems",
    shortDescription: "Enterprise resource planning for logistics companies",
    fullDescription: "LogiFlow is a custom ERP system designed for logistics and supply chain companies operating across West Africa. The system manages fleet tracking, inventory, invoicing, and customer relationships in one integrated platform.",
    tech: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker", "Kubernetes"],
    color: "from-amber-500 to-orange-600",
    challenge: "The logistics company was using multiple disconnected systems, leading to data silos and inefficiencies. They needed a unified platform that could scale across multiple countries.",
    solution: "We designed a modular ERP system with microservices architecture, allowing the client to roll out features incrementally. Implemented GPS tracking and real-time inventory sync across warehouses.",
    results: [
      "60% reduction in operational costs",
      "Real-time visibility across 15 warehouses",
      "Reduced delivery delays by 35%",
      "Seamless expansion to 3 new countries"
    ],
    client: "Pan-African Logistics Company",
    duration: "12 months",
    year: "2023"
  },
  {
    id: "travelmate-app",
    title: "TravelMate App",
    category: "Mobile Apps",
    shortDescription: "AI-powered travel planning and booking companion",
    fullDescription: "TravelMate is an innovative travel app that uses AI to create personalized itineraries. Users can discover attractions, book accommodations, and navigate new cities—all powered by intelligent recommendations based on their preferences.",
    tech: ["Flutter", "OpenAI", "Maps API", "Supabase", "Stripe"],
    color: "from-cyan-500 to-blue-600",
    challenge: "Traditional travel apps offer generic recommendations. The client wanted an AI-powered solution that truly understands each traveler's unique preferences.",
    solution: "We integrated OpenAI's GPT for conversational travel planning, combined with machine learning for preference learning. The app gets smarter with each interaction.",
    results: [
      "150,000+ downloads in 6 months",
      "92% user satisfaction rate",
      "Average booking value increased by 40%",
      "Featured in App Store 'Apps We Love'"
    ],
    client: "Travel Tech Startup",
    duration: "5 months",
    year: "2024"
  },
  {
    id: "newsportal-cms",
    title: "NewsPortal CMS",
    category: "Websites",
    shortDescription: "High-traffic news platform with custom CMS",
    fullDescription: "NewsPortal is a modern news platform serving millions of readers across Africa. Built with a custom headless CMS, the platform enables journalists to publish stories quickly while delivering lightning-fast page loads to readers worldwide.",
    tech: ["Next.js", "Sanity", "Vercel", "Cloudflare", "Algolia"],
    color: "from-violet-500 to-purple-600",
    challenge: "The news organization needed a platform that could handle viral traffic spikes while giving editors full control over content presentation.",
    solution: "We built a headless CMS architecture with edge caching, image optimization, and global CDN distribution. Editors can publish in seconds, and pages load in under 1 second globally.",
    results: [
      "5 million+ monthly readers",
      "Sub-second page load times globally",
      "50% reduction in publishing time",
      "Handled 10x traffic spike during elections"
    ],
    client: "Major African News Organization",
    duration: "4 months",
    year: "2024"
  },
];

export const categories = ["All", "Websites", "Mobile Apps", "Dashboards", "Systems"];

export type Project = typeof projects[number];
