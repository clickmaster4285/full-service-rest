import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Frown, Calculator, Users, Globe } from "lucide-react";
import painCrowd from "@/assets/pain-crowd.jpg";
import painBilling from "@/assets/pain-billing.jpg";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  { icon: Clock, title: "Slow Order Management", desc: "Manual order processes causing delays and frustrated customers during peak hours.", stat: "12 min", statLabel: "avg wait time" },
  { icon: Frown, title: "Poor Customer Experience", desc: "Long wait times and miscommunication leading to negative reviews and lost repeat business.", stat: "34%", statLabel: "repeat loss" },
  { icon: Calculator, title: "Manual Billing Errors", desc: "Human mistakes in billing causing revenue loss and customer disputes.", stat: "₹2.5L", statLabel: "lost monthly" },
  { icon: Users, title: "Inefficient Staff Coordination", desc: "Lack of real-time communication between kitchen and front-of-house.", stat: "40%", statLabel: "time wasted" },
  { icon: Globe, title: "Lack of Digital Presence", desc: "No online ordering, menu, or reservation system in today's digital-first world.", stat: "65%", statLabel: "orders missed" },
];

const PainPointsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".pain-card"),
      { y: 60, opacity: 0, rotateX: 8 },
      {
        y: 0, opacity: 1, rotateX: 0, stagger: 0.12, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
    gsap.fromTo(
      ref.current.querySelectorAll(".pain-img"),
      { scale: 1.15, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="pain-points" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">The Problem</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            The <span className="text-gradient">Challenges</span> You Face
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Running a restaurant is tough. These common pain points are silently killing your revenue.
          </p>
        </div>

        {/* Hero images row */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="pain-img relative overflow-hidden rounded-2xl h-64 group">
            <img src={painCrowd} alt="Overwhelmed restaurant" loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-2xl font-bold text-primary">72%</p>
              <p className="text-sm text-foreground/80">of restaurants lose customers due to slow service</p>
            </div>
          </div>
          <div className="pain-img relative overflow-hidden rounded-2xl h-64 group">
            <img src={painBilling} alt="Manual billing chaos" loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-2xl font-bold text-primary">₹3L+</p>
              <p className="text-sm text-foreground/80">average monthly losses from billing errors</p>
            </div>
          </div>
        </div>

        {/* Pain point cards - horizontal scroll on mobile, grid on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {painPoints.map((p) => (
            <div
              key={p.title}
              className="pain-card relative overflow-hidden rounded-xl border border-destructive/20 bg-destructive/5 p-5 group hover:border-destructive/40 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Danger glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-destructive/10 rounded-full blur-2xl group-hover:bg-destructive/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 border border-destructive/20 flex items-center justify-center">
                    <p.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-destructive">{p.stat}</p>
                    <p className="text-[10px] text-muted-foreground">{p.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{p.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
