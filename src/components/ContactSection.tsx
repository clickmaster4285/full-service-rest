import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, Clock, Navigation, MessageSquare } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

// Location data from code 2
const LOCATION = {
  fullAddress:
    "Paris Shopping Mall, 4th floor, Main PWD Rd, PWD Housing Society Sector A, Islamabad, Punjab 45700, Pakistan",
};

const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  LOCATION.fullAddress
)}&output=embed`;

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  
  // Form state from code 2 (without restaurant field)
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // GSAP animation from code 1
  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelectorAll(".contact-anim"), { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 75%" },
    });
  }, []);

  // Submit handler from code 2
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Button animation from code 1
    if (btnRef.current) {
      gsap.fromTo(btnRef.current, { scale: 1 }, { scale: 1.05, duration: 0.15, yoyo: true, repeat: 1 });
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send. Please try again or email marketing@clickmasters.pk");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input class from code 1 (keeping UI styling)
  const inputClass = "w-full px-4 py-3 rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 outline-none text-sm";

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form - Using UI from code 1 with fields from code 2 */}
          <div className="contact-anim glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="flex gap-2">
                
                <MessageSquare className="w-5 h-5 text-primary"/><h1>Send us a message</h1>
           </div>
              <input 
                type="text" 
                placeholder="Full Name" 
                value={form.name} 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
                className={inputClass} 
                required 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                value={form.email} 
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
                className={inputClass} 
                required 
              />
              <input 
                type="tel" 
                placeholder="Phone Number (Optional)" 
                value={form.phone} 
                onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                className={inputClass} 
              />
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                value={form.message} 
                onChange={(e) => setForm({ ...form, message: e.target.value })} 
                className={inputClass} 
                required 
              />
              <button 
                ref={btnRef} 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold btn-glow flex items-center justify-center gap-2 text-sm disabled:opacity-70"
              >
                <Send className="w-4 h-4" /> 
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Info Cards + Map - Using content from code 2 */}
          <div className="contact-anim space-y-6">
            {/* Contact Cards Grid - from code 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Address Card */}
              <div className="glass-card p-4 flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Address</p>
                  <p className="text-xs text-muted-foreground">
                    {LOCATION.fullAddress}
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass-card p-4 flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Email</p>
                  <p className="text-xs">marketing@clickmasters.pk</p>
                  <p className="text-xs">info@clickmasters.pk</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card p-4 flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Phone</p>
                  <p className="text-xs">+92 333-1116842</p>
                  <p className="text-xs">+92 332-5394285</p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="glass-card p-4 flex gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Hours</p>
                  <p className="text-xs">Mon - Sat: 9AM - 6PM</p>
                </div>
              </div>
            </div>

            {/* Map - from code 2 with styling from code 1 */}
            <div className="glass-card overflow-hidden rounded-xl h-64">
              <iframe
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Location"
                className="w-full h-full"
              />
            </div>

            {/* Directions Link - from code 2 */}
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                LOCATION.fullAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm hover:underline"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;