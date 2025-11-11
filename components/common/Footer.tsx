import Reveal from "../ui/Reveal";

const Footer = () => {
  return (
    <>
      <div className="w-full h-px bg-[#1C1C1C] mt-12 md:mt-20" />

      <div className="flex flex-col md:flex-row justify-between w-full mt-8 max-w-6xl px-6 md:px-10 lg:px-20 xl:px-1 mx-auto gap-9 md:gap-12 lg:gap-20">
        <div className="max-w-md">
          <Reveal>
            <span className="text-lg md:text-xl font-medium leading-snug">
              daman
            </span>
            <p className="mt-4 text-[#999999] font-medium text-sm leading-relaxed">
              Blending design and technology to create functional, minimal, and
              impactful web apps.
            </p>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <span className="font-normal text-sm md:text-base leading-[25px]">
              Contact
            </span>
            <div className="mt-4 text-[#999999] font-medium text-sm leading-[25px]">
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
            <p className="font-normal text-sm md:text-base leading-[25px]">
              Connect
            </p>
            <div className="flex gap-4 md:gap-6 lg:gap-10 mt-3 md:mt-4 font-medium text-sm text-[#999999]">
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

      <div className="w-full lg:max-w-[865px] xl:max-w-[1145px] h-px bg-[#1C1C1C] mt-8 mx-auto" />

      <p className="flex items-center justify-center my-4 md:my-6 lg:my-7 text-[10px] md:text-xs font-light text-[#CCCCCC]">
        © 2025 daman. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
