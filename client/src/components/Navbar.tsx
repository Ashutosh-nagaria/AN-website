/*
 * Navbar — Editorial Monolith Design
 * Clean, minimal top navigation with logo, links, and smooth scroll behavior.
 * Transitions to solid background on scroll for contrast.
 */
import { useState, useEffect } from "react";
import Logo from "./Logo";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF8]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Logo size={32} />
          <span className="font-display font-bold text-lg tracking-tight text-deep-charcoal">
            Ashutosh Nagaria
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => scrollTo(link.href)}
                className="relative text-sm font-medium text-deep-charcoal/70 hover:text-deep-charcoal transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent-sienna transition-all duration-200 group-hover:w-full" />
              </button>
            </li>
          ))}
          <li>
            <a
              href="https://linkedin.com/in/ashutosh-nagaria/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 bg-accent-sienna text-white rounded-sm hover:bg-accent-sienna/90 transition-colors duration-200"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-[1.5px] bg-deep-charcoal transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`w-5 h-[1.5px] bg-deep-charcoal transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#FAFAF8]/98 backdrop-blur-md border-t border-[#E8E6E1]">
          <ul className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-base font-medium text-deep-charcoal/70 hover:text-deep-charcoal transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://linkedin.com/in/ashutosh-nagaria/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium px-5 py-2.5 bg-accent-sienna text-white rounded-sm"
              >
                View LinkedIn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
