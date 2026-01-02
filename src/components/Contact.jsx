import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "nayanstudent@example.com",
      link: "mailto:nayanstudent@example.com",
    },
    {
      icon: "🎓",
      title: "Status",
      value: "Programming Student",
      link: null,
    },
    {
      icon: "📍",
      title: "Location",
      value: "Available for Remote",
      link: null,
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/nayan",
      link: "https://linkedin.com/in/nayan",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "🔗",
      url: "https://github.com",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com",
      color: "hover:text-blue-300",
    },
    {
      name: "Email",
      icon: "📧",
      url: "mailto:contact@example.com",
      color: "hover:text-green-400",
    },
  ];

  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-blue-600">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in collaborating on a project or have internship
            opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-green-400 mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-400">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl border border-blue-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Connect With Me
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center space-x-3 p-3 bg-slate-900/50 rounded-lg hover:bg-slate-700/50 text-gray-400 ${social.color} transition-all duration-300 hover:scale-105`}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-blue-100 border border-blue-300 rounded-xl p-6 shadow-md">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
                <span className="text-indigo-400 font-semibold">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-gray-700 text-sm">
                Currently seeking internships and entry-level positions.
                Response time: Usually within 24 hours.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200 shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Connect?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you have an internship opportunity, project collaboration,
              or just want to connect, I'm always excited to hear from fellow
              developers and potential mentors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:nayanstudent@example.com"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                Email Me Directly
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
