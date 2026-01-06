export const cities = [
  { 
    id: "freetown", 
    name: "Freetown", 
    country: "Sierra Leone", 
    featured: true,
    description: "As the capital and largest city of Sierra Leone, Freetown is a growing hub for technology and innovation. DevLink is proud to serve businesses in Freetown, helping local entrepreneurs and established companies alike build their digital presence.",
    services: ["Website Development", "Mobile Apps", "Business Software", "UI/UX Design"],
    timezone: "GMT+0"
  },
  { 
    id: "bo", 
    name: "Bo", 
    country: "Sierra Leone", 
    featured: false,
    description: "Bo, Sierra Leone's second-largest city, is experiencing digital transformation. We help businesses in Bo leverage technology to reach new customers and streamline operations.",
    services: ["Website Development", "E-commerce", "Mobile Apps"],
    timezone: "GMT+0"
  },
  { 
    id: "kenema", 
    name: "Kenema", 
    country: "Sierra Leone", 
    featured: false,
    description: "Kenema's vibrant business community is embracing digital solutions. DevLink provides tailored web and mobile development services to help Kenema businesses grow.",
    services: ["Website Development", "Mobile Apps", "Digital Marketing"],
    timezone: "GMT+0"
  },
  { 
    id: "makeni", 
    name: "Makeni", 
    country: "Sierra Leone", 
    featured: false,
    description: "As the commercial center of northern Sierra Leone, Makeni businesses are increasingly looking for digital solutions. We're here to help them succeed online.",
    services: ["Website Development", "E-commerce", "Business Software"],
    timezone: "GMT+0"
  },
  { 
    id: "london", 
    name: "London", 
    country: "United Kingdom", 
    featured: true,
    description: "London is one of the world's leading financial and tech hubs. Our London team works with startups, scale-ups, and enterprises to deliver cutting-edge digital solutions that meet the high standards of the UK market.",
    services: ["Enterprise Software", "Fintech Solutions", "Mobile Apps", "Cloud Architecture"],
    timezone: "GMT+0"
  },
  { 
    id: "new-york", 
    name: "New York", 
    country: "USA", 
    featured: true,
    description: "The city that never sleeps demands digital solutions that match its pace. DevLink serves New York's diverse business landscape with innovative web and mobile development services.",
    services: ["Enterprise Software", "E-commerce", "Mobile Apps", "API Development"],
    timezone: "EST (GMT-5)"
  },
  { 
    id: "lagos", 
    name: "Lagos", 
    country: "Nigeria", 
    featured: true,
    description: "Lagos is Africa's largest tech ecosystem and a hotbed of innovation. We partner with Lagos businesses to build scalable digital products that compete on the global stage.",
    services: ["Fintech Solutions", "Mobile Apps", "E-commerce", "Business Software"],
    timezone: "WAT (GMT+1)"
  },
  { 
    id: "accra", 
    name: "Accra", 
    country: "Ghana", 
    featured: false,
    description: "Accra's tech scene is thriving, with a growing community of startups and digital businesses. DevLink supports Accra's entrepreneurs with world-class development services.",
    services: ["Website Development", "Mobile Apps", "Fintech", "E-commerce"],
    timezone: "GMT+0"
  },
  { 
    id: "nairobi", 
    name: "Nairobi", 
    country: "Kenya", 
    featured: false,
    description: "Known as 'Silicon Savannah,' Nairobi is East Africa's tech capital. We work with Nairobi's innovative businesses to create digital solutions that drive growth.",
    services: ["Mobile Apps", "Fintech", "Agritech", "Enterprise Software"],
    timezone: "EAT (GMT+3)"
  },
  { 
    id: "dubai", 
    name: "Dubai", 
    country: "UAE", 
    featured: true,
    description: "Dubai's ambition knows no bounds, and neither do our digital solutions. We help Dubai businesses build world-class websites, apps, and software systems.",
    services: ["Enterprise Software", "Mobile Apps", "E-commerce", "Real Estate Tech"],
    timezone: "GST (GMT+4)"
  },
  { 
    id: "toronto", 
    name: "Toronto", 
    country: "Canada", 
    featured: false,
    description: "Toronto's diverse economy and thriving startup ecosystem make it a perfect market for digital innovation. DevLink delivers exceptional digital products to Toronto businesses.",
    services: ["Fintech", "Healthcare Tech", "Mobile Apps", "E-commerce"],
    timezone: "EST (GMT-5)"
  },
  { 
    id: "berlin", 
    name: "Berlin", 
    country: "Germany", 
    featured: false,
    description: "Berlin's dynamic startup scene and strong engineering culture align perfectly with our approach. We build robust, scalable solutions for Berlin's ambitious businesses.",
    services: ["Enterprise Software", "Mobile Apps", "SaaS Development", "Cloud Solutions"],
    timezone: "CET (GMT+1)"
  },
];

export type City = typeof cities[number];
