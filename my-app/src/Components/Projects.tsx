export function Projects() {
  const projects = [
    {
      title: "Funflix",
      description:
        "A movie platform to find where films are streaming. Built with React, MongoDB, and TMDB API.",
      image: "/funflix.png",
      liveLink: "https://funflix-frontend.onrender.com",
      codeLink: "https://github.com/daman599/Funflix",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal developer portfolio, showcasing projects, skills, and contact options.",
      image: "/portfolio.png",
      liveLink: "http://localhost:5173",
      codeLink: "https://github.com/daman599/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#1E1E1E] text-white py-12 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl py-8 font-bold mb-10 text-center relative w-fit mx-auto">
          <span className="text-gray-400">My </span>
          <span className="text-blue-500 relative inline-block">
            Projects
            <svg viewBox="0 0 130 20" preserveAspectRatio="none" className="absolute -bottom-5 left-0 w-full h-5">
              <path
                d="M8,16 C30,25 50,5 125,15"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            <svg viewBox="0 0 130 20" preserveAspectRatio="none" className="absolute -bottom-4 left-0 w-full h-5 opacity-70">
              <path
                d="M2,16 C25,27 60,6 128,14"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 list-none">
          {projects.map((project, index) => (
            <li key={index} className="min-h-[18rem]">
              <div className="relative h-full rounded-2xl border border-neutral-700 p-1 md:rounded-3xl md:p-1 overflow-hidden">

                <div className="relative z-10 flex flex-col h-full justify-between gap-4 rounded-2xl p-6 bg-[#2A2A2A]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg object-contain"
                  />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-blue-400">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                    >
                      Live
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
