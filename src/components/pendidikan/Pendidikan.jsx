import React from 'react';
import {FaGraduationCap } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
import rakamin from "../../assets/logo/rakamin.png";
import ubsi from "../../assets/logo/ubsi.png";

export default function Pendidikan() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const dataPendidikan = [
    {
      logo: ubsi,
      institusi: 'Universitas Bina Sarana Informatika',
      gelar: 'Gelar Sarjana, Teknologi Informasi',
      tanggal: 'Sep 2021 - Sep 2025',
      ipk: '3.89/4.00',
      kegiatan: [
        'Pengembangan proyek berbasis web',
        'Diskusi dan kolaborasi dengan tim dalam pengembangan perangkat lunak',
      ],
      deskripsi:
        'Sebagai mahasiswa Teknologi Informasi dengan IPK 3.88, saya memiliki keahlian dalam pengembangan aplikasi web modern. Berpengalaman dengan React.js, CodeIgniter (CI), dan Laravel untuk membangun aplikasi berbasis web yang responsif dan scalable.',
      keahlian:
        'Desain Web, Pengembangan Web, Kreativitas, Pemecahan Masalah, Leadership & Team Coordination',
    },
    {
      logo: rakamin,
      institusi: 'Rakamin Academy',
      gelar: 'Studi Independen Bersertifikat (MSIB)',
      tanggal: 'Sep 2024 - Jan 2025',
      ipk: '94.8 /100',
      kegiatan: [
        'Kolaborasi dalam proyek pengembangan web',
        'Presentasi proyek akhir dengan metode agile',
      ],
      deskripsi:
        'Berhasil menyelesaikan program intensif Studi Independen Bersertifikat (MSIB) di Rakamin Academy dengan fokus pada Full Stack Web Development.',
      keahlian:
        'Product Management, UI/UX, Full Stack Development',
    },
  ];

  return (
    <section
      className="relative py-20 px-5 md:px-20 text-white"
      id="pendidikan"
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-5xl font-extrabold text-center mb-12 tracking-widest text-[#3FA3CE] flex items-center justify-center space-x-4"
          data-aos="fade-down"
        >
          <FaGraduationCap className="text-[#3FA3CE] text-6xl" />
          <span>Pendidikan</span>
        </h2>
        <div className="space-y-8">
          {dataPendidikan.map((edu, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition duration-500 border-l-8 border-[#EF8B8B]"
              data-aos="fade-up"
            >
              <div className="flex items-center mb-4">
                <img
                  src={edu.logo}
                  alt={edu.institusi}
                  className="w-16 h-16 rounded-full mr-4 shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-[#3FA3CE]">
                    {edu.institusi}
                  </h3>
                  <p className="text-sm text-[#ababab]">{edu.gelar}</p>
                  <p className="text-sm text-[#ababab]">{edu.tanggal}</p>
                  <p className="text-sm text-[#ababab]">IPK: {edu.ipk}</p>
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-md font-semibold text-[#EF8B8B]">
                  Kegiatan dan Masyarakat:
                </h4>
                <ul className="list-disc list-inside text-[#000000]">
                  {edu.kegiatan.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="text-[#3FA3CE] leading-relaxed mb-4">
                {edu.deskripsi}
              </p>
              <div>
                <h4 className="text-md font-semibold text-[#EF8B8B]">
                  Keahlian:
                </h4>
                <p className="text-[#000000]">{edu.keahlian}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}