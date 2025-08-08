export function Projects() {
  const projects = [
    {
      title: "ResumeMatch AI",
      description:
        "AI-powered resume analyzer that intelligently matches your resume with the most relevant and up-to-date job postings based on your skills and experience.",
      image: "/resume-match-ai.png",
      liveLink: "https://resume-match-ai-three.vercel.app",
      codeLink: "https://github.com/daman599/Resume-match-ai",
    },
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
      liveLink: "https://daman-eight.vercel.app/",
      codeLink: "https://github.com/daman599/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-primary text-secondary py-12 md:py-20 "
    >
      <div className="container md:max-w-[1440px] m-auto px-6">
        <h2 className="text-4xl md:text-5xl py-8 font-bold mb-10 text-center relative w-fit mx-auto">
          <span className="text-secondary">My </span>
          <span className="text-tertiary relative inline-block">
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

        <ul className="list-none max-w-4xl m-auto flex flex-col gap-10 justify-center items-center text-center">
          {projects.map((project, index) => (
            <li key={index} className="sticky top-24 ">
              <div className="relative  rounded-2xl border border-tertiary overflow-hidden p-1">

                <div className="relative z-10 flex flex-col h-full justify-between gap-4 rounded-xl p-6 bg-[#141414]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto rounded-lg object-contain"
                  />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-tertiary">
                      {project.title}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                  <div className="flex gap-4 justify-center items-center">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-tertiary text-white rounded-full text-center min-w-[100px] hover:bg-secondary hover:text-primary transition"
                    >
                      Live
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white rounded-full text-center min-w-[100px] hover:bg-white hover:text-black transition"
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
