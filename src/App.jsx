import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-slate-400 to-gray-500 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      {/* Subtle professional background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 via-slate-800/20 to-gray-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      </div>

      <Navigation />

      <main className="relative z-10">
        <section id="home" className="pt-16">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-16">
          <About />
        </section>

        <section id="skills" className="scroll-mt-16">
          <Skills />
        </section>

        <section id="journey" className="scroll-mt-16">
          <Journey />
        </section>

        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>

      {/* Professional Footer */}
      <footer className="relative z-10 bg-slate-900/90 backdrop-blur-sm border-t border-slate-600/30 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Student Portfolio • Built with React & Tailwind CSS • Open to
            Opportunities
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://linkedin.com"
              className="text-slate-400 hover:text-slate-300 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              className="text-slate-400 hover:text-slate-300 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-slate-400 hover:text-slate-300 transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {scrollProgress > 0.1 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-indigo-600 to-slate-600 hover:from-indigo-700 hover:to-slate-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
