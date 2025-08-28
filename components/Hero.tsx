const Hero = () => {
return <>
<div className="w-[320px]  h-screen flex flex-col items-center justify-center  ml-auto mr-auto ">
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
</div>

<div className="w-[19px] h-[56px] bg-[#302F2F] rounded-full px-1.5 pt-2 mb-8 animate-bounce items-center justify-center ml-auto mr-auto">
      <div className="bg-[#545050] h-[20px]  font-bold rounded-full"></div>
     </div>
</>
}

export default Hero;