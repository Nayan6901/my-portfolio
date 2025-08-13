import React, { useState, useEffect } from "react";

const Journey = () => {
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

    const experienceSection = document.querySelector("#journey");
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  const journey = [
    {
      id: 1,
      title: "Programming Foundation",
      period: "2022 - First Steps",
      type: "Learning Phase",
      description:
        "Started my programming journey with Java and fundamental concepts. Discovered the beauty of problem-solving through code and began building my logical thinking skills with data structures and algorithms.",
      achievements: [
        "Learned Java programming from scratch",
        "Mastered fundamental programming concepts",
        "Started solving basic coding problems",
        "Built first console applications in Java",
      ],
      technologies: [
        "Java",
        "OOP Concepts",
        "Data Structures",
        "Basic Algorithms",
        "Problem Solving",
        "Git",
      ],
      icon: "☕",
      color: "blue",
    },
    {
      id: 2,
      title: "Web Development & LeetCode Journey",
      period: "2023 - Dual Focus",
      type: "Skill Expansion",
      description:
        "Expanded into web development while continuing to strengthen my algorithmic skills. Started building web applications with modern technologies and consistently practiced coding challenges to improve problem-solving abilities.",
      achievements: [
        "Learned HTML, CSS, JavaScript, and React",
        "Solved 150+ LeetCode problems in Java",
        "Built 15+ responsive web applications",
        "Mastered modern web development frameworks",
      ],
      technologies: [
        "React",
        "JavaScript ES6+",
        "HTML5 & CSS3",
        "Java",
        "LeetCode",
        "Tailwind CSS",
        "Responsive Design",
        "Problem Solving",
      ],
      icon: "�",
      color: "purple",
    },
    {
      id: 3,
      title: "Full-Stack Learning Journey",
      period: "2024 - Present",
      type: "Advanced Learning",
      description:
        "Currently expanding into full-stack development with strong algorithmic foundation. Building complete web applications while maintaining competitive programming skills. Actively learning and preparing for my future career in software development.",
      achievements: [
        "Learning full-stack development with MERN stack",
        "Continuing LeetCode practice for skill improvement",
        "Creating portfolio projects to showcase abilities",
        "Preparing for internships and entry-level positions",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Java",
        "LeetCode",
        "Full-Stack Learning",
        "Cloud Deployment",
      ],
      icon: "�",
      color: "green",
    },
  ];

  const education = [
    {
      degree: "Student - Self-Taught Programming",
      school: "Online Learning & Practice",
      period: "2022 - Present",
      gpa: "150+ LeetCode",
      specialization: "Java & Web Development",
      icon: "☕",
      color: "blue",
    },
    {
      degree: "Student - Full-Stack Web Development",
      school: "Project-Based Learning",
      period: "2023 - Present",
      gpa: "15+ Projects",
      specialization: "React & MERN Stack",
      icon: "💻",
      color: "purple",
    },
  ];
  const getColorClasses = (color) => {
    const colors = {
      blue: "border-indigo-500/30 text-indigo-400",
      purple: "border-slate-500/30 text-slate-400",
      green: "border-gray-500/30 text-gray-400",
      orange: "border-indigo-500/30 text-indigo-400",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div id="journey" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-slate-300 to-gray-400 bg-clip-text text-transparent">
              My Learning Journey
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Student journey from programming fundamentals to full-stack
            development - learning, building, and growing in code
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-slate-500 to-gray-500"></div>

          {/* Journey Items */}
          <div className="space-y-12">
            {journey.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-slate-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div
                    className={`bg-slate-800/50 backdrop-blur-sm border ${getColorClasses(
                      item.color
                    )} rounded-xl p-6 hover:border-opacity-70 transition-all duration-300 hover:transform hover:scale-105`}
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <h3 className="text-xl font-bold text-white">
                            {item.title}
                          </h3>
                        </div>
                        <span
                          className={`px-3 py-1 ${getColorClasses(
                            item.color
                          )} border rounded-full text-xs font-medium`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm ml-11">
                        {item.period}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-emerald-400 font-semibold mb-2">
                        Key Milestones:
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-gray-400 text-sm flex items-start"
                          >
                            <span className="text-emerald-400 mr-2 mt-1">
                              •
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-indigo-400 font-semibold mb-2">
                        Skills Learned:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs rounded-full hover:bg-indigo-500/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-indigo-400 via-slate-300 to-gray-400 bg-clip-text text-transparent">
              Education & Learning Path
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`bg-slate-800/50 backdrop-blur-sm border ${getColorClasses(
                  edu.color
                )} rounded-xl p-6 hover:border-opacity-70 transition-all duration-300 hover:transform hover:scale-105`}
              >
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{edu.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p
                      className={`font-semibold ${getColorClasses(edu.color)}`}
                    >
                      {edu.school}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-gray-400">{edu.period}</p>
                      <p className="text-blue-400 font-semibold">{edu.gpa}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">
                  Focus:{" "}
                  <span className="text-purple-400">{edu.specialization}</span>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Goals Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-500/10 via-slate-500/10 to-gray-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-indigo-400">🎯</span> My Aspirations
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              As a passionate programming student, my goal is to land an
              internship or entry-level software developer position where I can
              apply my web development skills and algorithmic problem-solving
              abilities. I'm actively learning, building projects, and preparing
              for technical interviews while staying updated with the latest
              technologies.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 rounded-full">
                🎓 Student Developer
              </span>
              <span className="px-4 py-2 bg-slate-500/20 border border-slate-500/40 text-slate-300 rounded-full">
                💼 Seeking Internships
              </span>
              <span className="px-4 py-2 bg-gray-500/20 border border-gray-500/40 text-gray-300 rounded-full">
                🚀 Java + React
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
