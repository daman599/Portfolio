import { Vortex } from "@/components/ui/Vortex";

const Hero = () => {
  return (
    <>
      <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] h-screen flex flex-col items-center justify-center mx-auto px-4 sm:px-6 md:px-8">

        <div className="absolute inset-0 -z-10 overflow-hidden">
           <Vortex
            rangeY={800}
            particleCount={500}
            baseHue={120}
            className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full"
          />
        </div>

        <div className="mt-12 text-[40px] sm:text-[52px] md:text-[64px] flex flex-col items-center leading-[1.1] text-center">
          <div className="text-white font-medium">daman</div>
          <div className="text-[#999999] italic tracking-[-1px] sm:tracking-[-2px] md:tracking-[-3px]">personal</div>
          <div className="text-[#999999] font-medium">portfolio</div>
        </div>

        <div className="mt-6 md:mt-10 font-medium text-[#999999] leading-relaxed text-center">
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl">web developer</div>
          <div className="text-sm sm:text-[18px] md:text-[21px] lg:text-[25px] mt-2 md:mt-4">
            with ui/ux designing skills
          </div>
        </div>

        <div className="mt-6 md:mt-10 flex items-center justify-center gap-1 md:gap-2 text-[#999999] text-xs sm:text-sm md:text-base font-light">
          <div>Punjab,</div>
          <div>India</div>
        </div>
      </div>

      <div className="absolute bottom-7 md:bottom-5 lg:bottom-8 left-1/2 -translate-x-1/2 w-2 sm:w-3 md:w-3.5 lg:w-4 z-20 h-9 md:h-11 lg:h-14 bg-[#302F2F] rounded-full flex items-start justify-center pt-2 animate-bounce">
        <div className="bg-[#545050] h-2.5 sm:h-3 md:h-4 lg:h-5 w-1 rounded-full"></div>
      </div>
    </>
  );
};

export default Hero;
