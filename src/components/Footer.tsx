import { ArrowUp } from "lucide-react";

const links = {
  Company: ["About", "Solutions", "Blog", "Contact"],
  Support: ["Help Desk", "Onboarding", "API Docs", "Status"],
  Resources: ["Case Studies", "Partners", "Webinars", "Downloads"],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/20 py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <p className="text-xl md:text-2xl font-bold font-display text-gradient mb-4">
              FoodHub
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The smartest food delivery solution built exclusively for quick-service restaurants.
            </p>
          </div>
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-bold text-foreground mb-4 text-base">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 FoodHub. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </footer>
  );
}