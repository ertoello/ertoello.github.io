import React from "react";
import Navbar from "../navbar/Navbar";
import hi from "../../assets/hi.png";
import CV from "./CV.pdf";
import img from "../../assets/profil2.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col text-white">
      <div
        className="absolute right-10 -top-32 w-[1000px] h-[1100px] md:w-[750px] md:h-[850px] 
        bg-gradient-to-r from-[#3FA3CE] via-[#EF8B8B] to-[#E6E6FA] 
        rounded-full shadow-[0_0_120px_rgba(63,163,206,0.9)] 
        opacity-60"
      >
        {/* Lapisan Efek Geometris */}
        <div className="absolute top-10 left-10 w-52 h-52 border-4 border-[#3FA3CE] rounded-lg rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-44 h-44 border-4 border-[#EF8B8B] rounded-lg rotate-[25deg]"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 border-4 border-[#E6E6FA] rounded-lg rotate-[35deg]"></div>

        {/* Efek Layering */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#3FA3CE] opacity-20 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#EF8B8B] opacity-30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#E6E6FA] opacity-25 rounded-full"></div>

        {/* Garis-Garis Teknis */}
        <div className="absolute top-0 left-1/3 w-2 h-full bg-[#3FA3CE]"></div>
        <div className="absolute bottom-0 right-1/3 w-2 h-full bg-[#EF8B8B]"></div>
        <div className="absolute left-0 top-1/3 h-2 w-full bg-[#E6E6FA]"></div>
      </div>

      <Navbar />
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="container mx-auto flex px-10 md:px-20 py-24 md:flex-row flex-col items-center h-full"
      >
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-[-60px]">
          <img
            src={hi}
            data-aos="fade-up"
            data-aos-delay="400"
            className="w-16 h-16 animate-bounce md:w-20 md:h-20"
            alt="Hi Icon"
          />
          <h1 className="text-6xl font-extrabold text-center md:text-left mb-6 drop-shadow-lg leading-tight">
            Hi! Saya <br />
            <span className="text-[#FF6363]">Yohanes Serpiyanto Elo</span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 md:space-x-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start -mt-3 animate__animated animate__fadeIn animate__delay-1s">
                <h2 className="text-lg md:text-xl font-normal text-[#FF6363]">
                  💻 Full Stack Developer
                </h2>
                <span className="mx-4 text-xl text-gray-500">||</span>
                <h2 className="text-lg md:text-xl font-normal text-[#3FA3CE]">
                  🌐 Innovative Digital Solutions
                </h2>
                <span className="mx-4 text-xl text-gray-500">||</span>
                <h2 className="text-lg md:text-xl font-normal text-[#FFAA33]">
                  🚀 Expert in Modern Technology
                </h2>
              </div>

              <div className="text-lg text-gray-300 mt-4">
                <p>
                  Sebagai seorang Full Stack Developer yang berpengalaman dalam
                  menggunakan teknologi modern seperti React.js, CodeIgniter
                  (CI), Laravel, dan MySQL, saya bersemangat menciptakan solusi
                  digital yang efisien dan inovatif.
                </p>
                <p className="mt-4">
                  Fokus saya tidak hanya pada pengembangan backend dan frontend,
                  tetapi juga memastikan pengalaman pengguna yang intuitif dan
                  berkinerja tinggi.
                </p>
                <p className="mt-4">
                  Saya percaya bahwa teknologi tidak hanya tentang kode, tetapi
                  tentang menciptakan solusi yang berdampak. Dengan perpaduan
                  keahlian teknis dan pemahaman mendalam terhadap kebutuhan
                  pengguna, saya berkomitmen menghadirkan solusi digital yang
                  relevan dan inovatif.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-6">
            <a href={CV} download>
              <button className="text-white bg-[#FF6363] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[#D45D5D] hover:shadow-2xl transform hover:scale-105">
                Download CV
              </button>
            </a>
            <a href="#contact">
              <button className="text-white bg-[#3FA3CE] py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-[#318EB3] hover:shadow-2xl transform hover:scale-105">
                Contact Me
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 flex justify-center">
          <div className="relative w-full lg:w-[500px] md:w-[400px] h-full lg:h-[500px] md:h-[400px] rounded-full border-8 border-[#FF6363] shadow-2xl overflow-hidden">
            <img src={img} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
