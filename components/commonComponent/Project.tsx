'use client'
import { useRouter } from "next/navigation";
import { ArrowLeft, Dot, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface project {
    project_name: string,
    project_description: string,
    project_pic: string,
    live_link: string,
    code_link: string,
    frontend_techStack: string[],
    backend_techStack?: string[],
    things_learnt?: string[],
}

const Project = ({ project_name,
    project_description,
    project_pic,
    live_link,
    code_link,
    frontend_techStack,
    backend_techStack,
    things_learnt,
}: project) => {

    const router = useRouter();
    return (
        <>
            <button onClick={() => {
                router.push("/");
            }}
                className='ml-[225px] mt-24 flex gap-3 rounded-[5px] hover:bg-[#262525]/45 items-center justify-center group  w-[165px] h-[37px] px-2 py-1.5 cursor-pointer'>
                <ArrowLeft className='group-hover:text-white text-[#999999] w-5 transition-colors h-9' />
                <p className='font-medium text-[#999999] group-hover:text-white text-[14px] transition-colors'>Back to Projects</p>
            </button>

            <div className="flex w-[893px] h-[296px] ml-[225px] mt-[38px] mr-[225px] mb-[36px]">

                <div>
                    <p className=" font-medium text-[36px]">{project_name}</p>

                    <p className="w-[349px] h-[100px] mt-[39px] text-[#999999] font-medium text-[16px] leading-[25px]">{project_description}</p>
                </div>

                <div className="w-[550px] h-[300px]">
                    <Image
                        src={project_pic}
                        alt="Project pic"
                        width={525}
                        height={296}
                        className="ml-[100px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition"
                    />

                    <div className="ml-[270px] mt-[20.92px] flex gap-10 ">
                        <Link href={live_link}>
                            <div className="bg-[#161515] w-[71px] h-[26px] px-5 py-[0.4px] rounded-full cursor-pointer">Live</div>
                        </Link>

                        <Link href={code_link}>
                            <div className="bg-[#161515] w-[71px] h-[26px] px-4 py-[0.4px] rounded-full cursor-pointer">Code</div>
                        </Link>
                    </div>
                </div>

            </div>
            <div className="w-[985px] h-[1px] bg-[#1C1C1C] ml-[218px] mr-[128px]"></div>

            <div className="ml-[225px] mt-[33px]">
                <p className="font-medium text-[24px] leading-[30px]">Tech-stack used</p>


                <div className="flex gap-[216px]">
                    {frontend_techStack &&
                        <div className="mt-[33px]">
                            <p className="font-normal text-[14px] text-[#999999]">Frontend</p>
                            <ul className="font-normal text-[14px] mt-[16px]">
                                {frontend_techStack.map((skill, index) => (
                                    <div key={index}
                                        className="flex my-2"><Dot /><li>{skill}</li></div>
                                ))}
                            </ul>
                        </div>
                    }

                    {backend_techStack &&
                        <div className="mt-[33px]">
                            <p className="font-normal text-[14px] text-[#999999]">Backend</p>
                            <ul className="font-normal text-[14px] mt-[16px]">
                                {backend_techStack.map((skill, index) => (
                                    <div key={index}
                                        className="flex my-2"><Dot /><li>{skill}</li></div>
                                ))}
                            </ul>
                        </div>
                    }
                </div>

            </div>

            {things_learnt &&
                <>
                    <div className="w-[985px] h-[1px] bg-[#1C1C1C] ml-[218px] mr-[128px] mt-[38px]"></div>

                    <div className="ml-[225px] mt-[33px]">
                        <p className=" font-medium text-[24px] leading-[25px]">Things I learned while building this project</p>

                        {things_learnt.map((point, index) => (
                            <div key={index} className={`flex gap-[10px] ${index == 0 ? "mt-[36px]" : "mt-[14px]"} `}>
                                <ArrowRight color="#999999" />
                                <p className="text-[#999999] font-medium text-[16px] leading-[25px]">{point}</p>
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    );
}

export default Project;