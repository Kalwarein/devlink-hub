import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    id: "future-of-mobile-app-development",
    title: "The Future of Mobile App Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping mobile development, from AI integration to cross-platform solutions.",
    category: "Technology",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "choosing-right-tech-stack",
    title: "How to Choose the Right Tech Stack for Your Startup",
    excerpt: "A comprehensive guide to selecting technologies that scale with your business growth.",
    category: "Startup Advice",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: "ecommerce-case-study",
    title: "Case Study: Building an E-commerce Platform That Handles 10K Orders/Day",
    excerpt: "Learn how we architected a high-performance e-commerce solution for a growing retail brand.",
    category: "Case Study",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: "ux-best-practices-b2b",
    title: "UX Best Practices for B2B Software Applications",
    excerpt: "Designing enterprise software doesn't have to mean sacrificing user experience. Here's how.",
    category: "Design",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Insights
            </span>
            <h2 className="section-title">Blog & Insights</h2>
            <p className="section-subtitle">
              Expert perspectives on software development, design, and business technology.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/blog"
              className="btn-secondary mt-6 md:mt-0 inline-flex items-center gap-2 self-start"
            >
              View All Posts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className={`bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer ${
                post.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Link to={`/blog/${post.id}`} className="block">
                {/* Image Placeholder */}
                <motion.div 
                  className={`bg-gradient-to-br from-primary/20 to-primary/5 ${
                    post.featured ? "h-64" : "h-40"
                  } flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span 
                    className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {post.category}
                  </motion.span>
                </motion.div>

                {/* Content */}
                <div className={`p-6 ${post.featured ? "p-8" : ""}`}>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className={`font-semibold text-foreground mb-3 group-hover:text-primary transition-colors ${
                    post.featured ? "text-2xl" : "text-lg"
                  }`}>
                    {post.title}
                  </h3>

                  <p className={`text-muted-foreground leading-relaxed ${
                    post.featured ? "" : "text-sm line-clamp-2"
                  }`}>
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center text-primary font-medium mt-4 group/link">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
