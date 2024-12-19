"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
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

     {/* Main Content with Coding Effect */}
     <main className="relative min-h-screen flex flex-col items-center justify-center bg-[#070F2B] text-[#9290C3] pt-16 md:pt-20 overflow-hidden">
        {/* Coding Rain Effect */}
        <div className="coding-bg absolute top-0 left-0 w-full h-full z-[-1]">
          {Array.from({ length: 50 }).map((_, index) => (
            <span
              key={index}
              className="absolute text-[#9290C3] font-mono text-sm"
              style={{
                left: `${index * 2}vw`,
                animationDelay: `${index * 0.1}s`,
                animationDuration: "5s",
              }}
            >
              101010101010
            </span>
          ))}
        </div>

        {/* Main Text */}
        <motion.h1
          className="text-8xl md:text-9xl font-bold tracking-widest text-center uppercase text-[#FFFFFF]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          VARTIKA SINGH
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl text-[#535C91] tracking-wide text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Developer | Innovator | Problem Solver
        </motion.p>
      </main>
    {/* Visionaries Section */}
<section className="min-h-screen bg-gradient-to-r from-[#1B1A55] to-[#070F2B] text-white flex flex-col md:flex-row items-center justify-between p-8 pt-20">
  {/* Left Section: Text */}
  <div className="flex-1 max-w-lg space-y-4 md:basis-1/2">
    <p className="text-sm uppercase text-[#9290C3] tracking-wide">About Me</p>
    <h1 className="text-4xl md:text-5xl font-bold text-white">Hi, I'm Vartika Singh</h1>
    <p className="text-[#9290C3] text-lg">
      I’m a <strong>Frontend Engineer</strong> and Master's student at Northeastern University, with a passion for building scalable, user-friendly web applications. Experienced in React, Angular, and Zustand, I thrive on creating impactful solutions while exploring design, fitness, and continuous learning.
    </p>
  </div>

  {/* Right Section: Image */}
  <div className="flex-1 max-w-md mt-8 md:mt-0 flex justify-center md:basis-1/2">
    <img
      src="me.jpg"
      alt="About Vartika Singh"
      className="rounded-lg shadow-lg w-full object-cover h-auto"
    />
  </div>
</section>
<footer className="bg-[#070F2B] text-white py-6 px-4">
  <div className="max-w-7xl mx-auto flex justify-center space-x-6">
    {/* GitHub Link */}
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

    {/* LinkedIn Link */}
    <a
      href="https://www.linkedin.com/in/vartika--singh/"
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

    {/* Instagram Link */}
    <a
      href="https://www.instagram.com/vaartiikaa/"
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
          d="M12 0c3.204 0 3.584.012 4.849.07 1.259.058 2.124.265 2.926.568.797.301 1.472.708 2.141 1.377.668.669 1.075 1.344 1.376 2.141.303.802.51 1.667.568 2.926.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.058 1.259-.265 2.124-.568 2.926-.301.797-.708 1.472-1.376 2.141-.669.668-1.344 1.075-2.141 1.376-.802.303-1.667.51-2.926.568-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.058-2.124-.265-2.926-.568-.797-.301-1.472-.708-2.141-1.376-.668-.669-1.075-1.344-1.376-2.141-.303-.802-.51-1.667-.568-2.926-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.058-1.259.265-2.124.568-2.926.301-.797.708-1.472 1.376-2.141.669-.668 1.344-1.075 2.141-1.376.802-.303 1.667-.51 2.926-.568C8.416.012 8.796 0 12 0zm0 5.838c-3.41 0-6.162 2.753-6.162 6.162 0 3.41 2.753 6.162 6.162 6.162 3.41 0 6.162-2.753 6.162-6.162 0-3.41-2.753-6.162-6.162-6.162zm0 10.162c-2.211 0-4-1.789-4-4s1.789-4 4-4 4 1.789 4 4-1.789 4-4 4zm7.406-10.845c-.796 0-1.444.648-1.444 1.444s.648 1.444 1.444 1.444 1.444-.648 1.444-1.444-.648-1.444-1.444-1.444z"
        />
      </svg>
    </a>

    {/* Email Link */}
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

  {/* Bottom Section */}
  <div className="mt-4 text-center text-xs text-[#535C91]">
    © {new Date().getFullYear()} Vartika Singh. All Rights Reserved.
  </div>
</footer>
<style jsx>{`
        @keyframes codingRain {
          0% {
            transform: translateY(-100%);
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .coding-bg span {
          position: absolute;
          top: 0;
          white-space: nowrap;
          animation: codingRain linear infinite;
        }
      `}</style>
    </>
  );
}