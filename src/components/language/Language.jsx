import React from 'react'

export default function Language() {
    const languages = [
        {code:'En', name:'English', level:'Maternal'},
        {code:'Ar', name:'Arabic', level:'Common'},
        {code:'Sp', name:'Spanish', level:'Average'},
        {code:'Fr', name:'French', level:'Good'},
    ];
  return (
    <section
      id="language"
      data-aos="fade-up"
      data-aos-delay="400"
      className="flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-20 h-[300px] text-[#3FA3CE] mt-11 "
    >
      <div className="grid grid-cols-2 gap-10 md:flex md:gap-20">
        {languages.map((language, index) => (
          <div key={index} className="achievement flex flex-col items-center">
            <div className="circle w-20 h-20 md:w-16 md:h-16 bg-[#FFFFFF] rounded-full relative flex items-center justify-center text-lg md:text-xl font-bold mb-6 md:mb-8 shadow-lg">
              <span className="z-10">{language.code}</span>
              <div className="absolute top-[-6px] left-[-6px] right-[-6px] bottom-[-6px] md:top-[-8px] md:left-[-8px] md:right-[-8px] md:bottom-[-8px] rounded-full bg-gradient-to-b from-[#EF8B8B] to-[#E6E6FA] shadow-[0_0_20px_rgba(63,163,206,0.7)] z-0"></div>
            </div>
            <span className="text-xl md:text-xl text-[#FFFFFF]">
              {language.name}
            </span>
            <span className="text-[#EF8B8B] text-lg md:text-xl font-bold">
              {language.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
