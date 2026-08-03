/*
 * Hero Section — Editorial Monolith Design
 * Full-bleed hero with left-aligned oversized text, right side with subtle geometric element.
 * Key metrics displayed as large typographic elements.
 */
import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "1M+", label: "End Users" },
  { value: "6", label: "Months to GA" },
  { value: "95%", label: "Adoption Rate" },
  { value: "50+", label: "Fortune 500 Pipeline" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/hero-bg_90f988df.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8]/90 via-[#FAFAF8]/70 to-transparent" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left column — Text */}
          <div className="lg:col-span-7">
            <div
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-sienna mb-6">
                Product Manager &middot; AI-Native Builder
              </p>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] text-deep-charcoal tracking-tight">
                I build AI-native
                <br />
                products that
                <br />
                <span className="text-accent-sienna">scale to millions.</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg leading-relaxed text-warm-mid max-w-xl">
                Led 0 to 1 product strategy for EmployeeWorks — shipped from
                concept to GA in 6 months. Designed the People Finder AI Agent
                using Knowledge Graphs. Scaled Notifications to 250M/month
                with 95% adoption.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-deep-charcoal text-white text-sm font-medium rounded-sm hover:bg-deep-charcoal/90 transition-colors duration-200"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-deep-charcoal/20 text-deep-charcoal text-sm font-medium rounded-sm hover:border-accent-sienna hover:text-accent-sienna transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Right column — Metrics */}
          <div className="lg:col-span-5 lg:pl-8">
            <div
              className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-6 bg-white/60 backdrop-blur-sm border border-[#E8E6E1] rounded-sm"
                  style={{ animationDelay: `${200 + i * 100}ms` }}
                >
                  <div className="metric-number text-4xl sm:text-5xl lg:text-6xl text-accent-sienna">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-medium text-warm-mid uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF8] to-transparent z-10" />
    </section>
  );
}
