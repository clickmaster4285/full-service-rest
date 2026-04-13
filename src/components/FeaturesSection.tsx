import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QrCode, ShoppingCart, CalendarCheck, UserCog, CreditCard, History } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: QrCode, title: "QR Menu System", desc: "Customers scan, browse, and order from their phone." },
  { icon: ShoppingCart, title: "Online Ordering", desc: "Accept orders from your website, app, or third-party platforms." },
  { icon: CalendarCheck, title: "Table Reservations", desc: "Online booking with confirmation and reminders." },
  { icon: UserCog, title: "Staff Management", desc: "Scheduling, roles, performance tracking in one dashboard." },
  { icon: CreditCard, title: "Payment Integration", desc: "Accept cards, UPI, wallets, and contactless payments." },
  { icon: History, title: "Customer History", desc: "Track preferences, orders, and loyalty for personalized service." },
];

const FeaturesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".feat-card"),
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.6, ease: "back.out(1.2)",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="features" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to run a modern restaurant, all in one platform.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="feat-card glass-card p-6 group hover:border-primary/40 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-500">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
