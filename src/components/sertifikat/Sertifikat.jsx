import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineClose } from "react-icons/ai";
import { FaCertificate } from "react-icons/fa";
import bnsp from "../../assets/logo/bnsp.png";
import Elskill from "../../assets/logo/Elskill.png";
import kampusmerdeka from "../../assets/logo/kampusmerdeka.jpg";
import PNB from "../../assets/logo/PNB.png";
import rakamin from "../../assets/logo/rakamin.png";
import skillacademy from "../../assets/logo/skillacademy.jpg";
import skilvul from "../../assets/logo/skilvul.jpg";
import ubsi from "../../assets/logo/ubsi.png";
import ULM from "../../assets/logo/ULM.jpg";
import UMT from "../../assets/logo/UMT.png";
import winnicode from "../../assets/logo/winnicode.jpg";
import bootcampubsi from "../../assets/sertifikat/bootcampubsi.jpg";
import designthinkingrakamin from "../../assets/sertifikat/designthinkingrakamin.jpg";
import fullstackrakamin from "../../assets/sertifikat/fullstackrakamin.jpg";
import hifestuiux from "../../assets/sertifikat/hifestuiux.jpg";
import html from "../../assets/sertifikat/html.jpg";
import htmlcomplete from "../../assets/sertifikat/htmlcomplete.jpg";
import javascriptdasar from "../../assets/sertifikat/javascriptdasar.jpg";
import kompetisiinbali from "../../assets/sertifikat/kompetisiinbali.jpg";
import magangwinnicode from "../../assets/sertifikat/magangwinnicode.jpg";
import publicspeaking from "../../assets/sertifikat/publicspeaking.png";
import studykampusmerdeka from "../../assets/sertifikat/studykampusmerdeka.jpg";
import studyrakamin from "../../assets/sertifikat/studyrakamin.jpg";
import thefuturewebdevelopment from "../../assets/sertifikat/thefuturewebdevelopment.jpg";
import teamworkrakamin from "../../assets/sertifikat/teamworkrakamin.jpg";
import toefl from "../../assets/sertifikat/toefl.jpeg";
import uiux2 from "../../assets/sertifikat/uiux2.jpg";
import uiuxrakamin from "../../assets/sertifikat/uiuxrakamin.jpg";
import javascriptmenengah from "../../assets/sertifikat/javascriptmenengah.jpg";
import analisisprogram from "../../assets/sertifikat/analisisprogram.jpg";
import htmldasarskilvul from "../../assets/sertifikat/htmldasarskilvul.png";
import cssdasarskilvul from "../../assets/sertifikat/cssdasarskilvul.png";
import pythondasarskilvul from "../../assets/sertifikat/pythondasarskilvul.png";

