import React, { useEffect, useRef } from "react";
import imgExperience from "../../assets/img_experience.png";
import { motion } from "framer-motion";

export default function Experience() {
  const experienceContainerRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (experienceContainerRef.current) {
        experienceContainerRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  const experiences = [
    {
      title: "IT Full Stack Developer - Rakamin Academy",
      duration: "Sep 2024 - Jan 2025 (5 Bulan)",
      location: "Jakarta Selatan, Jakarta Raya, Indonesia (Jarak Jauh)",
      description: [
        "Mengembangkan aplikasi web berbasis Laravel dan PHP dengan integrasi API.",
        "Menguasai desain UI/UX modern menggunakan Figma.",
        "Melakukan riset pengguna dengan pendekatan User Research & Competitive Analysis.",
        "Menerapkan praktik keamanan aplikasi dan konsep Cloud Computing.",
        "Berpartisipasi dalam proyek simulasi akhir dengan presentasi kepada stakeholder.",
      ],
    },
    {
      title: "Full Stack Developer - PT. Winnicode Garuda Indonesia",
      duration: "Sep 2024 - Jan 2025 (5 Bulan)",
      location: "Bandung, Jawa Barat, Indonesia (Jarak Jauh)",
      description: [
        "Mengimplementasikan arsitektur MVC (Model-View-Controller) untuk memastikan struktur kode yang terorganisir dan efisien.",
        "Mengembangkan dan mengintegrasikan backend menggunakan framework modern dengan frontend responsif.",
        "Merancang antarmuka pengguna yang menarik dengan prinsip estetika dan aksesibilitas.",
        "Menerapkan praktik keamanan terbaik untuk melindungi informasi pengguna.",
        "Menguasai manajemen versi proyek menggunakan Git untuk kolaborasi yang efektif.",
      ],
    },
    {
      title:
        "Koordinator UKM Kerohanian Kristen - Universitas Bina Sarana Informatika",
      duration: "Mar 2023 - Feb 2024 (1 Tahun)",
      location: "Bekasi, Jawa Barat, Indonesia",
      description: [
        "Mengorganisir ibadah mingguan dan event besar seperti Perayaan Natal.",
        "Memfasilitasi kegiatan bakti sosial untuk masyarakat.",
        "Berperan sebagai pembicara dengan topik yang menekankan nilai kasih dan kedamaian.",
        "Meningkatkan keterampilan komunikasi dan pemecahan masalah sebagai pemimpin.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 text-white">
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-widest text-[#3FA3CE]">
          Pengalaman Profesional
        </h2>

        <div
          ref={experienceContainerRef}
          className="flex space-x-10 overflow-x-auto pb-10"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="min-w-[350px] flex-shrink-0 rounded-lg shadow-xl transform transition-all duration-500 ease-in-out hover:scale-105"
            >
              <div className="bg-gradient-to-r from-[#3FA3CE] via-[#EF8B8B] to-[#FFFFFF] p-8 rounded-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105">
                <h3 className="flex items-center justify-center space-x-3 text-2xl font-semibold text-[#FFFFFF] mb-4 p-4 rounded-lg bg-[#3FA3CE] shadow-lg">
                  {/* Ganti icon ini dengan icon yang kamu suka */}
                  <i className="fas fa-briefcase text-white text-3xl"></i>
                  <span>{experience.title}</span>
                </h3>

                <p className="text-md text-[#D7D7D7] mb-2">
                  <strong>{experience.duration}</strong>
                </p>
                <p className="text-md text-[#D7D7D7] mb-4">
                  <em>{experience.location}</em>
                </p>
                <ul className="list-disc list-inside text-[#000000] space-y-2">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="text-lg font-normal">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
