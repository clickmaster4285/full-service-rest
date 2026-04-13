import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const links = ["Home", "About", "Features", "Services", "Contact"];
  const socials = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="border-t border-border/30 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="text-xl font-bold font-display text-gradient">
          Clickmasters
        </a>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {socials.map((s, i) => (
            <a key={i} href={s.href} className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300">
              <s.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-8">
        © 2026 Clickmasters. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
