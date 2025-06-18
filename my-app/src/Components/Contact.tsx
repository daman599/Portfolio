import { FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export function ContactMe() {
  return (
    <section
      id="contact"
      className="w-full bg-[#1E1E1E] text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-400 to-gray-500 drop-shadow-[0_0_15px_rgba(147,197,253,0.25)]">
          Connect With Me
        </h2>

        <div className="flex justify-center items-center gap-8 text-3xl">
          {[
            {
              href: "https://github.com/daman599",
              icon: <FaGithub />,
              color: "hover:text-gray-300",
            },
            {
              href: "mailto:damanpreetk117@gmail.com",
              icon: <FaEnvelope />,
              color: "hover:text-blue-300",
            },
            {
              href: "https://twitter.com/daman76752",
              icon: <FaTwitter />,
              color: "hover:text-sky-400",
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-[#2A2A2A]/80 backdrop-blur-md border border-white/5 hover:scale-110 transition-all duration-300 shadow-md ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

