import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, LayoutGrid, Smartphone, BarChart3, Package, ArrowRight, Check } from "lucide-react";
import solDigital from "@/assets/sol-digital.jpg";
import solAnalytics from "@/assets/sol-analytics.jpg";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  { icon: Monitor, title: "Smart POS Integration", desc: "Seamless point-of-sale system that handles orders, payments, and analytics in one place.", benefits: ["Multi-terminal sync", "Offline mode", "Auto reconciliation"] },
  { icon: LayoutGrid, title: "Fast Table Management", desc: "Real-time table tracking, reservations, and capacity optimization.", benefits: ["Live floor plan", "Wait-list automation", "Turn-time analytics"] },
  { icon: Smartphone, title: "Digital Ordering System", desc: "QR-based menus and online ordering that reduce wait times by 60%.", benefits: ["Multi-language", "Allergen filters", "Upsell prompts"] },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Live insights into sales, popular items, peak hours, and staff performance.", benefits: ["Revenue forecasting", "Trend detection", "Custom reports"] },
  { icon: Package, title: "Inventory Tracking", desc: "Automated stock management with low-stock alerts and waste reduction.", benefits: ["Auto-reorder", "Waste analytics", "Supplier management"] },
];

const SolutionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".sol-card"),
      { x: -50, opacity: 0 },
      {
        x: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
    gsap.fromTo(
      ref.current.querySelectorAll(".sol-img"),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.2, duration: 0.9, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section id="solutions" ref={ref} className="section-padding noise-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary mb-4 block">The Answer</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Our <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Purpose-built tools that solve every restaurant challenge — turning pain into profit.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: solution cards stacked */}
          <div className="lg:col-span-7 space-y-4">
            {solutions.map((s, i) => (
              <div
                key={s.title}
                className="sol-card  p-5 flex gap-5 group hover:border-secondary/40 transition-all duration-500 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center shrink-0 group-hover:glow-secondary transition-all duration-500">
                  <s.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base font-semibold">{s.title}</h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.benefits.map((b) => (
                      <span key={b} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                        <Check className="w-3 h-3" /> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: stacked images */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sol-img relative overflow-hidden rounded-2xl group">
              <img src={solDigital} alt="Digital ordering" loading="lazy" width={800} height={600} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-lg font-bold">60% Faster Service</p>
                <p className="text-sm text-muted-foreground">With digital ordering at every table</p>
              </div>
            </div>
            <div className="sol-img relative overflow-hidden rounded-2xl group">
              <img src={solAnalytics} alt="Analytics dashboard" loading="lazy" width={800} height={600} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-lg font-bold">Real-time Insights</p>
                <p className="text-sm text-muted-foreground">Data-driven decisions for growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
