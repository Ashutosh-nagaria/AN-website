/*
 * Footer — Editorial Monolith Design
 * Minimal footer with copyright and quick links.
 */
import { ArrowUp } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-deep-charcoal border-t border-white/5">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo size={20} />
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Ashutosh Nagaria. Built with intention.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-sm hover:border-accent-sienna hover:bg-accent-sienna/10 transition-all duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-3.5 h-3.5 text-white/40" />
        </button>
      </div>
    </footer>
  );
}
