import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QrCode, ShoppingCart, CalendarCheck, UserCog, CreditCard, History, ArrowUpRight } from "lucide-react";
import featQr from "@/assets/feat-qr.jpg";
import featPayment from "@/assets/feat-payment.jpg";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: QrCode, title: "QR Menu System", desc: "Customers scan, browse, and order directly from their phone — no app download needed." },
  { icon: ShoppingCart, title: "Online Ordering", desc: "Accept orders from your website, app, or third-party platforms in one unified dashboard." },
  { icon: CalendarCheck, title: "Table Reservations", desc: "Online booking with auto-confirmation, reminders, and waitlist management." },
  { icon: UserCog, title: "Staff Management", desc: "Scheduling, roles, shift tracking, and performance analytics in one place." },
  { icon: CreditCard, title: "Payment Integration", desc: "Accept cards, UPI, wallets, and contactless payments with instant settlement." },
  { icon: History, title: "Customer History", desc: "Track preferences, past orders, and loyalty rewards for personalized service." },
];

const FeaturesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".feat-card"),
      { y: 60, opacity: 0, scale: 0.9 },
      {
        y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.7, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
    gsap.fromTo(
      ref.current.querySelectorAll(".feat-hero"),
      { x: 60, opacity: 0 },
      {
        x: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section id="features" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block">Platform</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to run a modern restaurant, all in one platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: feature bento grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`feat-card group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                {/* Hover glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/10 flex items-center justify-center group-hover:border-primary/30 transition-all duration-500">
                      <f.icon className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>

                {/* Bottom gradient bar */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Right: stacked feature images */}
          <div className="lg:col-span-4 space-y-4">
            <div className="feat-hero relative overflow-hidden rounded-2xl group">
              <img src={featQr} alt="QR ordering" loading="lazy" width={600} height={800} className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-card px-4 py-3">
                  <p className="text-sm font-semibold">Scan & Order</p>
                  <p className="text-xs text-muted-foreground">Zero wait, zero friction</p>
                </div>
              </div>
            </div>
            <div className="feat-hero relative overflow-hidden rounded-2xl group">
              <img src={featPayment} alt="Payment processing" loading="lazy" width={600} height={800} className="w-full h-[280px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-card px-4 py-3">
                  <p className="text-sm font-semibold">Instant Payments</p>
                  <p className="text-xs text-muted-foreground">Cards, UPI, wallets — all in one</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
