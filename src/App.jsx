import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/hero/Hero";
import Pendidikan from "./components/pendidikan/Pendidikan";
import Skills from "./components/skills/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Sertifikat from "./components/sertifikat/Sertifikat";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <main className="bg-[#0d182e]">
      <Hero />
      <Pendidikan />
      <Skills />
      <Experience />
      <Sertifikat />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
