/*
 * Achievements Section — Editorial Monolith Design
 * Covers case competitions, education, and certifications.
 * Two-column layout with editorial styling.
 */
import { useEffect, useRef, useState } from "react";

const competitions = [
  {
    rank: "Rank 1",
    event: "Mind the Product Competition",
    venue: "IIT Roorkee",
    date: "Feb 2023",
  },
  {
    rank: "Rank 1",
    event: "Startup Sprint",
    venue: "Master's Union",
    date: "Mar 2023",
  },
  {
    rank: "National Finalist (Top 5)",
    event: "Reckitt Global Challenge",
    venue: "Presented to MD of Reckitt India, livestreamed on NDTV India",
    date: "2023",
  },
];

const education = [
  {
    institution: "IMT Ghaziabad",
    degree: "MBA, Marketing and Information Technology",
    coursework: "Tech Strategy, GTM, Pricing for Value",
    period: "July 2022 – June 2024",
    location: "Ghaziabad, India",
  },
  {
    institution: "Medicaps University",
    degree: "B.Tech, Electronics and Communication Engineering",
    coursework: "Specialization: Computer Technology",
    period: "July 2016 – May 2020",
    location: "Indore, India",
  },
];

const certifications = [
  {
    name: "Product Leader Certification",
    issuer: "Product School",
    date: "May 2024",
  },
  {
    name: "Certification Program in Product Management",
    issuer: "upGrad Campus",
    date: "January 2023",
  },
];

export default function Achievements() {
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
    <section id="achievements" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div ref={ref} className="container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 rotate-45 bg-accent-sienna" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-sienna">
            Achievements & Education
          </p>
          <div className="flex-1 h-px bg-[#E8E6E1]" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-[48px] font-bold text-deep-charcoal leading-tight tracking-tight mb-16">
          Beyond the day job.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — Competitions */}
          <div
            className={`lg:col-span-5 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="font-display text-xl font-bold text-deep-charcoal mb-6">
              Case Competitions
            </h3>

            <div className="space-y-6">
              {competitions.map((comp, i) => (
                <div
                  key={i}
                  className="relative pl-6 pb-6 border-l border-[#E8E6E1] last:border-0 last:pb-0"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[9px] rotate-45 bg-accent-sienna" />
                  <div className="font-display text-lg font-bold text-accent-sienna">
                    {comp.rank}
                  </div>
                  <div className="mt-1 font-medium text-deep-charcoal">
                    {comp.event}
                  </div>
                  <div className="text-sm text-warm-mid mt-1">
                    {comp.venue}
                  </div>
                  <div className="font-mono text-xs text-warm-mid mt-1">
                    {comp.date}
                  </div>
                </div>
              ))}
            </div>

            {/* Leadership */}
            <div className="mt-10 pt-8 border-t border-[#E8E6E1]">
              <h3 className="font-display text-xl font-bold text-deep-charcoal mb-3">
                Leadership
              </h3>
              <p className="text-sm text-warm-mid leading-relaxed">
                <strong className="text-deep-charcoal">
                  Research and Analytics Consulting Enterprise (RACE)
                </strong>
                , Senior Executive Member, IMT Ghaziabad (2022–2024)
              </p>
            </div>
          </div>

          {/* Right — Education + Certifications */}
          <div
            className={`lg:col-span-7 transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="font-display text-xl font-bold text-deep-charcoal mb-6">
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-6 bg-white border border-[#E8E6E1] rounded-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-display text-lg font-bold text-deep-charcoal">
                        {edu.institution}
                      </h4>
                      <p className="text-sm font-medium text-deep-charcoal mt-1">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <span className="font-mono text-xs text-warm-mid">
                        {edu.period}
                      </span>
                      <span className="font-mono text-xs text-warm-mid">
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-warm-mid mt-2">{edu.coursework}</p>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <h3 className="font-display text-xl font-bold text-deep-charcoal mt-12 mb-6">
              Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="p-5 bg-white border border-[#E8E6E1] rounded-sm"
                >
                  <p className="font-medium text-sm text-deep-charcoal">
                    {cert.name}
                  </p>
                  <p className="text-xs text-warm-mid mt-1">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
              ))}
            </div>

            {/* Hobbies */}
            <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
              <h3 className="font-display text-xl font-bold text-deep-charcoal mb-4">
                Outside of work
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Cooking", "Badminton", "Reading"].map((hobby, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm font-medium text-warm-mid bg-white border border-[#E8E6E1] rounded-sm"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
