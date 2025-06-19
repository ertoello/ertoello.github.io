import React from "react";
import { FaLaptopCode } from "react-icons/fa";

// Ganti gambar sesuai asset yang kamu punya
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";

export default function Projects() {
  const listProjects = [
    {
      id: 1,
      image: image1,
      title: "🖥️ Website Komunikasi Desa Beopoeng",
      description:
        "Pengembangan website dilakukan secara individu menggunakan metode Agile Development, yang menekankan pada proses iteratif, fleksibel, dan berfokus pada kebutuhan pengguna desa. Teknologi: MERN Stack | Agile Methodology",
      github: "https://github.com/ertoello/website-kolaborasi",
    },
    {
      id: 2,
      image: image2,
      title: "📝 Aplikasi Catatan – React JS",
      description:
        "Membangun aplikasi catatan sederhana menggunakan React JS untuk menambahkan, mengarsipkan, dan menghapus catatan. Teknologi: React.js | JSX & Hooks | Front-End",
      github:
        "https://github.com/ertoello/catatan-pribadi-sederhana-menggunakan-react",
    },
    {
      id: 3,
      image: image3,
      title: "💊 Website Pengingat Obat",
      description:
        "Website yang membantu pengguna mengatur jadwal minum obat dengan fitur pengingat otomatis. Teknologi: Laravel | JavaScript | UI/UX | Full Stack.",
      github: "https://github.com/ertoello/Website_Pengingat_Obat",
    },
    {
      id: 4,
      image: image4,
      title: "🎟️ Sistem Tiket Bioskop Digital",
      description:
        "Sistem tiket bioskop digital untuk memilih jenis tiket dan waktu tayang. Teknologi: PHP | UI Design | Full Stack",
      github: "https://github.com/ertoello/pemesanantiketbioskop",
    },
    {
      id: 5,
      image: image5,
      title: "📚 Toko Buku Online",
      description:
        "Website toko buku digital yang mendukung pencarian dan pembelian buku secara online. Teknologi: Laravel | Full Stack",
      github: "https://github.com/ertoello/toko_buku",
    },
    {
      id: 6,
      image: image6,
      title: "🌴 Website Wisata Labuan Bajo",
      description:
        "Promosi destinasi wisata Labuan Bajo melalui website berbasis HTML, CSS, dan Bootstrap. Teknologi: HTML | CSS | Bootstrap",
      github: "https://github.com/ertoello/WisataLabuanBajo",
    },
    {
      id: 7,
      image: image7,
      title: "☕ Website Caffe Coffee – Digitalisasi Bisnis Kopi",
      description:
        "Website pemesanan dan interaksi konsumen untuk kafe kopi. Teknologi: CodeIgniter | MVC | MySQL | Web Collaboration",
      github: "https://github.com/ertoello/caffe",
    },
    {
      id: 8,
      image: image8,
      title: "🏫 Website Informasi Sekolah – Pelita Cahaya Highschool",
      description:
        "Website informasi sekolah untuk digitalisasi profil sekolah, pendaftaran siswa, dan sistem komunikasi sekolah. Teknologi: HTML | CSS | JavaScript | Front-End",
      github: "https://github.com/ertoello/web-sekolah",
    },
    {
      id: 9,
      image: image9,
      title: "🌐 Website Portofolio Pribadi",
      description:
        "Website portofolio ini dibangun untuk menampilkan hasil karya, pengalaman, serta keahlian saya di bidang web development, UI/UX, dan pengembangan aplikasi. Teknologi: React JS | Tailwind CSS | HTML/CSS | JavaScript",
      github: "https://github.com/ertoello/ertoello.github.io.git",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="400"
      id="proyek"
      className="relative overflow-x-hidden flex flex-col text-white body-font"
    >
      <h2
        className="text-5xl md:font-bold font-semibold text-center tracking-widest text-[#3FA3CE] flex items-center justify-center space-x-4"
        data-aos="fade-down"
      >
        <FaLaptopCode className="text-[#3FA3CE] text-6xl" />
        <span>Projek-Projek Saya</span>
      </h2>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <div className="flex overflow-x-auto flex-nowrap space-x-4 pb-6 pl-4 pr-6 scroll-smooth">
          {listProjects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-full max-w-sm sm:w-[48%] md:w-[45%] lg:w-[40%] last:mr-4"
            >
              <div className="h-full min-h-[460px] flex flex-col border-2 border-[#3FA3CE] shadow-[0_0_15px_#EF8B8B] border-opacity-60 rounded-xl overflow-hidden bg-[#1e1e1e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-[#D7D7D7] mb-2">
                    {project.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-300 mb-3 flex-grow">
                    {project.description}
                  </p>
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-[#3FA3CE] hover:underline text-sm mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗 Lihat di GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
