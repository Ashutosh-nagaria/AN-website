/*
 * Projects Section — Editorial Monolith Design
 * Card-based project showcase with hover-reveal details.
 * Each project card shows the key initiative, impact, and technical depth.
 */
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "EmployeeWorks AI Portal",
    subtitle: "AI-Native Enterprise Experience",
    description:
      "Led 0 to 1 product strategy for the EmployeeWorks AI-native portal — an omnichannel unified 'front door' integrating IT, HR, and Finance workflows. Shipped from concept to GA in 6 months with early adopters including CVS Health, City of Raleigh, and Siemens Healthineers.",
    impact: "10 pilot deployments targeting 1M+ end users. Employee experience business grew 5x YoY post-launch.",
    tech: ["Product Strategy", "PRDs", "Cross-functional Delivery", "Go-to-Market"],
  },
  {
    title: "People Finder AI Agent",
    subtitle: "LLM + Knowledge Graph",
    description:
      "Designed an AI agent that parses 20+ natural-language intents and generates Cypher queries against Knowledge Graph tables for end-to-end employee lookup across highly matrixed orgs. Features disambiguation UI, permission-scoped execution, and bidirectional canvas sync.",
    impact: "Eliminated manual search friction across matrixed organizations. Chose Knowledge Graph over vector RAG for deterministic multi-hop traversal.",
    tech: ["LLM Text-to-Cypher", "Knowledge Graphs", "Neo4j", "AI Evaluation"],
  },
  {
    title: "Notifications Engine",
    subtitle: "Smart Delivery at Scale",
    description:
      "Authored PRDs and user stories for a low-noise, high-value notification system with smart batching and noise reduction. Delivered across portal, Teams, and Outlook — specifically built for Employee Slate for Now Assist.",
    impact: "0 to 5,000+ deployments in 15 months. 250M+ monthly notifications. 95%+ adoption rate.",
    tech: ["Omnichannel Delivery", "Smart Batching", "Platform Engineering"],
  },
  {
    title: "GenAI Evaluation Framework",
    subtitle: "3P Testing & Accuracy Gates",
    description:
      "Established a rigorous evaluation framework with 100+ eval cases (50 functional, 40 negative/PII guardrail, 10 error-handling). Spearheaded behavioral benchmarking across third-party foundation models (Gemini, Claude, GPT-4) with in-session token caching.",
    impact: "90%+ accuracy release gate enforced across all AI features. Eliminated redundant LLM calls within conversations.",
    tech: ["AI Evaluation", "3P Testing", "Token Caching", "Green AI"],
  },
  {
    title: "Moveworks Integration",
    subtitle: "Acquisition Integration",
    description:
      "Partnered with the Moveworks team post-acquisition to integrate Moveworks-powered notifications, org chart, and experience components into the unified portal. Built split-view SysID canvas sync and custom REST API endpoints for employee verification.",
    impact: "Completed integration in under 3 weeks. CEO credited this as strong M&A execution on Q1 2026 earnings call.",
    tech: ["API Integration", "REST APIs", "Employee Verification", "Cross-team Collaboration"],
  },
];

export default function Projects() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div ref={ref} className="container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 rotate-45 bg-accent-sienna" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-sienna">
            Key Projects
          </p>
          <div className="flex-1 h-px bg-[#E8E6E1]" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-deep-charcoal leading-tight tracking-tight mb-16">
          Products I've shipped.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative p-6 md:p-8 bg-white border border-[#E8E6E1] rounded-sm transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:border-accent-sienna/20 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Number accent */}
              <div className="absolute top-6 right-6 font-mono text-5xl font-light text-[#E8E6E1] group-hover:text-accent-sienna/20 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10">
                <p className="font-mono text-xs text-accent-sienna uppercase tracking-wider mb-2">
                  {project.subtitle}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-deep-charcoal leading-tight mb-4">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-warm-mid mb-6">
                  {project.description}
                </p>

                <div className="p-4 bg-[#FAFAF8] rounded-sm mb-6 border border-[#E8E6E1]">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent-sienna mb-1">
                    Impact
                  </p>
                  <p className="text-sm font-medium text-deep-charcoal">
                    {project.impact}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-[#FAFAF8] text-warm-mid border border-[#E8E6E1] rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width background image at bottom */}
        <div className="mt-16 relative overflow-hidden rounded-sm">
          <img
            src="/manus-storage/project-bg_7f435fad.png"
            alt=""
            className="w-full h-64 md:h-80 object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
