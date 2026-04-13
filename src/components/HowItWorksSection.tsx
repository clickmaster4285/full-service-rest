import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScanLine, ChefHat, ClipboardList, Wallet, BarChart3 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: ScanLine, num: "01", title: "Customer Scans or Orders", desc: "Guests scan a QR code or place an order online instantly — no waiting for a waiter." },
  { icon: ChefHat, num: "02", title: "Kitchen Receives Request", desc: "Orders appear on the kitchen display in real-time with priority flagging." },
  { icon: ClipboardList, num: "03", title: "Staff Manages Flow", desc: "Front-of-house tracks order status, manages tables, and coordinates delivery." },
  { icon: Wallet, num: "04", title: "Payment Processed", desc: "Seamless checkout with split bills, tips, and multiple payment methods." },
  { icon: BarChart3, num: "05", title: "Analytics Updated", desc: "Every transaction feeds your live dashboard — revenue, trends, and insights." },
];

const HowItWorksSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const cards = ref.current.querySelectorAll(".hiw-card");
    const connector = ref.current.querySelectorAll(".hiw-connector");

    gsap.fromTo(cards, { y: 50, opacity: 0, scale: 0.92 }, {
      y: 0, opacity: 1, scale: 1, stagger: 0.15, duration: 0.7, ease: "back.out(1.2)",
      scrollTrigger: { trigger: ref.current, start: "top 70%" },
    });

    gsap.fromTo(connector, { scaleX: 0, opacity: 0 }, {
      scaleX: 1, opacity: 1, stagger: 0.15, duration: 0.5, delay: 0.3, ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 70%" },
    });
  }, []);

  return (
    <section id="how-it-works" ref={ref} className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">Process</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From order to analytics in seconds — a seamless 5-step flow.
          </p>
        </div>

        {/* Horizontal flow on desktop, vertical on mobile */}
        <div className="hidden lg:flex items-start justify-between relative">
          {steps.map((s, i) => (
            <div key={s.title} className="flex items-start flex-1">
              <div className="hiw-card flex flex-col items-center text-center max-w-[200px] mx-auto relative group">
                {/* Number badge */}
                <div className="absolute -top-3 -right-2 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full w-7 h-7 flex items-center justify-center z-10">
                  {s.num}
                </div>
                
                {/* Icon circle */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-card to-muted border border-border/50 flex items-center justify-center mb-5 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_hsl(15_85%_55%/0.2)] transition-all duration-500">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-sm font-semibold mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hiw-connector flex-1 flex items-center justify-center mt-10 origin-left">
                  <div className="w-full h-px bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-primary/40 rotate-45" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical cards */}
        <div className="lg:hidden space-y-6">
          {steps.map((s, i) => (
            <div key={s.title} className="hiw-card flex gap-5 items-start">
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-card to-muted border border-border/50 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 rounded-full w-6 h-6 flex items-center justify-center">
                  {s.num}
                </span>
                {/* Vertical connector */}
                {i < steps.length - 1 && (
                  <div className="absolute left-1/2 top-full w-px h-6 bg-gradient-to-b from-primary/30 to-transparent -translate-x-1/2" />
                )}
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
