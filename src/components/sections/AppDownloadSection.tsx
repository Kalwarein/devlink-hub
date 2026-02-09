import { Smartphone, Download, Star, Shield, Bell, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import appMockup from "@/assets/app-mockup.jpg";

const features = [
  { icon: Zap, title: "Track Your Project", description: "Monitor progress, milestones, and deliverables in real-time." },
  { icon: Bell, title: "Instant Notifications", description: "Get updates the moment your project status changes." },
  { icon: Shield, title: "Secure Communication", description: "Message our team directly through encrypted channels." },
  { icon: Star, title: "Rate & Review", description: "Share feedback and help us improve our services." },
];

export function AppDownloadSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Colorful background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, hsl(260 80% 65% / 0.08), transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, hsl(150 70% 50% / 0.06), transparent 70%)" }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-6 border border-border/50">
              <Smartphone className="w-4 h-4" />
              Mobile App
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Manage Everything From{" "}
              <span className="gradient-text">Your Phone</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Download the DevLink app to track your project progress, communicate with our team, 
              and manage everything — right from your pocket. Available for Android, with iOS coming soon.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#"
                className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none">Download on</p>
                  <p className="text-sm font-semibold leading-tight">Google Play</p>
                </div>
              </motion.a>
              <motion.div
                className="inline-flex items-center gap-3 bg-muted text-muted-foreground px-6 py-3.5 rounded-xl font-medium cursor-not-allowed border border-border/50"
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none">Coming Soon</p>
                  <p className="text-sm font-semibold leading-tight">App Store</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* App mockup */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <img
                src={appMockup}
                alt="DevLink mobile app interface"
                className="w-full max-w-md rounded-3xl shadow-xl"
                loading="lazy"
              />
              {/* Floating notification */}
              <motion.div
                className="absolute top-10 -left-8 bg-card rounded-xl p-3 shadow-lg border border-border/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Milestone Complete!</p>
                    <p className="text-[10px] text-muted-foreground">UI Design Approved</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
