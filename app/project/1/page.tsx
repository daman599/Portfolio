'use client'
import { useRouter } from "next/navigation";
import { ArrowLeft , Dot , ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Project1 = () =>{
    const router = useRouter();
    return <>
             
                <button onClick={() => {
                    router.push("/");
                }}
                    className='ml-[225px] mt-24 flex gap-3 rounded-[5px] hover:bg-[#262525]/45 items-center justify-center group  w-[165px] h-[37px] px-2 py-1.5 cursor-pointer'>
                    <ArrowLeft className='group-hover:text-white text-[#999999] w-5 transition-colors h-9' />
                    <p className='font-medium text-[#999999] group-hover:text-white text-[14px] transition-colors'>Back to Projects</p>
                </button>

            <div className="flex w-[893px] h-[296px] ml-[225px] mt-[38px] mr-[225px] mb-[36px]"> 

            <div>
                <p className=" font-medium text-[36px]">ResumeMatch AI</p>
                
                  <p className="w-[349px] h-[100px] mt-[39px] text-[#999999] font-medium text-[16px] leading-[25px]">AI-powered resume analyzer that intelligently matches your resume with the 
                    most relevant and up-to-date job postings based on your skills and experience.</p>
            </div>
            
            <div className="w-[550px] h-[300px]">
                <Image 
                src={"/ResumeMatch_AI.png"}
                alt="Project pic"
                width={525}
                height={296}
                className="rounded-[16px] ml-[100px]"/>
                
                <div className="ml-[270px] mt-[20.92px] flex gap-10 ">
                 <Link href="https://resume-match-ai-three.vercel.app/">
                    <div className="bg-[#161515] w-[71px] h-[26px] px-5 py-[0.4px] rounded-full cursor-pointer">Live</div>
                  </Link>
                  
                  <Link href="https://github.com/daman599/Resume-match-ai">
                  <div className="bg-[#161515] w-[71px] h-[26px] px-4 py-[0.4px] rounded-full cursor-pointer">Code</div>
                  </Link>
                </div>
            </div>
            
            </div>
             <div className="w-[985px] h-[1px] bg-[#1C1C1C] ml-[218px] mr-[128px]"></div>

        <div className="ml-[225px] mt-[33px]">
            <p className="font-medium text-[24px] leading-[30px]">Tech-stack used</p>
            
            <div className="flex gap-[216px]">
             <div className="mt-[33px]">
             <p className="font-normal text-[14px] text-[#999999]">Frontend</p>
               <ul className="font-normal text-[14px] mt-[16px]">
                  <div className="flex my-2"><Dot/><li>Next.js</li></div>
                  <div className="flex my-2"><Dot/><li>TailwindCss</li></div>
                  <div className="flex my-2"><Dot/><li>Zustand</li></div>
              </ul>
             </div>

             <div className="mt-[33px]">
              <p className="font-normal text-[14px] text-[#999999]">Backend</p>
               <ul className="font-normal text-[14px] mt-[16px]">
                  <div className="flex my-2"><Dot/><li>NextAuth</li></div>
                  <div className="flex my-2"><Dot/><li>MongoDB</li></div>
                  <div className="flex my-2"><Dot/><li>Groq API</li></div>
              </ul>
             </div>
            </div>

        </div>

        <div className="w-[985px] h-[1px] bg-[#1C1C1C] ml-[218px] mr-[128px] mt-[38px]"></div>
 
        <div className="ml-[225px] mt-[33px]">
            <p className=" font-medium text-[24px] leading-[25px]">Things I learned while building this project</p>
            
            <div className="flex gap-[10px] mt-[36px]">
                <ArrowRight color="#999999"/>
                <p className="text-[#999999] font-medium text-[16px] leading-[25px]">writing clean & organized code</p>
            </div>
            <div className="flex gap-[10px]  mt-[14px]">
               <ArrowRight color="#999999"/>
               <p className="text-[#999999] font-medium text-[16px] leading-[25px]">used caching for fetching same jobs data again & again </p>
            </div>
        </div>

  
        </>
}

export default Project1;