import { HoverBorderGradient } from "./ui/hover-border-gradient";

export function Hero() {
  return (
    <section id="home" className="bg-primary pt-52 pb-12 md:pt-60 md:pb-20 ">
      <div className="container md:max-w-[1440px] m-auto px-6">
        <div className="flex flex-col justify-center items-center gap-8 md:flex-row ">
          <div className="w-auto min-w-[266px]">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-66 h-66 rounded-full border-[6px] border-[#1E1E1E] shadow-xl  "
            />
          </div>
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-secondary text-xl md:text-2xl font-medium">
              Hi I’m{" "}
              <span className="text-tertiary">Full-Stack Web Developer</span>
            </h2>
            <h1 className="text-secondary text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2 mb-4">
              Damanpreet Kaur
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              I’m a developer who loves turning ideas into creative designs and
              then into real-world applications.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://drive.google.com/file/d/11rH4IMGuGgS2_J3OrPWznRo1-6aVCJY-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border cursor-pointer border-tertiary text-tertiary px-6 py-3 rounded-full hover:bg-secondary hover:text-primary hover:border-secondary transition font-semibold leading-none">
                  Download CV
                </button>
              </a>

              <HoverBorderGradient className="px-6 py-3 rounded-full font-semibold bg-secondary opacity-80 text-tertiary leading-none">
                Open to work
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
