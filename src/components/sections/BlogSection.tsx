import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "The Future of Mobile App Development in 2024",
    excerpt: "Explore the latest trends and technologies shaping mobile development, from AI integration to cross-platform solutions.",
    category: "Technology",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    featured: true,
  },
  {
    title: "How to Choose the Right Tech Stack for Your Startup",
    excerpt: "A comprehensive guide to selecting technologies that scale with your business growth.",
    category: "Startup Advice",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    featured: false,
  },
  {
    title: "Case Study: Building an E-commerce Platform That Handles 10K Orders/Day",
    excerpt: "Learn how we architected a high-performance e-commerce solution for a growing retail brand.",
    category: "Case Study",
    date: "Dec 5, 2024",
    readTime: "12 min read",
    featured: false,
  },
  {
    title: "UX Best Practices for B2B Software Applications",
    excerpt: "Designing enterprise software doesn't have to mean sacrificing user experience. Here's how.",
    category: "Design",
    date: "Nov 28, 2024",
    readTime: "6 min read",
    featured: false,
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Insights
            </span>
            <h2 className="section-title">Blog & Insights</h2>
            <p className="section-subtitle">
              Expert perspectives on software development, design, and business technology.
            </p>
          </div>
          <a
            href="#blog"
            className="btn-secondary mt-6 md:mt-0 inline-flex items-center gap-2 self-start"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className={`bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer animate-fade-in-up ${
                post.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Placeholder */}
              <div className={`bg-gradient-to-br from-primary/20 to-primary/5 ${
                post.featured ? "h-64" : "h-40"
              } flex items-center justify-center`}>
                <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>

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

                <a
                  href="#blog"
                  className="inline-flex items-center text-primary font-medium mt-4 group/link"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
