'use client'

import { ArrowLeft } from 'lucide-react';
import { useRouter } from "next/navigation";
import { CometCard } from '@/components/ui/CometCard';
import { skills } from '@/lib/skills';
import Image from "next/image"
import Reveal from '@/components/ui/Reveal';

export default function About() {
    const router = useRouter();

    return (
        <div className="px-4 sm:px-2 md:px-16 lg:px-20 mt-20">

            <div className="flex justify-between items-center px-1 md:px-28 xl:px-48">
                <button
                    onClick={() => router.push("/")}
                    className="flex gap-2 rounded-md hover:bg-[#262525]/45 items-center justify-center group px-3 py-2 cursor-pointer"
                >
                    <ArrowLeft className="group-hover:text-white text-[#999999] w-3 h-3 sm:w-4 sm:h-4 transition-colors" />
                    <p className="font-medium text-[#999999] group-hover:text-white text-[10px] sm:text-xs transition-colors">
                        Back to Projects
                    </p>
                </button>

                <a
                    href="https://drive.google.com/file/d/1PoFiY9zHdEfwjfY1W7cM7e1et_FtY_xW/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="px-3 py-2 text-center rounded-[5px] hover:bg-[#262525]/45 font-medium text-[#999999] hover:text-white text-[10px] sm:text-xs cursor-pointer">
                        Download Resume
                    </div>
                </a>
            </div>

            <div className="flex flex-col items-center mt-12 mx-auto">
                <CometCard translateDepth={8}>
                    <Image
                        src="/Profile_pic.jpg"
                        alt="Profile pic"
                        width={200}
                        height={200}
                    />
                </CometCard>

                <p className="mt-8 text-2xl md:text-3xl font-medium text-center">
                    Damanpreet Kaur
                </p>

                <div className="mt-6 max-w-xl text-[#999999] font-medium text-sm xl:text-base leading-6 text-center">
                    <p>
                        I’m a BCA final-year student from Punjab, India, passionate about
                        building modern web applications using modern technologies.
                    </p>
                    <p className="mt-5">
                        I enjoy creating creative designs using Figma and then converting
                        them into functional and responsive interfaces.
                    </p>
                </div>
            </div>

            <div className="mt-12 flex flex-col items-center">
                <p className="font-medium text-base md:text-lg xl:text-xl">Tech-stack</p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 max-w-lg">
                    {skills.map((skill, index) => (
                        <Reveal key={index}>
                            <div
                                className="rounded-full bg-[#201F1F] border border-[#201F1F] hover:border-[#7E7E7E] px-4 py-1 cursor-default text-sm lg:text-base "
                            >
                                {skill}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
};