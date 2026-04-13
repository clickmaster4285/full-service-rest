import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Monitor, LayoutGrid, Smartphone, BarChart3, Package } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  { icon: Monitor, title: "Smart POS Integration", desc: "Seamless point-of-sale system that handles orders, payments, and analytics in one place." },
  { icon: LayoutGrid, title: "Fast Table Management", desc: "Real-time table tracking, reservations, and capacity optimization." },
  { icon: Smartphone, title: "Digital Ordering System", desc: "QR-based menus and online ordering that reduce wait times by 60%." },
  { icon: BarChart3, title: "Real-time Analytics Dashboard", desc: "Live insights into sales, popular items, peak hours, and staff performance." },
  { icon: Package, title: "Inventory Tracking", desc: "Automated stock management with low-stock alerts and waste reduction." },
];

const SolutionsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".sol-card"),
      { x: -40, opacity: 0 },
      {
        x: 0, opacity: 1, stagger: 0.12, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="solutions" ref={ref} className="section-padding noise-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Our <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Purpose-built tools that solve every restaurant challenge.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="sol-card glass-card p-6 group hover:border-secondary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:glow-secondary transition-all duration-300">
                <s.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
