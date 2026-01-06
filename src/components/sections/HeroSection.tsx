import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by 200+ Businesses Worldwide
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We Design & Build{" "}
              <span className="gradient-text">Websites, Apps & Software</span>{" "}
              for Modern Businesses
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              From concept to launch, we deliver scalable digital solutions that drive growth. 
              Fast development, clean code, and ongoing support – everything your business needs to succeed online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#portfolio" className="btn-secondary inline-flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">12+</p>
                <p className="text-sm text-muted-foreground">Cities Served</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block animate-fade-in-up delay-200">
            <div className="relative">
              {/* Code Window */}
              <div className="bg-sidebar rounded-2xl p-6 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-sm text-sidebar-foreground/90 space-y-2">
                  <p><span className="text-primary">const</span> devlink = {"{"}</p>
                  <p className="pl-4">mission: <span className="text-green-400">"Build products that scale"</span>,</p>
                  <p className="pl-4">services: [<span className="text-yellow-400">"Web"</span>, <span className="text-yellow-400">"Mobile"</span>, <span className="text-yellow-400">"Software"</span>],</p>
                  <p className="pl-4">quality: <span className="text-primary">Infinity</span>,</p>
                  <p>{"}"}</p>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-10 -right-10 bg-card rounded-xl p-4 shadow-card-hover animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Project Launched</p>
                    <p className="text-xs text-muted-foreground">E-commerce Platform</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-10 bg-card rounded-xl p-4 shadow-card-hover animate-float delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-lg">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">99.9% Uptime</p>
                    <p className="text-xs text-muted-foreground">All Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
