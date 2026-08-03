/*
 * Skills Section — Editorial Monolith Design
 * Clean categorized skill display with editorial layout.
 * Three columns: Product, AI/Technical, Tools.
 */
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Product",
    skills: [
      "Zero-to-One Development",
      "Roadmap Planning",
      "PRD Writing",
      "OKR Definition",
      "Feature Prioritization",
      "Agile/Scrum",
      "Dependency Management",
      "Customer Discovery",
      "Go-to-Market",
    ],
  },
  {
    title: "AI & Technical",
    skills: [
      "AI Product Management",
      "Agentic Workflows",
      "Knowledge Graph",
      "AI Evaluation Frameworks",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Model Context Protocol (MCP)",
      "Telemetry and Instrumentation",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Figma",
      "Miro",
      "Python",
      "ServiceNow Platform",
      "Claude",
      "Jira",
      "Confluence",
      "Cursor",
      "GitHub",
      "Appsee",
      "Experience Analytics (UXA)",
      "SQL",
    ],
  },
];

export default function Skills() {
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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 md:py-32 bg-white">
      <div ref={ref} className="container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 rotate-45 bg-accent-sienna" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-sienna">
            Skills & Expertise
          </p>
          <div className="flex-1 h-px bg-[#E8E6E1]" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-deep-charcoal leading-tight tracking-tight mb-16">
          What I bring to the table.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E8E6E1]">
                <div className="w-2 h-2 rotate-45 bg-accent-sienna" />
                <h3 className="font-display text-lg font-bold text-deep-charcoal">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-2 text-xs sm:text-sm font-medium text-warm-mid bg-[#FAFAF8] border border-[#E8E6E1] rounded-sm hover:border-accent-sienna/30 hover:text-accent-sienna transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