export default function Sertifikat() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title:
        "Certificate of Completion (Sertifikat Kelulusan) Lulus Kursus JavaScript Intermediate",
      issuedBy: "Skilvul",
      issuedDate: "Februari 2025",
      skills: "JavaScript, Pengembangan Web, Front-end Development",
      logo: skilvul,
      lisensi: javascriptmenengah,
    },
    {
      title:
        "Certificate of Completion (Sertifikat Kelulusan) JavaScript Dasar",
      issuedBy: "Skilvul",
      issuedDate: "Januari 2025",
      skills: "JavaScript, Pengembangan Web, Front-end Development",
      logo: skilvul,
      lisensi: javascriptdasar,
    },
    {
      title: "Magang Mandiri Fullstack Developer",
      issuedBy: "PT. Winnicode Garuda Indonesia",
      issuedDate: "Januari 2025",
      skills:
        "Fullstack Development, Frontend Development, Backend Development",
      logo: winnicode,
      lisensi: magangwinnicode,
    },
    {
      title: "Studi Independen Bersertifikat Angkatan 7 Kampus Merdeka",
      issuedBy: "Kampus Merdeka",
      issuedDate: "Januari 2025",
      skills:
        "product management, ui/ux, full stack development, data science, QE, Pengembangan Web",
      logo: kampusmerdeka,
      lisensi: studykampusmerdeka,
    },
    {
      title: "Lulusan Program Studi Independen - IT Full Stack Developer",
      issuedBy: "Rakamin Academy",
      issuedDate: "Desember 2024",
      skills:
        "product management, ui/ux, full stack development, data science, QE · Pengembangan Web",
      logo: rakamin,
      lisensi: studyrakamin,
    },
    {
      title: "Certificate of Achievement - Desain UI/UX",
      issuedBy: "Rakamin Academy",
      issuedDate: "Oktober 2024",
      skills: "Desain UI/UX, UX Research, Wireframing, Prototyping",
      logo: rakamin,
      lisensi: uiuxrakamin,
    },
    {
      title: "Certificate of Achievement - Fullstack Web Development",
      issuedBy: "Rakamin Academy",
      issuedDate: "Oktober 2024",
      skills:
        "Fullstack Development, Frontend Development, Backend Development",
      logo: rakamin,
      lisensi: fullstackrakamin,
    },
    {
      title: "Certificate of Participation - Design Thinking",
      issuedBy: "Rakamin Academy",
      issuedDate: "September 2024",
      skills:
        "Design Thinking, Problem Solving, Kreativitas, Empati, Prototyping",
      logo: rakamin,
      lisensi: designthinkingrakamin,
    },
    {
      title: "Certificate of Participation - Pengembangan Kerja Sama Tim",
      issuedBy: "Rakamin Academy",
      issuedDate: "September 2024",
      skills: "Kerja sama tim, Komunikasi, Pemecahan Masalah, Kolaborasi",
      logo: rakamin,
      lisensi: teamworkrakamin,
    },
    {
      title: "Peserta Kompetisi Desain UI/UX Tingkat Nasional",
      issuedBy: "Universitas Muhammadiyah Tangerang",
      issuedDate: "September 2024",
      skills: "Desain UI/UX, UX Research, Wireframing, Prototyping",
      logo: UMT,
      lisensi: hifestuiux,
    },
    {
      title: "Piagam Penghargaan Web Design Competition",
      issuedBy: "Politeknik Negeri Bali",
      issuedDate: "September 2024",
      skills: "Desain Web, Pengembangan Web, Kreativitas, Pemecahan Masalah",
      logo: PNB,
      lisensi: kompetisiinbali,
    },
    {
      title: "Sertifikat Kompetensi Pengembang Perangkat Lunak",
      issuedBy: "Badan Nasional Sertifikasi Profesi (BNSP)",
      issuedDate: "Agustus 2024",
      skills: "Analisis Sistem, Desain Perangkat Lunak, Manajemen Proyek",
      logo: bnsp,
      lisensi: analisisprogram,
    },
    {
      title: "Sertifikat Partisipasi Webinar 'Become The Future Web Developer'",
      issuedBy: "Universitas Lambung Mangkurat",
      issuedDate: "Agustus 2024",
      skills: "Pengembangan Web Dasar, HTML, CSS, JavaScript",
      logo: ULM,
      lisensi: thefuturewebdevelopment,
    },
    {
      title: "Juara 2 Kompetisi Desain UI/UX - HIMSI UBSI",
      issuedBy: "Universitas Bina Sarana Informatika",
      issuedDate: "Juli 2024",
      skills: "Desain UI/UX, Kreativitas, Pemahaman user experience",
      logo: ubsi,
      lisensi: uiux2,
    },
    {
      title: "Lulus Tes TOEFL",
      issuedBy: "Elskill English Course",
      issuedDate: "Februari 2024",
      skills: "Bahasa Inggris, TOEFL, Komunikasi, Akademik",
      logo: Elskill,
      lisensi: toefl,
    },
    {
      title:
        "Sertifikat Peserta BSI DIGINOFEST 2024: Mengasah Keterampilan Public Speaking",
      issuedBy: "Universitas Bina Sarana Informatika",
      issuedDate: "Januari 2024",
      skills:
        "Public Speaking, Komunikasi, Kepercayaan Diri, Pengembangan Diri",
      logo: ubsi,
      lisensi: publicspeaking,
    },
    {
      title: "Sertifikat Kelulusan IT Bootcamp 'Software Development'",
      issuedBy: "Universitas Bina Sarana Informatika",
      issuedDate: "Juni 2023",
      skills: "Pemrograman, Desain Algoritma, Framework PHP",
      logo: ubsi,
      lisensi: bootcampubsi,
    },
    {
      title: "Sertifikat Kelulusan Kursus CSS Dasar",
      issuedBy: "Skilvul",
      issuedDate: "September 2022",
      skills: "CSS Dasar, Desain Web Responsif",
      logo: skilvul,
      lisensi: cssdasarskilvul,
    },
    {
      title: "Sertifikat Kelulusan Kursus Python Dasar",
      issuedBy: "Skilvul",
      issuedDate: "September 2022",
      skills: "Python, Pemrograman",
      logo: skilvul,
      lisensi: pythondasarskilvul,
    },
    {
      title: "Sertifikat Kelulusan Kursus HTML Dasar",
      issuedBy: "Skilvul",
      issuedDate: "Agustus 2022",
      skills: "HTML, Pengembangan Web, Pemrograman",
      logo: skilvul,
      lisensi: htmldasarskilvul,
    },
    {
      title: "Certificate of Completion",
      issuedBy: "Skill Academy by Ruangguru",
      issuedDate: "Januari 2022",
      skills:
        "HTML Dasar: Memahami struktur dasar halaman web, elemen HTML, dan atributnya",
      logo: skillacademy,
      lisensi: htmlcomplete,
    },
    {
      title: "Certificate of Excellence",
      issuedBy: "Skill Academy by Ruangguru",
      issuedDate: "Januari 2022",
      skills: "HTML, Pengembangan Web, Pemrograman",
      logo: skillacademy,
      lisensi: html,
    },
  ];

  const openModal = (cert) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCert(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="sertifikat"
      className="relative py-20 px-5 md:px-20 text-white"
    >
      <div className="container mx-auto px-8">
        <h2
          className="text-5xl font-extrabold text-center mb-8 tracking-widest text-[#3FA3CE] flex items-center justify-center space-x-4"
          data-aos="fade-down"
        >
          <FaCertificate className="text-[#3FA3CE] text-6xl" />
          <span>Sertifikat Profesional</span>
        </h2>
        <h3 className="text-xl font-bold text-center mb-4 text-[#ababab]">
          Total Sertifikat : {certifications.length} Sertifikat
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] shadow-md hover:shadow-lg p-1 rounded-xl transition-all duration-300 hover:bg-[#EF8B8B] hover:text-white cursor-pointer group"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              onClick={() => openModal(cert)}
            >
              <div className="flex items-center space-x-3">
                <div className="h-20 w-20 bg-[#D7D7D7] rounded-lg overflow-hidden">
                  <img
                    src={cert.logo}
                    alt="Sertifikat"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-[#3FA3CE]">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#ababab]">
                    {cert.issuedBy} - {cert.issuedDate}
                  </p>
                  <p className="text-xs text-[#ababab] group-hover:text-white">
                    <strong>Keahlian :</strong>{" "}
                    {cert.skills ? cert.skills : "Tidak Tersedia"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedCert && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal} // Close modal saat klik di luar
        >
          <div
            className="relative bg-[#FFFFFF] p-6 rounded-2xl w-[40rem]"
            onClick={(e) => e.stopPropagation()} // Stop klik dalam modal agar tidak menutup
          >
            {/* Tombol Close di kanan atas dengan ikon dan tulisan */}
            <button
              className="absolute top-0 right-0 flex items-center justify-center gap-1 text-[#EF8B8B] hover:text-red-600 border-2 border-[#EF8B8B] rounded-full p-1 m-2"
              onClick={closeModal}
            >
              <AiOutlineClose className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-semibold text-[#3FA3CE] mb-4">
              {selectedCert.title}
            </h3>
            <img
              src={selectedCert.lisensi}
              alt={selectedCert.title}
              className="w-full h-auto rounded-xl mb-4"
            />
          </div>
        </div>
      )}
    </section>
  );
}
