import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 95, color: "blue" },
        { name: "JavaScript", level: 90, color: "yellow" },
        { name: "TypeScript", level: 85, color: "blue" },
        { name: "HTML/CSS", level: 95, color: "orange" },
        { name: "Tailwind CSS", level: 90, color: "cyan" },
        { name: "Next.js", level: 88, color: "purple" },
      ],
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 88, color: "green" },
        { name: "Java", level: 90, color: "orange" },
        { name: "Express.js", level: 90, color: "blue" },
        { name: "MongoDB", level: 82, color: "green" },
        { name: "PostgreSQL", level: 85, color: "blue" },
        { name: "REST APIs", level: 92, color: "purple" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 92, color: "red" },
        { name: "Docker", level: 80, color: "blue" },
        { name: "AWS", level: 75, color: "orange" },
        { name: "Linux", level: 85, color: "yellow" },
        { name: "Figma", level: 88, color: "purple" },
        { name: "VS Code", level: 95, color: "blue" },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 text-blue-600 border-blue-500/30",
      purple: "from-gray-500 to-gray-600 text-gray-600 border-gray-500/30",
      green: "from-green-500 to-green-600 text-green-600 border-green-500/30",
      yellow:
        "from-yellow-400 to-yellow-500 text-yellow-600 border-yellow-400/30",
      orange:
        "from-orange-500 to-orange-600 text-orange-600 border-orange-500/30",
      red: "from-red-500 to-red-600 text-red-600 border-red-500/30",
      cyan: "from-cyan-500 to-cyan-600 text-cyan-600 border-cyan-500/30",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fadeInUp">
            <span className="text-blue-600">Technical Skills</span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white border border-gray-300 rounded-xl p-6 sm:p-8 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 animate-fadeInUp shadow-md"
              style={{ animationDelay: `${0.4 + categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl mr-3 sm:mr-4 hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="skill-item animate-fadeInUp hover:transform hover:translate-x-2 transition-all duration-300"
                    style={{
                      animationDelay: `${
                        0.6 + categoryIndex * 0.2 + skillIndex * 0.1
                      }s`,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm sm:text-base text-gray-700 font-medium hover:text-gray-900 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span
                        className={`text-sm sm:text-base font-bold ${
                          getColorClasses(skill.color).split(" ")[2]
                        } hover:scale-110 transition-transform duration-300`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden hover:h-3 transition-all duration-300">
                      <div
                        className={`h-full bg-gradient-to-r ${
                          getColorClasses(skill.color).split(" ")[0]
                        } ${
                          getColorClasses(skill.color).split(" ")[1]
                        } rounded-full transition-all duration-1000 ease-out relative hover:animate-glow`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${
                            categoryIndex * 0.2 + skillIndex * 0.1
                          }s`,
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Highlights */}
        <div
          className="bg-blue-50 border border-blue-200 rounded-xl p-6 sm:p-8 animate-fadeInUp hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 shadow-md"
          style={{ animationDelay: "1.2s" }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-blue-600 hover:text-blue-700 transition-colors duration-300">
            Professional Highlights
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div
              className="text-center animate-fadeInUp hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "1.4s" }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 hover:animate-pulse">
                10+
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Technologies</p>
            </div>
            <div
              className="text-center animate-fadeInUp hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "1.6s" }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-600 mb-2 hover:animate-pulse">
                3+
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Years Learning</p>
            </div>
            <div
              className="text-center animate-fadeInUp hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "1.8s" }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-gray-700 mb-2 hover:animate-pulse">
                150+
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                LeetCode Problems
              </p>
            </div>
            <div
              className="text-center animate-fadeInUp hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: "2s" }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2 hover:animate-pulse">
                15+
              </div>
              <p className="text-xs sm:text-sm text-gray-600">Projects Built</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
