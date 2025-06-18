import { SiHtml5, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMongodb ,SiTailwindcss } from "react-icons/si";

export function Skills() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "TailwindCss", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
  ];

  return (
    <section id="skills" className="w-full bg-[#1E1E1E] py-12 px-6 md:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#2A2A2A] hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/30"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
