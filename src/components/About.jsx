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
    <div className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden bg-white">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-gray-50/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-blue-600 hover:text-blue-700 transition-all duration-500">
              About Me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Student developer specializing in React and full-stack web
            development. Building real projects and continuously learning modern
            web technologies.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
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
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                Passionate Student Developer
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                I'm a student developer learning full-stack web development with
                React, Node.js, and MongoDB. I build real-world projects to
                strengthen my skills and understand how modern web applications
                work end-to-end.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                I've built 5 web projects using React, gaining experience with
                responsive design, API integration, and state management. I'm
                committed to writing clean code, learning best practices, and
                staying current with web development trends. I'm eager to grow
                as a developer and contribute to meaningful projects.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                When I'm not coding, you'll find me exploring new programming
                concepts, working on personal projects, or preparing for
                technical interviews. I believe in continuous learning and the
                power of technology to create meaningful solutions.
              </p>
            </div>

            {/* Enhanced quick facts */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-6">
              <div className="group bg-blue-100 rounded-xl p-3 sm:p-4 border border-blue-300 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">
                  3+
                </div>
                <div className="text-xs sm:text-sm text-blue-700">
                  Years Learning
                </div>
              </div>
              <div className="group bg-blue-50 rounded-xl p-3 sm:p-4 border border-gray-300 backdrop-blur-sm hover:border-gray-400 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold text-gray-700">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-gray-700">
                  Projects Built
                </div>
              </div>
              <div className="group bg-gray-100 rounded-xl p-3 sm:p-4 border border-gray-300 backdrop-blur-sm hover:border-gray-400 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold text-gray-700">
                  150+
                </div>
                <div className="text-xs sm:text-sm text-gray-700">
                  LeetCode Problems
                </div>
              </div>
              <div className="group bg-green-100 rounded-xl p-3 sm:p-4 border border-green-300 backdrop-blur-sm hover:border-green-400 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl font-bold text-green-600">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-green-700">
                  Technologies
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced values section */}
          <div className="relative order-1 lg:order-2">
            {/* Enhanced background effects */}
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-500/10 via-blue-500/10 to-gray-500/10 rounded-2xl blur-2xl group-hover:blur-xl transition-all duration-700 animate-pulse"></div>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-400/10 via-blue-400/10 to-gray-400/10 rounded-xl blur-lg transition-all duration-500"></div>

            <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-300 backdrop-blur-sm hover:border-gray-400 transition-all duration-500 group shadow-lg">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
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
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl border border-blue-300 hover:border-blue-400 transition-all duration-300 hover:scale-110">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-2 text-lg">
                        {value.title}
                      </h5>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
