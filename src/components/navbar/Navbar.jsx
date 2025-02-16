import React, { useState, useEffect } from "react";
import {
  FaUserAlt,
  FaHome,
  FaGraduationCap,
  FaCode,
  FaBriefcase,
  FaCertificate,
  FaProjectDiagram,
} from "react-icons/fa";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const listNavbar = [
    { name: "Beranda", link: "#beranda", icon: <FaHome /> },
    { name: "Pendidikan", link: "#pendidikan", icon: <FaGraduationCap /> },
    { name: "Keahlian", link: "#keahlian", icon: <FaCode /> },
    { name: "Pengalaman", link: "#pengalaman", icon: <FaBriefcase /> },
    { name: "Sertifikasi", link: "#sertifikat", icon: <FaCertificate /> },
    { name: "Projek", link: "#proyek", icon: <FaProjectDiagram /> },
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
          <FaUserAlt className="text-[#FFFFFF] text-4xl mr-3 hover:text-[#EF8B8B] transition-all duration-300" />
          <span className="text-3xl font-extrabold text-[#FFFFFF] tracking-widest uppercase hover:scale-105 transition-transform">
            Profilku
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 me-2">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="relative flex items-center space-x-2 text-[#FFFFFF] text-lg font-semibold hover:text-[#EF8B8B] transition-transform duration-300 transform hover:scale-110 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#EF8B8B] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
