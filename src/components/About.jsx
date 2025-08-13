import React, { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: "💡",
      title: "Continuous Learning",
      description:
        "Always exploring new technologies and programming concepts to expand my skillset.",
    },
    {
      icon: "🎯",
      title: "Problem Solving",
      description:
        "Love tackling challenging algorithms and building solutions through clean, efficient code.",
    },
    {
      icon: "🤝",
      title: "Growth Mindset",
      description:
        "Embracing challenges, learning from feedback, and constantly improving my craft.",
    },
    {
      icon: "📈",
      title: "Practice & Projects",
      description:
        "Building real projects and solving coding challenges to strengthen my programming foundation.",
    },
  ];

  return (
    <div className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-indigo-950/20 to-slate-900/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(71,85,105,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(100,116,139,0.1),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-slate-300 to-gray-400 bg-clip-text text-transparent hover:from-indigo-300 hover:via-slate-200 hover:to-gray-300 transition-all duration-500">
              About Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate programming student with a love for creating digital
            experiences and solving problems through code
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-slate-500 to-gray-500 rounded-full"></div>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left side - Text content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Learning, Building, Growing Every Day
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I'm a passionate programming student currently learning modern
                web development and software engineering. My journey started
                with Java fundamentals and has grown into a deep love for
                building interactive web applications and solving algorithmic
                challenges.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                I've solved 150+ LeetCode problems in Java and built 15+ web
                projects using React. I'm always excited to learn new
                technologies and tackle challenging problems that help me grow
                as a developer.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                When I'm not coding, you'll find me exploring new programming
                concepts, working on personal projects, or preparing for
                technical interviews. I believe in continuous learning and the
                power of technology to create meaningful solutions.
              </p>
            </div>

            {/* Enhanced quick facts */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6">
              <div className="group bg-gradient-to-br from-indigo-500/10 to-indigo-600/10 rounded-xl p-3 sm:p-4 border border-indigo-500/20 backdrop-blur-sm hover:border-indigo-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text group-hover:from-indigo-300 group-hover:to-indigo-200 transition-all duration-300">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Years Learning
                </div>
              </div>
              <div className="group bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-xl p-3 sm:p-4 border border-slate-500/20 backdrop-blur-sm hover:border-slate-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text group-hover:from-slate-300 group-hover:to-slate-200 transition-all duration-300">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Projects Built
                </div>
              </div>
              <div className="group bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-xl p-3 sm:p-4 border border-gray-500/20 backdrop-blur-sm hover:border-gray-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text group-hover:from-gray-300 group-hover:to-gray-200 transition-all duration-300">
                  150+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  LeetCode Problems
                </div>
              </div>
              <div className="group bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-xl p-3 sm:p-4 border border-emerald-500/20 backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text group-hover:from-emerald-300 group-hover:to-emerald-200 transition-all duration-300">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  Technologies
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced values section */}
          <div className="relative order-1 lg:order-2">
            {/* Enhanced background effects */}
            <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500/10 via-slate-500/10 to-gray-500/10 rounded-2xl blur-2xl group-hover:blur-xl transition-all duration-700 animate-pulse"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-indigo-400/20 via-slate-400/20 to-gray-400/20 rounded-xl blur-lg transition-all duration-500"></div>

            <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-2xl p-6 sm:p-8 border border-indigo-500/20 backdrop-blur-sm hover:border-indigo-400/30 transition-all duration-500 group">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left">
                What Drives Me
              </h4>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-700 hover:scale-105 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${600 + index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-indigo-500/20 via-slate-500/20 to-gray-500/20 rounded-xl flex items-center justify-center text-2xl border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 hover:scale-110">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-white mb-2 text-lg">
                        {value.title}
                      </h5>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-indigo-500/20 to-slate-500/20 rounded-full blur-xl animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-slate-500/20 to-gray-500/20 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Enhanced Professional Philosophy */}
        <div
          className={`relative group transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background effects */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-slate-500/20 to-gray-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>

          <div className="relative bg-gradient-to-r from-slate-800/70 via-indigo-900/30 to-slate-800/70 rounded-2xl p-6 sm:p-8 lg:p-10 border border-indigo-500/20 backdrop-blur-sm group-hover:border-indigo-400/30 transition-all duration-500">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                My Professional Philosophy
              </h3>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                "Great software is not just about writing code—it's about
                understanding problems, crafting elegant solutions, and creating
                experiences that delight users. Every project is an opportunity
                to make something better than it was before."
              </p>
              <div className="mt-6 sm:mt-8 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 via-slate-400 to-gray-400 rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>

              {/* Call to action */}
              <div className="mt-6 sm:mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-slate-600 hover:from-indigo-700 hover:to-slate-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 group"
                >
                  <span className="mr-2">Let's Work Together</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
