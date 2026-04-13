import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScanLine, ChefHat, ClipboardList, Wallet, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: ScanLine, title: "Customer Scans or Orders", desc: "Guests scan a QR code or place an order online instantly." },
  { icon: ChefHat, title: "Kitchen Receives Request", desc: "Orders appear on the kitchen display in real-time." },
  { icon: ClipboardList, title: "Staff Manages Flow", desc: "Front-of-house tracks order status and manages tables." },
  { icon: Wallet, title: "Payment Processed", desc: "Seamless checkout with multiple payment options." },
  { icon: BarChart3, title: "Analytics Updated", desc: "Every transaction feeds your live analytics dashboard." },
];

const HowItWorksSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".step-item");
    const line = ref.current.querySelector(".timeline-line-fill") as HTMLElement;

    gsap.fromTo(items, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.2, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 70%" },
    });

    if (line) {
      gsap.fromTo(line, { scaleY: 0 }, {
        scaleY: 1, duration: 1.5, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border">
            <div className="timeline-line-fill w-full h-full bg-gradient-to-b from-primary to-accent origin-top" />
          </div>
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className={`step-item relative flex items-start gap-6 ${
                  i % 2 ? "md:flex-row-reverse md:text-right" : ""
                }`}
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0 md:mx-auto">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="glass-card p-5 flex-1 md:max-w-xs">
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
