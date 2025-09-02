'use client'

import { ArrowLeft } from 'lucide-react';
import { useRouter } from "next/navigation";
import { CometCard } from '@/components/ui/CometCard';
import Image from "next/image"

const skills = [
    "Javascript", "Typescript", "TailwindCss", "React",
    "Next.js", "Node.js", "Express", "MongoDB"
];

export default function About() {
    const router = useRouter();

    return (
        <div className="px-3 sm:px-5 md:px-16 lg:px-20 mt-20">

            <div className="flex sm:flex-row justify-between items-center md:px-32 lg:px-48 ">
                <button
                    onClick={() => router.push("/")}
                    className="flex gap-2 rounded-md hover:bg-[#262525]/45 items-center justify-center group px-3 py-2 cursor-pointer"
                >
                    <ArrowLeft className="group-hover:text-white text-[#999999] w-4 h-4 transition-colors" />
                    <p className="font-medium text-[#999999] group-hover:text-white text-xs  transition-colors">
                        Back to Projects
                    </p>
                </button>

                <a
                    href="https://drive.google.com/file/d/11rH4IMGuGgS2_J3OrPWznRo1-6aVCJY-/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="px-3 py-2 text-center rounded-[5px] hover:bg-[#262525]/45 font-medium text-[#999999] hover:text-white text-xs cursor-pointer">
                        Download Resume
                    </div>
                </a>
            </div>

            <div className="flex flex-col items-center mt-12">
                <CometCard translateDepth={8}>
                    <Image
                        src="/photo.svg"
                        alt="Profile pic"
                        width={260}
                        height={260}
                    />
                </CometCard>

                <p className="mt-8 text-2xl sm:text-3xl md:text-4xl font-medium text-center">
                    Damanpreet Kaur
                </p>

                <div className="mt-6 max-w-xl text-[#999999] font-medium text-sm md:text-base leading-6 text-center">
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
                <p className="font-medium text-base md:text-lg lg:text-xl">Tech-stack</p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 max-w-lg">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="rounded-full bg-[#201F1F] border border-[#201F1F] hover:border-[#7E7E7E] px-4 py-1 cursor-default"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};