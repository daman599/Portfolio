import { HoverEffect } from "./ui/card-hover-effect";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

export function Skills() {
  return (
    <section id="skills" className="w-full bg-primary py-12 md:py-20">
      <div className="container md:max-w-[1440px] m-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-tertiary bg-clip-text">
          Tech Stack
        </h2>
        <p className="text-center text-secondary text-lg sm:text-xl max-w-3xl mx-auto mb-12">
          These are the technologies and frameworks I use to build modern,
          responsive, and user-friendly websites.
        </p>

        <HoverEffect
          items={[
            {
              title: "TailwindCSS",
              icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
            },
            {
              title: "JavaScript",
              icon: <SiJavascript className="text-yellow-400 text-3xl" />,
            },
            {
              title: "TypeScript",
              icon: <SiTypescript className="text-blue-400 text-3xl" />,
            },
            {
              title: "React",
              icon: <SiReact className="text-cyan-400 text-3xl" />,
            },
            {
              title: "Next.js",
              icon: <SiNextdotjs className="text-gray-700 text-3xl" />,
            },
            {
              title: "Node.js",
              icon: <SiNodedotjs className="text-green-500 text-3xl" />,
            },
            {
              title: "Express",
              icon: <SiExpress className="text-gray-300 text-3xl" />,
            },
            {
              title: "MongoDB",
              icon: <SiMongodb className="text-green-600 text-3xl" />,
            },
          ]}
        />
      </div>
    </section>
  );
}
