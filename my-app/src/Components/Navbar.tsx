import { useState } from "react"

export function Navbar() {
  const [mobileMenu ,setMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 text-white px-4 sm:px-6 lg:px-12 py-6 flex items-center justify-between bg-[#1E1E1E]/100 background-blur:md">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white text-2xl font-bold rounded-full w-10 h-10 flex items-center justify-center">
            D
          </div>
          <span className="text-xl font-semibold">Daman</span>
        </div>

        <div className="hidden md:flex gap-6 text-xl font-light">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

        <div className="md:hidden">
          <button onClick={()=>{
            setMenu(!mobileMenu)
          }}
          className="text-white text-2xl">☰</button>
        </div>
      </nav>
      
      {mobileMenu && (
        <div className="fixed top-[72px] left-0 w-full bg-[#1E1E1E] text-white flex flex-col gap-4 text-center py-6 md:hidden z-40">
          <a href="#home" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      )}
    </>
  );
}

