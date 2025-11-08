'use client'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0a0a0a]/50">
      <div className="flex justify-between items-center py-2 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-48">

        <div className="text-lg md:text-2xl tracking-[3px] text-white hover:text-[#999999] select-none">
          daman
        </div>

        <Link
          href="/about"
          className="px-3 py-1 md:px-4 md:py-2 text-sm md:text-base text-white font-normal rounded-md transition-colors duration-300 hover:bg-[#262525]/45 hover:text-[#999999]"
        >
          About
        </Link>
      </div>

      <div className="w-full h-px bg-[#1C1C1C]" />
    </nav>
  );
};

export default Navbar;