import React from "react";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaGithub,
} from "react-icons/fa";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import php from "../../assets/php.png";
import webdesign from "../../assets/web-design.png";
import laravel from "../../assets/laravel.png";
import react from "../../assets/react.png";
import mysql from "../../assets/mysql.png";
import bootstrap from "../../assets/bootstrap.jpg";
import codeigniter from "../../assets/codeigniter.png";
import github from "../../assets/github.png";
import figma from "../../assets/figma.png";
import mongodb from "../../assets/mongodb.png";
import python from "../../assets/python.png";

export default function Skills() {
  const skills = [
    { img: javascript, name: "JavaScript" },
    { img: html, name: "HTML & CSS" },
    { img: php, name: "PHP" },
    { img: webdesign, name: "Web Design" },
    { img: laravel, name: "Laravel" },
    { img: react, name: "React.js" },
    { img: bootstrap, name: "Bootstrap" },
    { img: mysql, name: "MySQL" },
    { img: codeigniter, name: "CodeIgniter" },
    { img: github, name: "Github" },
    { img: figma, name: "Figma" },
    { img: mongodb, name: "MongoDB" },
    { img: python, name: "Python" },
  ];

  return (
    <section
      id="keahlian"
      className="relative flex flex-col md:flex-row items-center text-white py-20 px-5 md:px-20 overflow-hidden"
    >
      {/* Left Content - Keahlian Utama */}
      <div
        data-aos="fade-right"
        className="md:w-1/2 text-left md:pr-12 border-b md:border-b-0 md:border-r border-[#3FA3CE] pb-10 md:pb-0"
      >
        <h1 className="text-5xl font-extrabold text-left mb-12 tracking-widest text-[#3FA3CE] flex items-center space-x-4">
          <FaTools className="text-[#3FA3CE] text-6xl" />
          <span>Keahlian Utama</span>
        </h1>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <FaCode className="text-[#3FA3CE] text-3xl" />
            <div>
              <h2 className="text-2xl font-semibold">Front-End Development</h2>
              <ul className="list-disc list-inside text-gray-300 text-lg">
                <li>HTML, CSS, JavaScript, React, Bootstrap</li>
                <li>Desain responsif & estetis</li>
                <li>UI/UX Design menggunakan Figma</li>
                <li>Pengembangan aplikasi web interaktif dan dinamis</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaServer className="text-[#3FA3CE] text-3xl" />
            <div>
              <h2 className="text-2xl font-semibold">Back-End Development</h2>
              <ul className="list-disc list-inside text-gray-300 text-md">
                <li>PHP, Laravel, CodeIgniter, Python</li>
                <li>Node.js (Express), RESTful API</li>
                <li>Logika sistem yang andal dan skalabel</li>
                <li>Pengembangan API dan integrasi dengan berbagai layanan</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaDatabase className="text-[#3FA3CE] text-3xl" />
            <div>
              <h2 className="text-2xl font-semibold">Database Management</h2>
              <ul className="list-disc list-inside text-gray-300 text-md">
                <li>MySQL, PostgreSQL, MongoDB</li>
                <li>Pengelolaan data yang efisien dan terstruktur</li>
                <li>Pengoptimalan query untuk performa yang lebih baik</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaGithub className="text-[#3FA3CE] text-3xl" />
            <div>
              <h2 className="text-2xl font-semibold">
                Version Control & Collaboration
              </h2>
              <ul className="list-disc list-inside text-gray-300 text-md">
                <li>GitHub untuk version control dan kolaborasi</li>
                <li>Penggunaan Git untuk tracking perubahan kode</li>
                <li>
                  Pengelolaan proyek open-source dengan pull request & issue
                  tracking
                </li>
                <li>Kolaborasi menggunakan metode Agile (Scrum, Kanban)</li>
                <li>
                  Penggunaan tools manajemen proyek seperti Trello dan Notion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Skills List */}
      <div
        data-aos="fade-left"
        className="md:w-1/2 grid grid-cols-3 gap-6 pt-10 md:pt-0 md:pl-12"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative bg-[#1e293b] bg-opacity-60 hover:bg-opacity-100 transition duration-500 p-2 rounded-xl shadow-2xl text-center backdrop-blur-md border border-gray-700 group flex flex-col items-center justify-center"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-20 h-20 mb-4 transform transition duration-500 group-hover:scale-110"
            />
            <h3 className="text-lg font-semibold text-gray-300">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
