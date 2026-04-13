import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const studies = [
  {
    name: "Spice Garden",
    desc: "A multi-cuisine restaurant struggling with manual orders and billing errors.",
    metrics: [
      { icon: DollarSign, label: "Revenue Growth", before: "₹8L/mo", after: "₹12L/mo" },
      { icon: Clock, label: "Avg. Order Time", before: "12 min", after: "4 min" },
      { icon: TrendingUp, label: "Efficiency", before: "60%", after: "95%" },
    ],
  },
  {
    name: "Urban Bites",
    desc: "A fast-casual chain expanding from 2 to 6 locations without scalable tech.",
    metrics: [
      { icon: DollarSign, label: "Monthly Revenue", before: "₹15L/mo", after: "₹28L/mo" },
      { icon: Clock, label: "Table Turnover", before: "45 min", after: "28 min" },
      { icon: TrendingUp, label: "Customer Rating", before: "3.8★", after: "4.7★" },
    ],
  },
  {
    name: "Flame Grill",
    desc: "A premium grill house with food waste issues and poor inventory visibility.",
    metrics: [
      { icon: DollarSign, label: "Food Waste Cost", before: "₹2.5L/mo", after: "₹80K/mo" },
      { icon: Clock, label: "Inventory Accuracy", before: "65%", after: "98%" },
      { icon: TrendingUp, label: "Profit Margin", before: "12%", after: "22%" },
    ],
  },
];

const CaseStudiesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".case-card"),
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="case-studies" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((s) => (
            <div key={s.name} className="case-card glass-card p-6 hover:border-primary/40 transition-all duration-300 group">
              <h3 className="text-xl font-bold mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{s.desc}</p>
              <div className="space-y-4">
                {s.metrics.map((m) => (
                  <div key={m.label} className="flex items-center gap-3">
                    <m.icon className="w-4 h-4 text-primary shrink-0" />
                    <div className="flex-1">
                      <div className="text-xs text-muted-foreground">{m.label}</div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground line-through">{m.before}</span>
                        <span className="text-primary font-semibold">→ {m.after}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
