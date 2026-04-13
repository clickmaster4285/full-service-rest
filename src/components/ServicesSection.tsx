import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import posImg from "@/assets/services-pos.jpg";
import kitchenImg from "@/assets/services-kitchen.jpg";
import brandingImg from "@/assets/services-branding.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Full-Service Dining System Setup", desc: "End-to-end deployment of digital ordering, kitchen display, and POS systems tailored to your restaurant.", img: posImg },
  { title: "POS Installation & Training", desc: "Hardware setup, software configuration, and hands-on staff training for seamless adoption.", img: posImg },
  { title: "Cloud Kitchen Support", desc: "Complete technology stack for delivery-first kitchens including aggregator integration.", img: kitchenImg },
  { title: "Digital Menu Design", desc: "Beautiful, responsive digital menus with photography, allergen info, and real-time updates.", img: brandingImg },
  { title: "Restaurant Branding Support", desc: "Logo, visual identity, and marketing materials that make your brand unforgettable.", img: brandingImg },
];

const ServicesSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".service-item"),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="services" ref={ref} className="section-padding noise-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
        </div>
        <div className="space-y-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-item flex flex-col ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
            >
              <div className="md:w-1/2 overflow-hidden rounded-2xl">
                <img src={s.img} alt={s.title} loading="lazy" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
