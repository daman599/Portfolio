import { HoverEffect } from "./ui/card-hover-effect"

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";

export function Skills() {
 
  return (
    <section
      id="skills"
      className="w-full bg-[#1E1E1E] py-25 px-6 md:px-20 text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
        Tech Stack
      </h2>
<p className="text-center text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
        These are the technologies and frameworks I use to build modern, responsive, and user-friendly websites.
      </p>


<HoverEffect
  items={[
    { title: "HTML", icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
    { title: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 text-3xl" /> },
    { title: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
    { title: "TypeScript", icon: <SiTypescript className="text-blue-400 text-3xl" /> },
    { title: "React", icon: <SiReact className="text-cyan-400 text-3xl" /> },
    { title: "Node.js", icon: <SiNodedotjs className="text-green-500 text-3xl" /> },
    { title: "Express", icon: <SiExpress className="text-gray-300 text-3xl" /> },
    { title: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
  ]}
/>
    </section>
  );
}


