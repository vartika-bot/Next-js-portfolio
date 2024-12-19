"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A weather forecasting app that provides real-time weather updates using OpenWeather API. Features include location-based forecasts and a clean, user-friendly design.",
      image: "/weather.png", // Replace with the actual image path
      link: "https://github.com/vartika-bot/Weather-App",
    },
    {
      title: "Virtual Hospital",
      description:
        "A virtual platform for healthcare services, enabling users to consult doctors, book appointments, and manage health records seamlessly.",
      image: "/virtual-hospital.png", // Replace with the actual image path
      link: "https://github.com/vartika-bot/Virtual-Hospital",
    },
    {
      title: "Portion Tracker",
      description:
        "A food tracking app that helps users monitor portion sizes and maintain a healthy diet by tracking meals and nutrients.",
      image: "/portion-tracker.png", // Replace with the actual image path
      link: "https://github.com/vartika-bot/Portion-Tracker",
    },
    {
      title: "Job Portal",
      description:
        "A job portal application designed to connect job seekers with employers. Features include job listings, applications, and user profiles.",
      image: "/job_portal.png", // Replace with the actual image path
      link: "https://github.com/vartika-bot/Job-Portal-New",
    },

    {
      title: "Mental Health Tracker",
      description:
        "A mental health web app that allows users to log their daily mood, track their mental health progress, and find helpful resources to improve well-being.",
      image: "/mental_health.png", // Replace with the actual image path
      link: "https://github.com/vartika-bot/Mental_Health",
    },
    {
      title: "Boston Travel Guide",
      description:
        "A travel guide for Boston featuring top attractions, restaurants, and activities, providing visitors with curated recommendations for a memorable trip.",
      image: "/boston.png", // Replace with the actual image path
      link: "https://github.com/vartika-bot/Boston_Travel_Guide",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#070F2B] text-white py-4 px-4 md:px-8 flex justify-between items-center shadow-lg z-10">
        {/* Left Section: Logo */}
        <div>
          <a
            href="/"
            className="text-xl md:text-3xl tracking-widest text-center uppercase"
          >
            Vartika Singh
          </a>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="md:flex items-center space-x-6 hidden">
          <a href="/" className="hover:text-[#9290C3] transition">
            Home
          </a>
          <a href="/projects" className="hover:text-[#9290C3] transition">
            Projects
          </a>
          <a href="/contact" className="hover:text-[#9290C3] transition">
            Contact
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white hover:text-[#9290C3] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } bg-[#070F2B] text-white w-full absolute top-[64px] left-0 z-10 py-4 px-4 shadow-lg`}
      >
        <ul className="space-y-4">
          <li>
            <a
              href="/"
              className="hover:text-[#9290C3] transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-[#9290C3] transition"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-[#9290C3] transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>


      {/* Main Content */}
      <main className="min-h-screen bg-gradient-to-r from-[#1B1A55] to-[#070F2B] text-white p-8 pt-20">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-[#9290C3]">
            A showcase of my work, blending design and engineering to create impactful solutions.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#070F2B] rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Details */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-sm text-[#9290C3] mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#535C91] hover:text-[#9290C3] transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#070F2B] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-center space-x-6">
          <a
            href="https://github.com/vartika-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#535C91] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577v-2.238c-3.337.725-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.756-1.332-1.756-1.088-.744.082-.729.082-.729 1.204.082 1.838 1.236 1.838 1.236 1.07 1.836 2.805 1.306 3.49.998.11-.775.418-1.306.76-1.607-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.236-3.22-.125-.303-.536-1.523.116-3.176 0 0 1.01-.323 3.31 1.23a11.41 11.41 0 013.015-.405c1.022.005 2.05.137 3.015.405 2.3-1.554 3.31-1.23 3.31-1.23.652 1.653.24 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.608-2.805 5.624-5.475 5.92.43.37.82 1.1.82 2.217v3.293c0 .32.22.694.825.576C20.565 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"
              />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#535C91] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                d="M20.452 20.452h-3.686v-5.848c0-1.392-.026-3.18-1.94-3.18-1.942 0-2.24 1.515-2.24 3.078v5.95h-3.685V9h3.537v1.561h.05c.491-.931 1.696-1.914 3.49-1.914 3.734 0 4.42 2.457 4.42 5.648v6.157zM5.337 7.433c-1.183 0-2.141-.96-2.141-2.14 0-1.18.958-2.141 2.141-2.141s2.141.96 2.141 2.141c0 1.18-.96 2.14-2.141 2.14zm1.847 13.019H3.49V9h3.694v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.225.793 24 1.772 24h20.451C23.207 24 24 23.225 24 22.273V1.727C24 .774 23.207 0 22.225 0z"
              />
            </svg>
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-[#535C91] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                d="M12 12.713L.015 4.014v-.01h23.97v.01L12 12.713zm11.985-10.16H0v14.89h24V2.553zM11.446 13.8l-11.43 8.202 3.818-7.197 7.612-4.523z"
              />
            </svg>
          </a>
        </div>
        <div className="mt-4 text-center text-xs text-[#535C91]">
          © {new Date().getFullYear()} Vartika Singh. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}