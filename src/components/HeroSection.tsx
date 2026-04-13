import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";

const slides = [hero1, hero2, hero3, hero4];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
      );
    }
  }, [current]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background image */}
      <div
        ref={imageRef}
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[current]})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/40 to-background/30" />

      {/* Content */}
    {/* Content */}
<div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
  
  {/* Glow background layer */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full" />
  </div>

  <div ref={textRef} className="max-w-4xl relative">
    
    {/* Main Heading */}
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-display leading-tight mb-6 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]">
      Serve Fast.{" "}
      <span className="text-gradient drop-shadow-[0_0_35px_rgba(255,100,0,0.6)]">
        Taste Better.
      </span>{" "}
      Experience More.
    </h1>

    {/* Sub text */}
    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]">
      The modern restaurant ordering & service system that transforms how
      you run your business.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      
      <a
        href="#features"
        className="px-8 py-4 bg-primary text-white rounded-lg font-semibold btn-glow text-sm shadow-[0_0_25px_rgba(255,80,0,0.4)] hover:shadow-[0_0_40px_rgba(255,80,0,0.6)] transition-all"
      >
        Explore Menu
      </a>

      <a
        href="#contact"
        className="px-8 py-4 border border-white/20 rounded-lg font-semibold text-white hover:bg-white/10 transition-all duration-300 text-sm backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        Book a Table
      </a>
    </div>
  </div>
</div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary w-8" : "bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
