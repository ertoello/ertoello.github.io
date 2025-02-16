import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const listNavbar = [
    { name: "Beranda", link: "#beranda" },
    { name: "Keahlian Utama", link: "#keahlian" },
    { name: "Pengalaman Profesional", link: "#pengalaman" },
    { name: "Sertifikasi & Lisensi", link: "#sertifikat" },
    { name: "Proyek-Proyek", link: "#proyek" },
  ];

  const socialMedia = [
    {
      icon: <FaGithub />,
      link: "https://github.com/ertoello",
      color: "hover:text-[#EF8B8B]",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/ertoello/",
      color: "hover:text-[#EF8B8B]",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/yohanes-elo/",
      color: "hover:text-[#EF8B8B]",
    },
    {
      icon: <FaWhatsapp />,
      link: "https://wa.me/62881010930936",
      color: "hover:text-[#EF8B8B]",
    },
  ];

  return (
    <footer className="bg-[#3FA3CE] text-[#FFFFFF] py-14">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Tentang */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#EF8B8B]">
            Tentang Saya
          </h3>
          <p className="text-[#D7D7D7] leading-relaxed">
            Yohanes Serpiyanto Elo, Full Stack Developer dengan hasrat untuk
            menciptakan solusi digital yang inovatif dan efektif.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#EF8B8B]">Navigasi</h3>
          <ul className="space-y-3">
            {listNavbar.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-[#D7D7D7] hover:text-[#FFFFFF] transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#EF8B8B]">Kontak</h3>
          <ul className="space-y-3 text-[#D7D7D7]">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-[#E6E6FA]" />
              <a
                href="mailto:ertoello28ubsi@gmail.com"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                ertoello28ubsi@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-[#E6E6FA]" />
              <a
                href="https://wa.me/your-number"
                className="hover:text-[#FFFFFF] transition duration-300"
              >
                +62 881 0109 30936
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-[#E6E6FA]" />
              <span>Rawalumbu, Kota Bekasi, Jawa Barat, Indonesia</span>
            </li>
          </ul>
        </div>

        {/* Media Sosial */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-[#EF8B8B]">Ikuti Saya</h3>
          <div className="flex space-x-6 text-4xl">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition duration-300 transform hover:scale-110 ${item.color}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-[#D7D7D7] opacity-20"></div>
      <div className="text-center mt-6 text-[#D7D7D7]">
        <p className="text-sm">
          © 2025 Yohanes Serpiyanto Elo | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
