import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Sertifikat() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null); // State untuk menyimpan sertifikat terpilih

  const certifications = [
    {
      title: "Certificate of Completion - JavaScript Intermediate",
      issuedBy: "Skilvul",
      issuedDate: "Februari 2025",
      expiryDate: "Februari 2027",
      imagePath: "/src/assets/cert1.jpg",
    },
    {
      title: "Certificate of Completion - JavaScript Dasar",
      issuedBy: "Skilvul",
      issuedDate: "Januari 2025",
      expiryDate: "Januari 2027",
      imagePath: "/src/assets/cert2.jpg",
    },
    {
      title: "Magang Mandiri Fullstack Developer",
      issuedBy: "PT. Winnicode Garuda Indonesia",
      issuedDate: "Januari 2025",
      expiryDate: "Januari 2028",
      imagePath: "/src/assets/cert3.jpg",
    },
    {
      title: "Studi Independen Bersertifikat Angkatan 7",
      issuedBy: "Kampus Merdeka",
      issuedDate: "Januari 2025",
      imagePath: "/src/assets/cert4.jpg",
    },
    {
      title: "Lulusan Program Studi Independen - IT Full Stack Developer",
      issuedBy: "Rakamin Academy",
      issuedDate: "Desember 2024",
      imagePath: "/src/assets/cert5.jpg",
    },
    {
      title: "Certificate of Achievement - Desain UI/UX",
      issuedBy: "Rakamin Academy",
      issuedDate: "Oktober 2024",
      credentialId: "325099UI_UX2102024-EG",
      imagePath: "/src/assets/cert6.jpg",
    },
    {
      title: "Certificate of Achievement - Fullstack Web Development",
      issuedBy: "Rakamin Academy",
      issuedDate: "Oktober 2024",
      credentialId: "325099FULLSTACK_WEB_DEVELOPMENT1102024-EG",
      imagePath: "/src/assets/cert7.jpg",
    },
    {
      title: "Certificate of Participation - Design Thinking",
      issuedBy: "Rakamin Academy",
      issuedDate: "September 2024",
      credentialId: "325099DESIGN_THINKING192024",
      imagePath: "/src/assets/cert8.jpg",
    },
    {
      title: "Certificate of Participation - Pengembangan Kerja Sama Tim",
      issuedBy: "Rakamin Academy",
      issuedDate: "September 2024",
      credentialId: "325099TEAMWORK192024",
      imagePath: "/src/assets/cert9.jpg",
    },
  ];


  const openModal = (cert) => {
    setSelectedCert(cert); // Simpan data sertifikat yang dipilih
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
    <section id="sertifikat" className="relative py-20 text-white">
      <div className="container mx-auto px-8">
        <h2 className="text-5xl font-extrabold text-center mb-12 tracking-widest text-[#3FA3CE]">
          Sertifikat Profesional
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] shadow-xl hover:shadow-2xl p-4 rounded-2xl transition-all duration-300 hover:bg-[#EF8B8B] hover:text-white"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="flex items-center mb-4">
                  <div className="h-24 w-24 bg-[#D7D7D7] rounded-full mr-4">
                    <img
                      src={cert.imagePath}
                      alt="Sertifikat"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3FA3CE]">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-[#D7D7D7]">{cert.issuedBy}</p>
                  </div>
                </div>
                <div className="mt-4 text-[#3FA3CE]">
                  <p className="text-sm mb-1">
                    <strong>Tanggal Terbit:</strong> {cert.issuedDate}
                  </p>
                  <p className="text-sm">
                    <strong>Tanggal Kedaluwarsa:</strong> {cert.expiryDate}
                  </p>
                </div>
                <button
                  className="mt-4 text-white bg-[#EF8B8B] p-2 rounded-xl"
                  onClick={() => openModal(cert)}
                >
                  Tampilkan Sertifikat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#FFFFFF] p-6 rounded-2xl w-96">
            <h3 className="text-xl font-semibold text-[#3FA3CE] mb-4">
              {selectedCert.title}
            </h3>
            <img
              src={selectedCert.imagePath}
              alt={selectedCert.title}
              className="w-full h-auto rounded-xl mb-4"
            />
            <button
              className="mt-4 text-white bg-[#EF8B8B] p-2 rounded-xl"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
