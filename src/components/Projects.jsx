import React, { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.",
      longDescription:
        "A comprehensive e-commerce platform built for a client serving 10k+ customers. Features include secure payment processing, inventory management, order tracking, and detailed analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "fullstack",
      image: "🛒",
      status: "Live",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      metrics: {
        users: "10k+",
        performance: "95%",
        uptime: "99.9%",
      },
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team communication features.",
      longDescription:
        "A modern task management application that helps teams stay organized and productive. Features include real-time collaboration, file sharing, time tracking, and project analytics.",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      category: "frontend",
      image: "📋",
      status: "Live",
      github: "https://github.com",
      live: "https://demo.com",
      featured: true,
      metrics: {
        users: "5k+",
        performance: "98%",
        satisfaction: "4.8/5",
      },
    },
    {
      id: 3,
      title: "Weather Analytics API",
      description:
        "RESTful API providing weather data analysis and forecasting with machine learning predictions.",
      longDescription:
        "A robust weather analytics API that processes meteorological data and provides accurate forecasts using machine learning algorithms. Serves data to multiple client applications.",
      tech: ["Python", "FastAPI", "TensorFlow", "PostgreSQL", "Docker"],
      category: "backend",
      image: "🌤️",
      status: "Live",
      github: "https://github.com",
      live: "https://api-demo.com",
      featured: false,
      metrics: {
        requests: "1M+/month",
        accuracy: "92%",
        latency: "<100ms",
      },
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Responsive portfolio website with modern animations and optimized performance.",
      longDescription:
        "A sleek, modern portfolio website showcasing professional work with smooth animations, optimized images, and excellent performance scores. Built with accessibility and SEO in mind.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      category: "frontend",
      image: "💼",
      status: "Live",
      github: "https://github.com",
      live: "https://portfolio.com",
      featured: false,
      metrics: {
        performance: "100%",
        accessibility: "100%",
        seo: "95%",
      },
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description:
        "Secure messaging platform with end-to-end encryption and file sharing capabilities.",
      longDescription:
        "A secure real-time messaging application with end-to-end encryption, file sharing, group chats, and user presence indicators. Built for privacy and performance.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      category: "fullstack",
      image: "💬",
      status: "Development",
      github: "https://github.com",
      live: null,
      featured: false,
      metrics: {
        concurrent: "1k+ users",
        latency: "<50ms",
        security: "A+ rating",
      },
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description:
        "Interactive dashboard for complex data analysis with custom charts and reporting.",
      longDescription:
        "An advanced data visualization platform that transforms complex datasets into interactive charts and reports. Features custom chart types, real-time updates, and export capabilities.",
      tech: ["D3.js", "React", "Python", "Pandas", "Redis"],
      category: "frontend",
      image: "📊",
      status: "Live",
      github: "https://github.com",
      live: "https://dashboard.com",
      featured: true,
      metrics: {
        datasets: "100k+",
        charts: "50+ types",
        export: "PDF/Excel",
      },
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I love to build
            with
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-slate-800/50 text-gray-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 flex items-center justify-center text-6xl">
                {project.image}
              </div>

              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-slate-900/50 rounded-lg">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-white">
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center py-2 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex-1 flex items-center justify-center py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Project Icon */}
                <div className="h-32 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-3xl">
                  {project.image}
                </div>

                <div className="p-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-gray-400 text-xs">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="flex-1 text-center py-2 px-3 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded transition-colors duration-300"
                    >
                      GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex-1 text-center py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors duration-300"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-800/50 via-blue-900/20 to-slate-800/50 rounded-xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create innovative
              solutions. Let's discuss how we can bring your ideas to life.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
