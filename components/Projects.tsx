import Image from "next/image";
import { Dot } from "lucide-react";

const projects = [
   {
      "project_name": "Funflix",
      "project_type": "Full-stack web app",
      "month": "June",
   },
   {
      "project_name": "ResumeMatch AI",
      "project_type": "Full-stack web app",
      "month": "July",
   }
]
const Projects = () => {
   return (
      <>
         <p className="ml-[217px] text-[48px] font-medium">My Projects</p>

         <div className="mt-[23px] text-[16px] font-medium text-[#999999] leading-[25px] ml-[217px]">
            <p >A small step in my learning journey.</p>
            <p >Created with passion and attention to detail.</p>
         </div>

         <div className="flex gap-[42px] ml-[217px] mt-[51px]">
            {projects.map(({ project_name,project_type, month }, index) => (
               <div key={index}>
                 <div className="relative">

                  <Image
                     src="/Project_cover_pic.jpg"
                     alt="Project Pic"
                     width={349}
                     height={181}
                     className="rounded-[16px]"
                  />
                  <div className="absolute top-3 left-4 px-3 rounded-full bg-[#201F1F] font-light text-[10px] leading-[30px]">{project_type}</div>
                  </div>

                  <p className="mt-[23px] font-normal text-[22px] ">{project_name}</p>
                  <div className="flex mt-[10px] items-center">
                     <p className="font-normal text-[14px] text-[#999999]" >2025</p>
                     <Dot className="text-[#999999]" />
                     <p className="font-normal text-[14px] text-[#999999]">{month}</p>
                  </div>
               </div>
            ))}

         </div>

      </>
   );
}

export default Projects;