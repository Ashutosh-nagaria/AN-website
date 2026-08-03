/*
 * Experience Section — Editorial Monolith Design
 * Horizontal timeline with role cards. Clean, structured presentation
 * of career progression with key highlights.
 */
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "ServiceNow",
    role: "Product Manager",
    team: "Unified Employee Experiences",
    period: "April 2024 – Present",
    location: "Hyderabad, India",
    highlights: [
      "Led 0 to 1 product strategy for EmployeeWorks AI-native portal — concept to GA in 6 months",
      "Designed People Finder AI Agent using LLM Text-to-Cypher over Knowledge Graphs",
      "Built GenAI eval frameworks with 100+ evals, 90%+ release accuracy gate",
      "Scaled Notifications Engine to 250M+/month across 5,000+ deployments",
      "Managed 2 concurrent scrum teams + 5 US-based product designers",
    ],
    metrics: [
      { value: "1M+", label: "End Users" },
      { value: "50+", label: "Fortune 500 Pipeline" },
    ],
  },
  {
    company: "ServiceNow",
    role: "Product Management Intern",
    team: "Now Mobile",
    period: "April 2023 – May 2023",
    location: "Hyderabad, India",
    highlights: [
      "Executed qualitative research on Now Mobile app to identify mobile adoption drivers",
      "Synthesized findings into executive recommendations",
      "Earned fast-track full-time PM Pre-Placement Offer (PPO)",
    ],
    metrics: [],
  },
  {
    company: "TCS / Digitate",
    role: "Agile QA Engineer",
    team: "AI Products",
    period: "November 2020 – May 2022",
    location: "Pune, India",
    highlights: [
      "Ran functional, regression, and web testing across AI-powered product surfaces",
      "Partnered with development teams to resolve defects and ensure release readiness",
      "Products: flagship enterprise AI, ERPops, AIops, Workload Management",
    ],
    metrics: [],
  },
];

export default function Experience() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 rotate-45 bg-accent-sienna" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-sienna">
            Experience
          </p>
          <div className="flex-1 h-px bg-[#E8E6E1]" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-deep-charcoal leading-tight tracking-tight mb-16">
          Career trajectory.
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#E8E6E1]" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-8 md:pl-24 transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 w-3 h-3 -translate-x-[5px] md:-translate-x-[5px]">
                  <div className="w-full h-full rounded-full bg-accent-sienna border-2 border-[#FAFAF8]" />
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  {/* Left — Role info */}
                  <div className="lg:col-span-5">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-deep-charcoal">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="font-mono text-xs text-accent-sienna uppercase tracking-wider mb-1">
                      {exp.company} &middot; {exp.team}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-warm-mid">
                      <span>{exp.period}</span>
                      <span className="hidden sm:inline">&middot;</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Right — Highlights */}
                  <div className="lg:col-span-7">
                    <ul className="space-y-3">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-sm sm:text-base leading-relaxed text-warm-mid"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-accent-sienna shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Metrics row */}
                    {exp.metrics.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-6 pt-4 border-t border-[#E8E6E1]">
                        {exp.metrics.map((m, j) => (
                          <div key={j}>
                            <div className="text-2xl font-display font-bold text-accent-sienna">
                              {m.value}
                            </div>
                            <div className="text-xs text-warm-mid mt-0.5 uppercase tracking-wider">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
