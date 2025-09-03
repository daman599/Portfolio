'use client'

import { useRouter } from "next/navigation";
import { ArrowLeft, Dot, ArrowRight } from "lucide-react";
import { ProjectType } from "@/lib/projectsData";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../ui/Reveal";

const Project = ({
  project_name,
  project_description,
  project_pic,
  live_link,
  code_link,
  frontend_techStack,
  backend_techStack,
  things_learnt,
}: ProjectType) => {
  
  const router = useRouter();

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 xl:px-52 mt-14 md:mt-20">
      <button
        onClick={() => router.push("/")}
        className="flex gap-2 rounded-md hover:bg-[#262525]/45 items-center justify-center group px-3 py-2 cursor-pointer"
      >
        <ArrowLeft className="group-hover:text-white text-[#999999] w-4 h-4 transition-colors" />
        <p className="font-medium text-[#999999] group-hover:text-white text-xs  transition-colors">
          Back to Projects
        </p>
      </button>
       
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-7 mt-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {project_name}
          </p>
          <p className="mt-6 text-[#999999] font-medium text-sm md:text-base leading-[25px] max-w-md mx-auto lg:mx-0">
            {project_description}
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src={project_pic}
            alt="Project pic"
            width={525}
            height={296}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition w-full max-w-sm sm:max-w-md lg:max-w-lg"
          />

          <div className="flex gap-6 mt-5">
            <Link href={live_link}>
              <div className="bg-[#161515] px-5 py-1 rounded-full cursor-pointer text-sm">
                Live
              </div>
            </Link>
            <Link href={code_link}>
              <div className="bg-[#161515] px-5 py-1 rounded-full cursor-pointer text-sm">
                Code
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#1C1C1C] my-10"></div>

      <div>
        <p className="font-medium text-lg md:text-xl lg:text-2xl leading-[30px] mb-6">
          Tech-stack used
        </p>

        <div className="flex flex-row gap-20 sm:gap-28">
          {frontend_techStack && (
            <div className="font-normal text-sm">
              <p className="text-[#999999]">Frontend</p>
              <ul className="mt-4">
                {frontend_techStack.map((skill, index) => (
                  <div key={index} className="flex my-2 items-center">
                    <Dot /> <li>{skill}</li>
                  </div>
                ))}
              </ul>
            </div>
          )}

          {backend_techStack && (
            <div className="font-normal text-sm">
              <p className=" text-[#999999]">Backend</p>
              <ul className="mt-4">
                {backend_techStack.map((skill, index) => (
                  <div key={index} className="flex my-2 items-center">
                    <Dot /> <li>{skill}</li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {things_learnt && (
        <>
          <div className="w-full h-[1px] bg-[#1C1C1C] my-10"></div>

          <div>
            <Reveal>
            <p className="font-medium text-lg md:text-xl lg:text-2xl leading-[25px]">
              Things I learned while building this project
            </p>
            </Reveal>

            {things_learnt.map((point, index) => (
              <Reveal key={index}>
              <div
                className={`flex gap-3 items-start ${index === 0 ? "mt-8" : "mt-4"}`}
              >
                <ArrowRight color="#999999" />
                <p className="text-[#999999] font-medium text-sm md:text-base leading-[25px]">
                  {point}
                </p>
              </div>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Project;