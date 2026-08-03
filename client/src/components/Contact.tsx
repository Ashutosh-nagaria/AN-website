/*
 * Contact Section — Editorial Monolith Design
 * Clean, direct contact information with large CTA.
 * Email, phone, LinkedIn — no forms, just open channels.
 */
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, ExternalLink } from "lucide-react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32 bg-deep-charcoal">
      <div ref={ref} className="container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 rotate-45 bg-accent-sienna" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-sienna">
            Contact
          </p>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — CTA */}
          <div
            className={`lg:col-span-7 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight">
              Open to
              <br />
              opportunities.
            </h2>

            <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-lg">
              Currently exploring roles at Big Tech and AI-native startups.
              If you're building something ambitious, I'd love to hear about it.
            </p>
          </div>

          {/* Right — Contact details */}
          <div
            className={`lg:col-span-5 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:anashutosh9@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-accent-sienna group-hover:bg-accent-sienna/10 transition-all duration-200">
                  <Mail className="w-4 h-4 text-white/60 group-hover:text-accent-sienna transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-0.5">
                    Email
                  </p>
                  <p className="text-white group-hover:text-accent-sienna transition-colors">
                    anashutosh9@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919424343492"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-accent-sienna group-hover:bg-accent-sienna/10 transition-all duration-200">
                  <Phone className="w-4 h-4 text-white/60 group-hover:text-accent-sienna transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-0.5">
                    Phone
                  </p>
                  <p className="text-white group-hover:text-accent-sienna transition-colors">
                    +91 9424343492
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/ashutosh-nagaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm group-hover:border-accent-sienna group-hover:bg-accent-sienna/10 transition-all duration-200">
                  <Linkedin className="w-4 h-4 text-white/60 group-hover:text-accent-sienna transition-colors" />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-white/40 mb-0.5">
                    LinkedIn
                  </p>
                  <p className="text-white group-hover:text-accent-sienna transition-colors flex items-center gap-1.5">
                    linkedin.com/in/ashutosh-nagaria
                    <ExternalLink className="w-3 h-3 opacity-40" />
                  </p>
                </div>
              </a>
            </div>

            {/* Location */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-white/40">
                Based in Hyderabad, India &middot; Open to relocation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
