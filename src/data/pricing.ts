export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  monthlyFee?: string;
  period?: string;
  description: string;
  features: string[];
  isAdvanced: boolean;
  popular?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "launch_pad",
    name: "Launch Pad",
    price: "$50",
    monthlyFee: "+$10/month",
    description: "1–2 page basic website with clean professional layout.",
    features: [
      "1–2 page basic website",
      "Free subdomain or client-provided domain",
      "Mobile responsive",
      "Clean professional layout",
      "Contact information display",
      "Basic support"
    ],
    isAdvanced: false,
  },
  {
    id: "essential_web",
    name: "Essential Web",
    price: "$80",
    monthlyFee: "+$15/month",
    description: "Complete website solution with custom domain and contact form.",
    features: [
      "Custom domain setup",
      "Up to 6 pages",
      "Fully working contact form",
      "User messages delivered to email",
      "Responsive & optimized layout",
      "Basic SEO structure"
    ],
    isAdvanced: false,
  },
  {
    id: "professional_site",
    name: "Professional Site",
    price: "$120",
    monthlyFee: "+$25/month",
    description: "Advanced website with custom styling and security.",
    features: [
      "Up to 12 pages",
      "Custom UI styling",
      "Contact & feedback system",
      "Logo placement",
      "Performance optimization",
      "Basic security & maintenance"
    ],
    isAdvanced: false,
    popular: true,
  },
  {
    id: "brand_builder",
    name: "Brand Builder",
    price: "$200",
    monthlyFee: "+$40/month",
    description: "Complete brand setup with blog or portfolio section.",
    features: [
      "Up to 15 pages",
      "Brand setup (colors, typography, layout)",
      "Blog or portfolio section",
      "Smooth UI animations",
      "SEO-ready structure"
    ],
    isAdvanced: true,
  },
  {
    id: "business_plus",
    name: "Business Plus",
    price: "$350",
    monthlyFee: "+$60/month",
    description: "Advanced business solution with custom Android app.",
    features: [
      "Up to 20 website pages",
      "Advanced UI/UX",
      "Blog or content section",
      "Custom forms & integrations",
      "Speed & performance optimization",
      "Custom Android app (user-facing)"
    ],
    isAdvanced: true,
  },
  {
    id: "digital_platform",
    name: "Digital Platform",
    price: "$500",
    monthlyFee: "+$170/year",
    period: "/year",
    description: "Custom website and/or mobile app with backend support.",
    features: [
      "Custom website and/or mobile app",
      "Android app or Android + iOS app",
      "Optional backend & database",
      "Admin-managed content",
      "Client communication features",
      "Secure & scalable architecture",
      "Google Search Console & indexing"
    ],
    isAdvanced: true,
  },
  {
    id: "full_solution",
    name: "Full Solution",
    price: "$690",
    monthlyFee: "+$90/month",
    description: "Complete digital transformation with app publishing.",
    features: [
      "Unlimited website pages",
      "Full brand identity (logo, colors, typography)",
      "Custom domain setup",
      "Website + Android + iOS apps",
      "Database & backend system",
      "Admin dashboard",
      "Advanced authentication",
      "Optional payment integration",
      "App publishing (Play Store & App Store)",
      "All search engine indexing"
    ],
    isAdvanced: true,
  },
];
