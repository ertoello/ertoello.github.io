import React, { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50); // Navbar muncul setelah scroll 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const listNavbar = [
    { name: "Home", link: "#home" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Sertifikat", link: "#sertifikat" },
    { name: "Projects", link: "#projects" },
  ];

  return (
    <header
      className={`fixed w-full z-50 py-4 transition-all duration-300 ${
        hasScrolled
          ? "bg-gradient-to-r from-[#3FA3CE] to-[#EF8B8B] shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between px-8">
        {/* Branding */}
        <div className="flex items-center">
          <FaUserAlt className="text-white text-4xl mr-3 hover:text-yellow-300 transition-all duration-300" />
          <span className="text-4xl font-extrabold text-white tracking-widest uppercase hover:scale-105 transition-transform">
            Portfolio
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative text-white text-lg font-semibold hover:text-white transition-transform duration-300 transform hover:scale-110 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EF8B8B] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <a
          href="#contact"
          className="bg-white text-[#3FA3CE] px-8 py-3 text-lg font-semibold rounded-full hover:bg-yellow-300 hover:text-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
