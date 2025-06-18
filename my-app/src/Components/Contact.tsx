import { FaGithub, FaEnvelope, FaTwitter } from "react-icons/fa";

export function ContactMe() {
  return (
    <section id="contact" className="w-full bg-[#1E1E1E] text-white py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-lg">
          Connect Me
        </h2>


        <div className="flex justify-center items-center gap-8 text-3xl">
          <a
            href="https://github.com/daman599"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:damanpreetk117@gmail.com"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://twitter.com/daman76752"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
