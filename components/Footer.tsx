import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full h-px bg-[#1C1C1C] mt-12 md:mt-20" />

      <div className="flex flex-col md:flex-row justify-between w-full mt-6 max-w-6xl px-6 md:px-8 mx-auto gap-8 md:gap-12 lg:gap-20">

        <div className="max-w-md">
          <p className="text-lg md:text-xl lg:text-2xl font-medium leading-snug">
            daman
          </p>
          <p className="mt-4 text-[#999999] font-medium text-sm lg:text-base leading-relaxed">
            Blending design and technology to create functional, minimal, and
            impactful web apps.
          </p>
        </div>

        <div>
          <p className="font-normal text-sm md:text-base lg:text-xl leading-[25px]">
            Contact
          </p>
          <div className="mt-4 text-[#999999] font-medium text-sm md:text-base leading-[25px]">
            <p>damanpreetk117@gmail.com</p>
            <p className="mt-1">+91 8194990268</p>
            <p className="mt-1">Punjab, India</p>
          </div>
        </div>

        <div>
          <p className="font-normal text-sm md:text-base lg:text-xl leading-[25px]">
            Connect
          </p>
          <div className="flex gap-4 md:gap-6 lg:gap-10 mt-3 md:mt-4 font-medium text-sm md:text-base text-[#999999]">
            <Link
              href="https://github.com/daman599"
              className="cursor-pointer hover:text-[#FFFCFC]"
            >
              Github
            </Link>
            <Link
              href="https://x.com/daman76752"
              className="cursor-pointer hover:text-[#FFFCFC]"
            >
              Twitter
            </Link>
          </div>
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
