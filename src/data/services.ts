import { Globe, Smartphone, Settings, Palette, Wrench } from "lucide-react";

export const services = [
  {
    id: "website-development",
    icon: Globe,
    title: "Website Development",
    shortDescription: "Custom websites and web applications built with modern technologies for optimal performance and SEO.",
    fullDescription: "We craft stunning, high-performance websites that drive results. Our web development team specializes in creating responsive, user-friendly websites that not only look great but also deliver measurable business outcomes. From simple landing pages to complex web applications, we build solutions that scale with your business.",
    features: ["React & Next.js", "E-commerce", "CMS Integration", "Progressive Web Apps", "SEO Optimization", "Performance Tuning"],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS", "Vercel"],
    industries: ["E-commerce", "Healthcare", "Finance", "Education", "Real Estate", "Non-Profit"],
    benefits: [
      "Lightning-fast load times that improve user experience and SEO",
      "Mobile-responsive design that works on all devices",
      "Secure, scalable architecture built for growth",
      "Easy content management with intuitive CMS solutions"
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "mobile-app-development",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDescription: "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    fullDescription: "Transform your ideas into powerful mobile experiences. Our mobile development team creates apps that users love, combining beautiful design with robust functionality. Whether you need a native iOS app, Android app, or cross-platform solution, we deliver apps that engage users and drive business growth.",
    features: ["React Native", "Flutter", "Native iOS/Android", "Push Notifications", "Offline Support", "App Store Optimization"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "REST APIs"],
    industries: ["Healthcare", "Fintech", "Travel", "Fitness", "Social Media", "On-Demand Services"],
    benefits: [
      "Native performance with cross-platform efficiency",
      "Intuitive UI/UX designed for mobile users",
      "Seamless integration with device features",
      "Ongoing support and maintenance"
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "custom-software-solutions",
    icon: Settings,
    title: "Custom Software Solutions",
    shortDescription: "Custom enterprise solutions tailored to streamline your business operations and boost productivity.",
    fullDescription: "Every business is unique, and off-the-shelf software often falls short. Our custom software development services create tailored solutions that fit your exact needs. From workflow automation to complex enterprise systems, we build software that transforms how you do business.",
    features: ["CRM Systems", "ERP Solutions", "Automation", "Data Analytics", "Integration Services", "Legacy Modernization"],
    technologies: ["Python", "Java", "C#", ".NET", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes"],
    industries: ["Manufacturing", "Logistics", "Healthcare", "Retail", "Government", "Professional Services"],
    benefits: [
      "Solutions designed specifically for your workflow",
      "Increased efficiency through automation",
      "Better decision-making with real-time data",
      "Scalable architecture that grows with you"
    ],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    shortDescription: "Beautiful, intuitive interfaces designed to delight users and drive conversions.",
    fullDescription: "Great design is more than aesthetics—it's about creating experiences that resonate with users. Our design team combines creativity with user research to craft interfaces that are both beautiful and functional. We focus on user-centered design principles to ensure every interaction feels intuitive and engaging.",
    features: ["User Research", "Prototyping", "Design Systems", "Usability Testing", "Interaction Design", "Brand Identity"],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle", "Framer", "Webflow"],
    industries: ["SaaS", "E-commerce", "Fintech", "Healthcare", "Education", "Entertainment"],
    benefits: [
      "Higher user engagement and satisfaction",
      "Reduced development costs through clear specs",
      "Consistent brand experience across platforms",
      "Data-driven design decisions"
    ],
    color: "from-rose-500 to-pink-600",
  },
  {
    id: "maintenance-support",
    icon: Wrench,
    title: "Maintenance & Support",
    shortDescription: "Reliable ongoing support and maintenance to keep your digital products running smoothly.",
    fullDescription: "Launch is just the beginning. Our maintenance and support services ensure your digital products continue to perform at their best. From security updates to feature enhancements, we provide the ongoing care your applications need to thrive in an ever-evolving digital landscape.",
    features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Bug Fixes", "Feature Updates", "Technical Support"],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Datadog", "Sentry"],
    industries: ["All Industries"],
    benefits: [
      "Peace of mind with 24/7 system monitoring",
      "Proactive security updates and patches",
      "Optimized performance and uptime",
      "Expert technical support when you need it"
    ],
    color: "from-amber-500 to-orange-600",
  },
];

export type Service = typeof services[number];
