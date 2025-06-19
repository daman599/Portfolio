import { HoverBorderGradient } from "./ui/hover-border-gradient"

export function Hero() {
  return (
    <section id ="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-8 md:px-20 bg-[#1E1E1E] text-white">

      <div className="mb-10 md:mb-0 md:mr-16 flex-shrink-0">
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-66 h-66 rounded-full border-[6px] border-[#1E1E1E] shadow-xl"
        />
      </div> 

      <div className="text-center md:text-left max-w-2xl">
         <h2 className="text-gray-400 text-xl md:text-2xl font-medium">
          Hi I’m <span className="text-blue-400">Full-Stack Web Developer</span>
        </h2>
        <h1 className="text-blue-500 text-4xl sm:text-5xl md:text-6xl font-extrabold mt-2 mb-4">
          Damanpreet Kaur
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
          I’m a developer who loves turning ideas into creative designs and then into real-world applications.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button className="border cursor-pointer border-blue-500 text-blue-500 px-6 py-2.5 rounded-full hover:bg-blue-500 hover:text-black transition font-semibold">
            Download CV
          </button>
          <HoverBorderGradient>
          <button className=" px-6 py-2.5 rounded-full font-semibold">
            Open to work
          </button>
          </HoverBorderGradient>
        </div>
      </div>
    </section>
  );
}

