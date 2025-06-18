export function Projects() {
  const projects = [
    {
      title: "Funflix",
      description: "A movie platform to find where films are streaming. Built with React, MongoDB, and TMDB API.",
      image: "/funflix.png",
      liveLink: "https://funflix-frontend.onrender.com",
      codeLink: "https://github.com/daman599/Funflix"
    },
    {
      title: "Portfolio Website",
      description: "My personal developer portfolio, showcasing projects, skills, and contact options.",
      image: "/portfolio.png",
      liveLink: "https://yourportfolio.com",
      codeLink: "https://github.com/daman599/portfolio"
    }
  ]
  return (
    <section id="projects" className="w-full bg-[#1E1E1E] text-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl py-8 font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">My</span>{' '}
          <span className="relative text-white inline-block">
            Projects
            <span className="absolute left-0 bottom-0 w-full h-2 bg-[url('/underline-rough.png')] bg-no-repeat bg-contain"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#2A2A2A] rounded-2xl shadow-lg p-5 hover:scale-[1.02] transition-all duration-300">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 w-full object-cover h-48" />
              <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="flex gap-4 mt-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                  Live
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}