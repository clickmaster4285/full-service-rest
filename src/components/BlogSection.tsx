import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  { img: blog1, title: "Why QR Menus Are the Future of Dining", category: "Technology", date: "Mar 2026" },
  { img: blog2, title: "5 Analytics Metrics Every Restaurant Must Track", category: "Analytics", date: "Feb 2026" },
  { img: blog3, title: "How Cloud Kitchens Are Reshaping Food Delivery", category: "Industry", date: "Jan 2026" },
 
];

const BlogSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".blog-card"),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      }
    );
  }, []);

  return (
    <section id="blog" ref={ref} className="section-padding noise-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Latest from Our <span className="text-gradient">Blog</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <div key={i} className="blog-card glass-card overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-300">
              <div className="overflow-hidden h-48">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{p.category}</span>
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                </div>
                <h3 className="font-semibold leading-snug">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
