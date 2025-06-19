import { FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export function ContactMe() {
  const links = [
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
  ];

  return (
    <section
      id="contact"
      className="w-full bg-[#1E1E1E] text-white py-16 px-6 md:px-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-500">
          Contact Me
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          I'm always open to collaborations, opportunities, or just a chat!
        </p>

        <div className="flex justify-center gap-6 text-2xl">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 rounded-full bg-[#2A2A2A]/70 backdrop-blur border border-white/10 transition-transform duration-300 hover:scale-110 shadow-sm ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


