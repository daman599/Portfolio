"use client"

import { GitMerge } from "lucide-react";
import Image from "next/image";
import { motion, useAnimate, stagger } from "motion/react";
import { useEffect } from "react";

interface pathType {
    path: string,
}

interface contributionsType {
    contribution: string,
}

const videosPath: pathType[] = [
    { path: "navbar.mp4" },
    { path: "gradButton.mp4" },
    { path: "ContriCard.mp4" },
    { path: "TweetCard.mp4" },
    { path: "Avatar.mp4" },
    { path: "planSwitch.mp4" },
    { path: "AIcard.mp4" },
    { path: "createBtn.mp4" },
    { path: "Expandcard.mp4" },
    { path: "expensesCard.mp4" },
    { path: "clickAnimation.mp4" },
];

const Contributions: contributionsType[] = [
    { contribution: "fix(ui): resolve overflow bug in filter div with overflow-hidden" },
    { contribution: "layout improvements" },
];

const designPicsPath: pathType[] = [
    { path: "hero1.png" },
    { path: "hero2.png" },
    { path: "hero3.png" },
    { path: "hero4.png" },
    { path: "hero5.png" },
    { path: "hero6.png" },
    { path: "hero7.png" },
];

export default function Work() {
    const text = "This is what I mean when I say, I love creating UI components.";
    const [scope, animate] = useAnimate();

    function startAnimating() {
        animate("span", {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
        }, {
            duration: 1,
            ease: "easeInOut",
            delay: stagger(0.2),
        });
    }

    useEffect(() => {
        startAnimating();
    }, []);

    return (
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-28 xl:px-52 mt-14 md:mt-20">
            <div ref={scope}>
                {text.split(" ").map((word, i) => (
                    <motion.span key={i}
                        style={{
                            opacity: 0,
                            y: 10,
                            filter: "blur(10px)",
                        }}
                        className="text-base md:text-lg lg:text-xl font-medium text-[#9a9a9a]"
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeIn" }}
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7 rounded-lg md:rounded-xl mt-5 md:mt-8 bg-[#24242485] p-3 md:p-5">
                {videosPath.map((video, i) => (
                    <div key={i} className="aspect-video overflow-hidden rounded-lg md:rounded-xl">
                        <video
                            src={`/uiComp-videos/${video.path}`}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </motion.div>

            <div className="w-full h-[1px] bg-[#1C1C1C] my-8 md:my-10"></div>

            <div className="flex flex-col items-start justify-center gap-5">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    viewport={{ once: true }}
                    className="text-base md:text-lg lg:text-xl text-[#7c7c7c]">Open Source Contributions:-</motion.span>

                {Contributions.map((contri, i) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, ease: "easeIn" }}
                        viewport={{ once: true }}
                        key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-1">

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2 ">
                            <motion.div
                                animate={{ boxShadow: ["0 0 10px #9e63d1", "0 0 5px #9e63d1", "0 0 10px #9e63d1"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="px-2 py-1 md:px-3 md:py-1.5 gap-2 flex items-center justify-center bg-[#542081] rounded-full">
                                <GitMerge size={18} />
                                <span className="text-xs md:text-sm">Merged</span>
                            </motion.div>

                            <span className="text-sm md:text-base lg:text-lg text-[#868686]">
                                {contri.contribution}
                            </span>
                        </div>

                        <a href="https://github.com/Hussain-hamim/DevSync" target="_blank" rel="noopener noreferrer">
                            <span className="text-sm md:text-base text-[#40c463]">DevSync</span>
                        </a>
                    </motion.div>
                ))}
            </div>

            <div className="w-full h-[1px] bg-[#1C1C1C] my-8 md:my-10"></div>

            <div className="flex flex-col items-start justify-center w-full gap-5">
                <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    viewport={{ once: true }}
                    className="text-base md:text-lg lg:text-xl text-[#6f6f6f] font-medium ">Checkout my recent Hero section Designs:-</motion.span>

                <div className="relative overflow-hidden w-full mt-4 md:mt-8">
                    <div className="pointer-events-none absolute top-0 left-0 bottom-0 h-full w-6 md:w-20 bg-gradient-to-r from-[#000000] to-transparent z-20"></div>

                    <div className="pointer-events-none absolute top-0 right-0 bottom-0 h-full w-6 md:w-20 bg-gradient-to-l from-[#000000] to-transparent z-20"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, ease: "easeIn" }}
                        viewport={{ once: true }}
                        className="flex items-center animate-infinite-scroll">
                        {[...designPicsPath, ...designPicsPath].map((design, i) => (
                            <div key={i} className="px-5">
                                <Image
                                    src={`/designs/${design.path}`}
                                    width={300}
                                    height={300}
                                    alt="design"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </div >
    );
}