import Reveal from "../ui/Reveal";

const Footer = () => {
  return (
    <>
      <div className="w-full h-px bg-[#1C1C1C] mt-12 md:mt-20" />

      <div className="flex flex-col md:flex-row justify-between w-full mt-6 max-w-6xl px-6 md:px-8 mx-auto gap-8 md:gap-12 lg:gap-20">
        
        <div className="max-w-md">
          <Reveal>
          <p className="text-lg md:text-xl lg:text-2xl font-medium leading-snug">
            daman
          </p>
          <p className="mt-4 text-[#999999] font-medium text-sm lg:text-base leading-relaxed">
            Blending design and technology to create functional, minimal, and
            impactful web apps.
          </p>
          </Reveal>
        </div>

        <div>
          <Reveal>
          <p className="font-normal text-sm md:text-base lg:text-xl leading-[25px]">
            Contact
          </p>
          <div className="mt-4 text-[#999999] font-medium text-sm md:text-base leading-[25px]">
            <a
             href="https://mail.google.com/mail/?view=cm&fs=1&to=damanpreetk117@gmail.com&su=Hello"
             target="_blank"
             rel="noopener noreferrer"
            >
            damanpreetk117@gmail.com
            </a>
            <p className="mt-1">Punjab, India</p>
          </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
          <p className="font-normal text-sm md:text-base lg:text-xl leading-[25px]">
            Connect
          </p>
          <div className="flex gap-4 md:gap-6 lg:gap-10 mt-3 md:mt-4 font-medium text-sm md:text-base text-[#999999]">
            <a
              href="https://github.com/daman599"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-[#FFFCFC]"
            >
              Github
            </a>
            <a
              href="https://x.com/daman76752"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-[#FFFCFC]"
            >
              Twitter
            </a>
          </div>
          </Reveal>
        </div>
      </div>

      <div className="w-full max-w-[1090px] h-px bg-[#1C1C1C] mt-6 mx-auto px-4" />

      <p className="flex items-center justify-center mt-4 md:mt-6 lg:mt-9 mb-4 md:mb-6 lg:mb-9 text-[10px] md:text-xs lg:text-sm font-light text-[#CCCCCC]">
        © 2025 daman. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
