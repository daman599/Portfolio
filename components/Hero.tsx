import Galaxy from "@/components/uiComponent/Galaxy";

const Hero = () => {
  return <>
    <div className="w-[320px] h-screen flex flex-col items-center justify-center  ml-auto mr-auto ">
      <div className="absolute inset-0 -z-10">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={140}
        />
      </div>

      <div className="mt-12 text-[64px] flex flex-col items-center leading-[1.1] ">
        <div className="text-white font-medium">daman</div>
        <div className="text-[#999999] italic tracking-[-3px] ">personal</div>
        <div className="text-[#999999] font-medium ">portfolio</div>
      </div>

      <div className="mt-10 flex flex-col items-center font-medium text-[#999999] leading-[25px]">
        <div className=" px-16 text-[24px]">web developer</div>
        <div className=" text-[25px] mt-4">with ui/ux designing skills</div>
      </div>

      <div className="flex gap-2 text-[#999999] text-[14px] font-light mt-10 items-center justify-center">
        <div>Punjab,</div>
        <div>India</div>
      </div>

      <div className="absolute bottom-6 w-[19px] h-[56px] bg-[#302F2F] rounded-full px-1.5 pt-2 animate-bounce ">
        <div className="bg-[#545050] h-[20px] w-[8px] rounded-full"></div>
      </div>
    </div>

  </>
}

export default Hero;