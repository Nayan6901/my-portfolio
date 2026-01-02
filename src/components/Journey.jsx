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
        "Started my programming journey with Java and fundamental concepts. Built console applications and developed strong programming fundamentals.",
      achievements: [
        "Learned Java programming from scratch",
        "Mastered fundamental programming concepts",
        "Built first console applications in Java",
        "Developed problem-solving skills through coding",
      ],
      technologies: [
        "Java",
        "OOP Concepts",
        "Variables & Control Flow",
        "File Handling",
        "Basic Projects",
        "Git",
      ],
      icon: "☕",
      color: "blue",
      metrics: {
        main: "Java Foundation",
        secondary: "OOP Mastered",
      },
    },
    {
      id: 2,
      title: "Web Development Focus",
      period: "2023 - Building Phase",
      type: "Skill Expansion",
      description:
        "Transitioned into modern web development with a focus on creating responsive and interactive web applications using React and contemporary web technologies.",
      achievements: [
        "Learned HTML, CSS, JavaScript, and React",
        "Built 5 responsive web applications",
        "Mastered modern web development frameworks",
        "Created professional portfolio projects",
      ],
      technologies: [
        "React",
        "JavaScript ES6+",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Responsive Design",
        "Web Performance",
      ],
      icon: "💻",
      color: "purple",
      metrics: {
        main: "5 Projects Built",
        secondary: "React Expert",
      },
    },
    {
      id: 3,
      title: "Full-Stack Developer Journey",
      period: "2024 - Present",
      type: "Advanced Learning",
      description:
        "Currently building complete end-to-end web applications with a full-stack approach. Learning backend technologies to complement my frontend expertise.",
      achievements: [
        "Learning full-stack development with MERN stack",
        "Building complete web applications",
        "Creating portfolio projects to showcase abilities",
        "Preparing for software developer positions",
      ],
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Backend Development",
        "Database Design",
      ],
      icon: "🚀",
      color: "green",
      metrics: {
        main: "Full-Stack Ready",
        secondary: "Production Apps",
      },
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
      blue: "border-blue-300 text-blue-600",
      purple: "border-gray-300 text-gray-600",
      green: "border-green-300 text-green-600",
      orange: "border-orange-300 text-orange-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div id="journey" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-blue-600">My Learning Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Student journey from programming fundamentals to full-stack
            development - learning, building, and growing in code
          </p>
        </div>

        {/* Achievement-Focused Progression */}
        <div className="space-y-6 mb-20">
          {/* Timeline Visualization */}
          <div className="flex justify-between items-start md:items-center relative mb-12">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-green-600 z-0"></div>

            {/* Year Markers */}
            {journey.map((item, index) => (
              <div
                key={item.id}
                className="relative z-10 flex flex-col items-center w-full md:w-auto"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-2 border-4 border-white shadow-lg">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <p className="text-sm font-bold text-gray-900">
                  {item.period.split(" - ")[0]}
                </p>
              </div>
            ))}
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {journey.map((item, index) => {
              const achievements = [
                item.id === 1
                  ? "150+ LeetCode"
                  : item.id === 2
                  ? "150+ LeetCode"
                  : "MERN Stack",
                item.id === 1
                  ? "OOP Mastery"
                  : item.id === 2
                  ? "15+ Projects"
                  : "Internship Ready",
              ];
              return (
                <div
                  key={item.id}
                  className="group relative bg-white rounded-2xl border-2 border-gray-300 p-8 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:scale-105"
                >
                  {/* Year Header */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-blue-600 mb-2">
                      {item.period.split(" - ")[0]}
                    </h3>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.type}</p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-1 bg-blue-600 rounded-full mb-6"></div>

                  {/* Key Numbers/Achievements - PROMINENT */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-black text-blue-600 mb-4">
                      📊 Key Metrics
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">
                          {item.metrics?.main || "Achievement"}
                        </span>
                        <span className="text-2xl font-black text-blue-600">
                          ✓
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-semibold">
                          {item.metrics?.secondary || "Skills"}
                        </span>
                        <span className="text-2xl font-black text-blue-600">
                          ✓
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Core Skills */}
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-widest font-black text-gray-700 mb-3">
                      💻 Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 border border-blue-300 text-blue-700 text-xs font-semibold rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What You'll Learn */}
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-black text-gray-700 mb-3">
                      🎯 Highlights
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.slice(0, 3).map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 flex items-start"
                        >
                          <span className="text-blue-600 mr-2 font-bold">
                            →
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Status Badge */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-xs font-black tracking-wide ${
                        item.id === 3
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {item.id === 3 ? "🚀 ACTIVE NOW" : "✓ COMPLETED"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-blue-600">Education & Learning Path</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`bg-white border ${getColorClasses(
                  edu.color
                )} rounded-xl p-6 hover:border-opacity-70 transition-all duration-300 hover:transform hover:scale-105 shadow-md`}
              >
                <div className="flex items-start mb-4">
                  <span className="text-3xl mr-4">{edu.icon}</span>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p
                      className={`font-semibold ${getColorClasses(edu.color)}`}
                    >
                      {edu.school}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-gray-600">{edu.period}</p>
                      <p className="text-blue-600 font-semibold">{edu.gpa}</p>
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
      </div>
    </div>
  );
};

export default Journey;
