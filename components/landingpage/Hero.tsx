import { Vortex } from "@/components/ui/Vortex";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col items-center justify-center mx-auto px-4 sm:px-6 md:px-8">

        <div className="absolute inset-0 -z-10 w-full h-full">
          <Vortex
            rangeY={800}
            particleCount={500}
            baseHue={120}
          />
        </div>

        <div className="mt-12 text-4xl md:text-5xl flex flex-col items-center leading-[1.1] text-center">
          <div className="text-white font-medium">daman</div>
          <div className="text-[#999999] italic tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">personal</div>
          <div className="text-[#999999] font-medium">portfolio</div>
        </div>

        <div className="mt-6 md:mt-9 font-medium text-[#999999] leading-relaxed text-center">
          <div className="text-base sm:text-lg md:text-xl">web developer</div>
          <div className="text-sm sm:text-lg md:text-xl mt-2 lg:mt-3">
            with ui/ux designing skills
          </div>
        </div>

        <div className="mt-6 md:mt-7 flex items-center justify-center gap-1 md:gap-2 text-[#999999] text-xs sm:text-sm md:text-base font-light">
          <span>Punjab,</span>
          <span>India</span>
        </div>
      </div >

      <div className="absolute bottom-5 md:bottom-4 lg:bottom-0.5 left-1/2 -translate-x-1/2 w-2 sm:w-3 md:w-3.5 lg:w-4 z-20 h-9 md:h-11 lg:h-14 bg-[#302F2F] rounded-full flex items-start justify-center pt-2 animate-bounce">
        <div className="bg-[#545050] h-2.5 sm:h-3 md:h-4 lg:h-5 w-0.5 md:w-1 rounded-full"></div>
      </div>
    </>
  );
};

export default Hero;
