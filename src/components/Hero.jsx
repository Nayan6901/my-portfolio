import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "React Developer",
    "Web Builder",
    "JavaScript Enthusiast",
  ];

  useEffect(() => {
    const currentText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && displayedText === currentText) {
      // Pause at end of word
      setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      // Type or delete character
      setTimeout(() => {
        if (isDeleting) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        }
      }, typingSpeed);
    }
  }, [displayedText, isDeleting, currentRole, roles]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-gray-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400/15 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gray-300/10 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>{" "}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative z-10">
        {/* Left side - Enhanced text content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10 text-center lg:text-left order-2 lg:order-1">
          {/* Greeting badge */}
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-xs sm:text-sm text-blue-700 backdrop-blur-sm animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
              <span className="text-gray-900">Hi, I'm </span>
              <span className="text-blue-600 hover:text-blue-700 transition-all duration-500">
                Nayan
              </span>
            </h1>
            <div className="h-12 sm:h-14 lg:h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light">
                <span className="text-blue-600 font-medium">
                  {displayedText}
                  <span className="animate-pulse text-gray-400">|</span>
                </span>
              </h2>
            </div>{" "}
            <p
              className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 animate-fade-in-up px-2 sm:px-0"
              style={{ animationDelay: "0.3s" }}
            >
              Passionate student developer building responsive web applications
              with React, Node.js, and MongoDB. I create clean, modern solutions
              and continuously learn new technologies to grow as a developer.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up px-2 sm:px-0"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
              </span>
              <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>

            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 rounded-xl font-semibold text-blue-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm sm:text-base"
            >
              <span className="flex items-center">
                Get In Touch
                <svg
                  className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Enhanced quick stats */}
          <div
            className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-gray-200 animate-fade-in-up mx-2 sm:mx-0"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-all duration-300">
                3+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">
                Years Learning
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-all duration-300">
                15+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">
                Projects Built
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-all duration-300">
                150+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">
                LeetCode Solved
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Enhanced modern avatar section */}
        <div
          className="relative flex justify-center lg:justify-end animate-fade-in-up order-1 lg:order-2 mb-8 lg:mb-0 mt-8 sm:mt-12 lg:mt-0"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="relative group">
            {/* Enhanced background effects */}
            <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-blue-500/10 via-blue-500/10 to-gray-500/10 rounded-full blur-2xl sm:blur-3xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-700 animate-pulse"></div>
            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-blue-400/10 via-blue-400/10 to-gray-400/10 rounded-full blur-lg sm:blur-xl group-hover:-inset-4 sm:group-hover:-inset-6 transition-all duration-500"></div>

            {/* Main avatar container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-full p-0.5 group-hover:animate-spin-slow">
                <div className="w-full h-full bg-white rounded-full"></div>
              </div>

              {/* Inner avatar */}
              <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-blue-100 via-blue-50 to-gray-100 rounded-full border border-blue-300/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                {/* Avatar image */}
                <img
                  src="/nayan.jpeg"
                  alt="Nayan"
                  className="w-full h-full rounded-full object-cover shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500"
                />
              </div>

              {/* Floating skill indicators */}
              <div className="absolute -top-1 sm:-top-2 right-4 sm:right-8 bg-blue-600 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium backdrop-blur-sm animate-float shadow-xl border border-blue-400/50">
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                  <span className="hidden sm:inline">React Expert</span>
                  <span className="sm:hidden">React</span>
                </span>
              </div>

              <div
                className="absolute top-1/2 -left-4 sm:-left-8 bg-gray-600 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium backdrop-blur-sm animate-float shadow-xl border border-gray-400/50"
                style={{ animationDelay: "1s" }}
              >
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                  <span className="hidden sm:inline">Full Stack</span>
                  <span className="sm:hidden">Stack</span>
                </span>
              </div>

              <div
                className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 px-2 sm:px-4 py-1 sm:py-2 rounded-full text-white text-xs sm:text-sm font-medium backdrop-blur-sm animate-float shadow-xl border border-gray-400/50"
                style={{ animationDelay: "2s" }}
              >
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mr-1 sm:mr-2 animate-pulse"></span>
                  <span className="hidden sm:inline">UI/UX Focus</span>
                  <span className="sm:hidden">UI/UX</span>
                </span>
              </div>
            </div>

            {/* Decorative floating elements */}
            <div className="absolute top-8 sm:top-12 right-8 sm:right-12 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/20 rounded rotate-45 animate-spin-slow"></div>
            <div className="absolute bottom-12 sm:bottom-16 left-8 sm:left-12 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400/30 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-4 sm:right-8 w-1.5 h-4 sm:w-2 sm:h-6 bg-gray-300/30 rounded-full animate-pulse"></div>
            <div className="absolute top-16 sm:top-20 left-12 sm:left-16 w-1 h-1 bg-gray-400/50 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className="flex flex-col items-center space-y-1 sm:space-y-2 text-gray-600 hover:text-blue-600 transition-all duration-300 cursor-pointer group"
          onClick={() => {
            const nextSection =
              document.querySelector("#about") ||
              document.querySelector("section:nth-of-type(2)");
            if (nextSection) {
              nextSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          <span className="text-xs sm:text-sm font-medium opacity-75 group-hover:opacity-100 transition-opacity">
            Scroll to explore
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-current rounded-full flex justify-center relative overflow-hidden group-hover:border-blue-600 transition-colors">
            <div className="w-1 h-2 sm:h-3 bg-current rounded-full mt-1 sm:mt-2 animate-pulse group-hover:animate-bounce transition-all"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform duration-300 group-hover:text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
