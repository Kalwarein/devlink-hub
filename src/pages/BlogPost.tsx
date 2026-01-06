import { useParams, Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { posts } from "@/data/blog";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

export default function BlogPost() {
  const { postId } = useParams();
  const post = posts.find(p => p.id === postId);

  if (!post) {
    return <PageLayout><div className="py-20 text-center">Post not found</div></PageLayout>;
  }

  return (
    <PageLayout>
      <article className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimatedSection>
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
            </div>
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/##/g, '<h2 class="text-2xl font-bold mt-8 mb-4">').replace(/###/g, '<h3 class="text-xl font-semibold mt-6 mb-3">') }} />
          </AnimatedSection>
        </div>
      </article>
    </PageLayout>
  );
}
