import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Frown, Calculator, Users, Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  { icon: Clock, title: "Slow Order Management", desc: "Manual order processes causing delays and frustrated customers during peak hours." },
  { icon: Frown, title: "Poor Customer Experience", desc: "Long wait times and miscommunication leading to negative reviews and lost repeat business." },
  { icon: Calculator, title: "Manual Billing Errors", desc: "Human mistakes in billing causing revenue loss and customer disputes." },
  { icon: Users, title: "Inefficient Staff Coordination", desc: "Lack of real-time communication between kitchen and front-of-house." },
  { icon: Globe, title: "Lack of Digital Presence", desc: "No online ordering, menu, or reservation system in today's digital-first world." },
];

const PainPointsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".pain-card"),
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="pain-points" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            The <span className="text-gradient">Challenges</span> You Face
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Running a restaurant is tough. These common pain points hold your business back.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((p) => (
            <div key={p.title} className="pain-card glass-card p-6 group hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
