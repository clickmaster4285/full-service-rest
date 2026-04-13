import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "@/assets/about-team.jpg";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Happy Clients", value: 150 },
  { label: "Projects Delivered", value: 300 },
  { label: "Years Experience", value: 8 },
];

const Counter = ({ target }: { target: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    ScrollTrigger.create({
      trigger: el,
      start: "top 80%",
      onEnter: () => {
        gsap.to({ v: 0 }, {
          v: target, duration: 2, ease: "power2.out",
          onUpdate: function () { setVal(Math.round(this.targets()[0].v)); },
        });
      },
      once: true,
    });
  }, [target]);

  return <span ref={ref}>{val}+</span>;
};

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".about-anim"),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding noise-bg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="about-anim overflow-hidden rounded-2xl">
          <img src={aboutImg} alt="Our cuisine" loading="lazy" width={1200} height={800} className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div>
          <h2 className="about-anim text-3xl md:text-5xl font-bold font-display mb-6">
            About <span className="text-gradient">Clickmasters</span>
          </h2>
          <p className="about-anim text-muted-foreground leading-relaxed mb-8">
            Clickmasters started as a passionate team of developers with a vision to build impactful digital solutions. Over time, we evolved into a full-service technology partner helping businesses grow through modern, scalable systems. Today, we empower restaurants and enterprises with software that improves operations, enhances customer experience, and drives long-term growth.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="about-anim glass-card p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  <Counter target={s.value} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
