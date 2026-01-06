import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { posts } from "@/data/blog";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <PageLayout>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Insights & <span className="gradient-text">Articles</span></h1>
            <p className="text-xl text-muted-foreground">Expert perspectives on software development, design, and business technology.</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <Link to={`/blog/${post.id}`} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group block">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full">{post.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>
                    <span className="inline-flex items-center text-primary font-medium mt-4">Read more <ArrowRight className="w-4 h-4 ml-1" /></span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </PageLayout>
  );
}
