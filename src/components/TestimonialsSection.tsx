import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { name: "Rajesh Kumar", role: "Owner, Spice Garden", text: "Clickmasters transformed our restaurant operations. Order errors dropped by 80% and our revenue grew 35% in just 3 months.", rating: 5 },
  { name: "Priya Sharma", role: "Manager, Urban Bites", text: "The QR ordering system is a game-changer. Customers love the speed and we've reduced wait times dramatically.", rating: 5 },
  { name: "Ahmed Khan", role: "Chef & Owner, Flame Grill", text: "Real-time kitchen displays and analytics helped us optimize our menu and reduce food waste by 40%.", rating: 5 },
  { name: "Sarah Chen", role: "Director, NoodleBox Chain", text: "Scaling from 2 to 8 locations was seamless with Clickmasters' cloud system. Incredible support team.", rating: 5 },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%" },
    });
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" });
    }
  }, [current]);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" ref={ref} className="section-padding noise-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-16">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
        <div ref={cardRef} className="glass-card p-8 md:p-12">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
            ))}
          </div>
          <p className="text-lg md:text-xl text-foreground/90 mb-8 italic">"{t.text}"</p>
          <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 text-primary font-bold text-lg">
            {t.name[0]}
          </div>
          <p className="font-semibold">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.role}</p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted/50 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted/50 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
