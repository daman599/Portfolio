const Footer = ()=>{
  return (<>
       <div className="w-full h-[1px] bg-[#1C1C1C] mt-[113px]"></div>

       <div className="flex justify-between w-[1024px] ml-[218px] mr-[128px]">

       <div className=" mt-[68.9px] w-[345px] h-[97px] mb-[69px]">
           <p className="text-[24px] font-medium leading-[30px]">daman</p>
           <p className="mt-[17px] text-[#999999] font-medium text-[16px] leading-[25px]">Blending design and technology to create 
               functional, minimal, and impactful web apps.</p>
       </div>
       
       <div className="mr-[120px] mt-[58.9px] mb-[44px]">
         <p className="font-normal text-[20px] leading-[25px]">Contact</p>
         <p className="mt-[19px] text-[#999999] font-medium text-[16px] leading-[25px]">damanpreetk117@gmail.com</p>
         <p className="mt-[6px] text-[#999999] font-medium text-[16px] leading-[25px]">+91 8194990268</p>
         <p className="mt-[5px] text-[#999999] font-medium text-[16px] leading-[25px]">Punjab, India</p>
       </div>

       <div className="mt-[58.9px] mr-[94px] w-[148px] h-[69px]">
         <p className="font-normal text-[20px] leading-[25px]">Connect</p>
         <div className="flex gap-10">
           <button className="mt-[20px] font-medium text-[16px] leading-[25px] text-[#999999] hover:text-[#FFFCFC] cursor-pointer">Github</button>
           <button className="mt-[20px] font-medium text-[16px] leading-[25px] text-[#999999] hover:text-[#FFFCFC] cursor-pointer">Twitter</button>
          </div>
       </div>

       </div>

       <div className="w-[1024px] h-[1px] bg-[#1C1C1C] ml-[218px] mr-[128px]"></div>

       <p className="flex items-center justify-center mt-[37px] mb-[36px] text-[14px] font-light text-[#CCCCCC]">© 2025 daman. All rights reserved.</p>
      
  </>);
}
export default Footer;