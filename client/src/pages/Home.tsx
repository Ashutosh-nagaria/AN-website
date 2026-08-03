/*
 * Home Page — Ashutosh Nagaria Portfolio
 * Editorial Monolith Design
 * Composes all sections: Hero, About, Experience, Projects, Skills, Achievements, Contact.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-deep-charcoal">
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="section-divider mx-8 md:mx-16" />
        <Experience />
        <div className="section-divider mx-8 md:mx-16" />
        <Projects />
        <div className="section-divider mx-8 md:mx-16" />
        <Skills />
        <div className="section-divider mx-8 md:mx-16" />
        <Achievements />
        <div className="section-divider mx-8 md:mx-16" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
