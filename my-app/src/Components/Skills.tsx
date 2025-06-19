import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss
} from "react-icons/si";

export function Skills() {
  const skills = [
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }
  ];

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

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] flex flex-col items-center justify-center p-4 rounded-2xl bg-[#2A2A2A] hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/30"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-lg font-medium text-center text-gray-200">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

