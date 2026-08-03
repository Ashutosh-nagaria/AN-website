/*
 * About Section — Editorial Monolith Design
 * Two-column asymmetric layout: bio on left, philosophy quote on right.
 * Subtle geometric accent background on the quote side.
 */
import { useEffect, useRef, useState } from "react";

export default function About() {
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
    <section id="about" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div ref={ref} className="container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 rotate-45 bg-accent-sienna" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-sienna">
            About Me
          </p>
          <div className="flex-1 h-px bg-[#E8E6E1]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — Bio */}
          <div
            className={`lg:col-span-7 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-deep-charcoal leading-tight tracking-tight">
              Product leader who ships at
              <br />
              enterprise scale.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-[1.8] text-warm-mid max-w-xl">
              <p>
                I'm a Product Manager specializing in AI-native enterprise
                products. At ServiceNow, I led the EmployeeWorks portal from
                concept to general availability in just 6 months — an AI-native
                experience serving 1M+ end users across 50+ Fortune 500
                customers.
              </p>
              <p>
                My work sits at the intersection of AI and enterprise
                complexity: designing agentic workflows powered by Knowledge
                Graphs, building GenAI evaluation frameworks with 90%+ accuracy
                gates, and scaling notification engines to 250M+ monthly
                deliveries.
              </p>
              <p>
                Before PM, I was a QA engineer at TCS/Digitate, an AI startup
                acquired by TCS. I hold an MBA in Marketing and IT from IMT
                Ghaziabad and a B.Tech in Electronics & Communication
                Engineering.
              </p>
            </div>

            {/* Mini stats row */}
            <div className="mt-10 flex flex-wrap gap-8 pt-8 border-t border-[#E8E6E1]">
              <div>
                <div className="text-2xl font-display font-bold text-deep-charcoal">
                  25+
                </div>
                <div className="text-xs text-warm-mid mt-1 uppercase tracking-wider">
                  Customer Interviews
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-deep-charcoal">
                  6
                </div>
                <div className="text-xs text-warm-mid mt-1 uppercase tracking-wider">
                  Releases Led
                </div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-deep-charcoal">
                  2
                </div>
                <div className="text-xs text-warm-mid mt-1 uppercase tracking-wider">
                  Scrum Teams
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Philosophy Quote */}
          <div
            className={`lg:col-span-5 relative transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative p-8 md:p-10 border border-[#E8E6E1] bg-white rounded-sm">
              {/* Geometric accent */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-accent-sienna" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-accent-sienna" />

              <svg
                className="w-8 h-8 text-accent-sienna/30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="font-display text-lg md:text-xl leading-relaxed text-deep-charcoal italic">
                Cooking taught me precision plus improvisation. Gym taught me
                that sustainable pace beats sprinting. Reading keeps me
                learning. That's how I approach product: I experiment boldly,
                enforce guardrails, and take care of my team.
              </p>

              <p className="mt-6 text-sm text-warm-mid font-medium">
                — Ashutosh Nagaria
              </p>
            </div>

            {/* Accent image */}
            <div className="mt-8 relative overflow-hidden rounded-sm">
              <img
                src="/manus-storage/about-accent_5b630de7.png"
                alt=""
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
