export type PricingPlan = {
  id: string;
  name: string;
  price: string;
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
    price: "$499",
    description: "Perfect for startups and small projects needing a quick web presence.",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form",
      "1 revision round",
      "2 week delivery"
    ],
    isAdvanced: false,
  },
  {
    id: "essential_web",
    name: "Essential Web",
    price: "$1,499",
    description: "Complete website solution for growing businesses.",
    features: [
      "Up to 5 pages",
      "Custom design",
      "Mobile responsive",
      "SEO optimization",
      "Contact forms",
      "Social media integration",
      "3 revision rounds",
      "4 week delivery"
    ],
    isAdvanced: false,
  },
  {
    id: "professional_site",
    name: "Professional Site",
    price: "$3,499",
    description: "Advanced website with CMS and extended functionality.",
    features: [
      "Up to 15 pages",
      "Custom CMS integration",
      "Blog functionality",
      "Advanced SEO",
      "Analytics setup",
      "Email marketing integration",
      "5 revision rounds",
      "6 week delivery"
    ],
    isAdvanced: false,
    popular: true,
  },
  {
    id: "brand_builder",
    name: "Brand Builder",
    price: "$5,999",
    description: "Complete brand and web presence package.",
    features: [
      "Everything in Professional",
      "Logo design",
      "Brand guidelines",
      "Typography & color system",
      "Social media templates",
      "Business card design",
      "8 week delivery"
    ],
    isAdvanced: true,
  },
  {
    id: "business_plus",
    name: "Business Plus",
    price: "$9,999",
    description: "Enterprise-grade web solution with advanced features.",
    features: [
      "Unlimited pages",
      "E-commerce integration",
      "Custom web application",
      "User authentication",
      "Database integration",
      "API development",
      "Premium support",
      "12 week delivery"
    ],
    isAdvanced: true,
  },
  {
    id: "digital_platform",
    name: "Digital Platform",
    price: "$14,999",
    period: "/year",
    description: "Full digital platform with ongoing development and support.",
    features: [
      "Complete web platform",
      "Mobile app (iOS & Android)",
      "Admin dashboard",
      "Cloud infrastructure",
      "Continuous updates",
      "Priority support 24/7",
      "Monthly consultations",
      "Google Search Console indexing"
    ],
    isAdvanced: true,
  },
  {
    id: "full_solution",
    name: "Full Solution",
    price: "$24,999+",
    description: "Complete digital transformation for enterprises.",
    features: [
      "Everything in Digital Platform",
      "Custom software development",
      "Multi-platform deployment",
      "Dedicated project manager",
      "SLA guarantee",
      "All search engine indexing",
      "Full branding package",
      "Ongoing maintenance"
    ],
    isAdvanced: true,
  },
];
