'use client'

import Image from "next/image";
import { Dot } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import Reveal from "../ui/Reveal";
import Link from "next/link";

const Projects = () => {

   return (
      <div className="mt-10 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-52">
         <Reveal>
           <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
              My Projects
           </p>
         </Reveal>

         <Reveal>
         <div className="mt-[23px] text-sm md:text-base font-medium text-[#999999] leading-[25px]">
            <p>A small step in my learning journey.</p>
            <p>Created with passion and attention to detail.</p>
         </div>
         </Reveal>
         
         <div className="mt-[51px] flex flex-col md:flex-row gap-10">
            {projectsData.map(
               ({ id, project_name, project_type, project_pic, month }, index) => (
                  <Reveal  key={index}>
                  <div className="flex flex-col overflow-hidden">
                     <Link href={`/project/${id}`}
                        className="
                         group max-w-[95%] sm:max-w-[320px] md:max-w-[280px] lg:max-w-[349px] 
                         aspect-[16/9] relative cursor-pointer group w-full sm:w-[349px] h-[181px] 
                         overflow-hidden rounded-[16px] mx-auto md:mx-0"
                     >
                        <Image
                           src="/Project_cover_pic.jpg"
                           alt="Normal"
                           fill
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 349px"
                           className="object-cover transition-all duration-500 ease-in-out 
                             opacity-100 scale-105 group-hover:opacity-0 group-hover:scale-100"
                        />

                        <Image
                           src={project_pic}
                           alt={`${project_name} preview`}
                           fill
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 349px"
                           className="object-cover transition-all duration-500 ease-in-out 
                             opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                        />

                        <div className="absolute top-3 left-4 px-3 rounded-full bg-[#201F1F] font-light text-[10px]
                         leading-[30px] transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                           {project_type}
                        </div>
                     </Link>

                     <p className="mt-[23px] font-normal text-lg md:text-[22px] text-center md:text-left">
                        {project_name}
                     </p>
                     <div className="flex mt-[10px] items-center justify-center md:justify-start ">
                        <p className="font-normal text-sm text-[#999999]">2025</p>
                        <Dot className="text-[#999999]" />
                        <p className="font-normal text-sm text-[#999999]">{month}</p>
                     </div>
                  </div>
                  </Reveal>
               )
            )}
         </div>
      </div>
   );
};

export default Projects;
