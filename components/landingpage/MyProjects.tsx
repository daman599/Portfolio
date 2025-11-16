'use client'

import Image from "next/image";
import { Dot } from "lucide-react";
import { projectsData } from "@/lib/projectsData";
import Reveal from "../ui/Reveal";
import Link from "next/link";

const Projects = () => {

   return (
      <div className="mt-10 px-4 sm:px-6 md:px-10 lg:px-28 xl:px-48 md:mb-2">
         <Reveal>
            <p className="text-2xl md:text-4xl xl:text-5xl font-medium">
               My Projects
            </p>
         </Reveal>

         <Reveal>
            <div className="mt-4 xl:mt-6 text-xs lg:text-base font-medium text-[#999999] leading-[25px]">
               <p>A small step in my learning journey.</p>
               <p>Created with passion and attention to detail.</p>
            </div>
         </Reveal>

         <div className="mt-8 lg:mt-9 flex flex-col md:flex-row gap-6 lg:gap-8 md:overflow-x-auto whitespace-nowrap scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {projectsData.map(
               ({ id, project_name, project_type, project_pic, month }, index) => (
                  <Reveal key={index}>
                     <div className="flex flex-col overflow-hidden mb-2">
                        <Link href={`/project/${id}`}
                           className="
                         group max-w-[95%] sm:max-w-[320px] md:max-w-[280px] lg:max-w-[349px] 
                         aspect-[16/9] relative cursor-pointer group w-full sm:w-[349px] h-[181px] 
                         overflow-hidden rounded-xl mx-auto md:mx-0"
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

                        <span className="mt-3 md:mt-6 font-normal text-lg text-center md:text-left">
                           {project_name}
                        </span>

                        <div className="flex mt-1 md:mt-2 items-center justify-center md:justify-start ">
                           <span className="font-normal text-xs xl:text-sm text-[#999999]">2025</span>
                           <Dot className="text-[#999999]" />
                           <span className="font-normal text-xs xl:text-sm text-[#999999]">{month}</span>
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
