import { useState } from "react";

export function Navbar() {
  const [mobileMenu, setMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full text-secondary z-50  py-6  bg-primary/100 background-blur:md">
        <div className="container md:max-w-[1440px] m-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-tertiary text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
                D
              </div>
              <span className="text-xl font-semibold">Daman</span>
            </div>

            <div className="hidden md:flex gap-6 text-xl font-light leading-none">
              <a href="#home" className="hover:text-tertiary transition">
                Home
              </a>
              <a href="#about" className="hover:text-tertiary transition">
                About
              </a>
              <a href="#projects" className="hover:text-tertiary transition">
                Projects
              </a>
              <a href="#skills" className="hover:text-tertiary transition">
                Skills
              </a>
              <a href="#contact" className="hover:text-tertiary transition">
                Contact
              </a>
              <a href="https://github.com/daman599/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tertiary transition">
                View Code
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMenu(!mobileMenu)}
                className="text-white text-3xl"
              >
                {mobileMenu ? "✕" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenu && (
        <div className="fixed top-[72px] left-0 w-full bg-primary text-secondary flex flex-col gap-4 text-center py-6 md:hidden z-40">
          <a href="#home" className="hover:text-tertiary transition">
            Home
          </a>
          <a href="#about" className="hover:text-tertiary transition">
            About
          </a>
          <a href="#projects" className="hover:text-tertiary transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-tertiary transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-tertiary transition">
            Contact
          </a>
          <a href="https://github.com/daman599/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tertiary transition">
            View Code
          </a>
        </div>
      )}
    </>
  );
}
