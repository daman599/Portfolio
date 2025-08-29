'use client'

import Image from "next/image";
import { Dot } from "lucide-react";
import { useRouter } from "next/navigation";

const projects = [
   {
      "project_name": "ResumeMatch AI",
      "project_type": "Full-stack web app",
      "project_pic": "/ResumeMatch_AI.png",
      "navigateTo": "/project/1",
      "month": "July",
   },
   {
      "project_name": "Funflix",
      "project_type": "Full-stack web app",
      "project_pic": "/Funflix.png",
      "navigateTo": "/project/2",
      "month": "June",
   }
]

const Projects = () => {

   const router = useRouter();

   return (
      <>
         <div className="mt-10">
            <p className="ml-[217px] text-[48px] font-medium">My Projects</p>

            <div className="mt-[23px] text-[16px] font-medium text-[#999999] leading-[25px] ml-[217px]">
               <p >A small step in my learning journey.</p>
               <p >Created with passion and attention to detail.</p>
            </div>

            <div className="flex gap-[42px] ml-[217px] mt-[51px]">
               {projects.map(({ project_name, project_type, project_pic, month, navigateTo }, index) => (
                  <div key={index}>
                     <button onClick={() => {
                        router.push(navigateTo);
                     }}
                        className="relative cursor-pointer group w-[349px] h-[181px] overflow-hidden rounded-[16px]">

                        <Image
                           src="/Project_cover_pic.jpg"
                           alt="Normal"
                           fill
                           className="object-cover transition-all duration-500 ease-in-out 
                          opacity-100 scale-105 group-hover:opacity-0 group-hover:scale-100 "
                        />

                        <Image
                           src={project_pic}
                           alt="Hover"
                           fill
                           className="object-cover transition-all duration-500 ease-in-out 
                          opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                        />

                        <div className="absolute top-3 left-4 px-3 rounded-full bg-[#201F1F] font-light text-[10px] leading-[30px] transition-opacity duration-300 opacity-100 group-hover:opacity-0">{project_type}</div>
                     </button>

                     <p className="mt-[23px] font-normal text-[22px] ">{project_name}</p>
                     <div className="flex mt-[10px] items-center">
                        <p className="font-normal text-[14px] text-[#999999]" >2025</p>
                        <Dot className="text-[#999999]" />
                        <p className="font-normal text-[14px] text-[#999999]">{month}</p>
                     </div>
                  </div>
               ))}

            </div>
         </div>
      </>
   );
}

export default Projects;