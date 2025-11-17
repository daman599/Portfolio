'use client'
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0a0a0a]/50">
      <div className="flex justify-between items-center py-1 px-4 sm:px-6 md:px-10 lg:px-28 xl:px-44">
        <span className="text-lg tracking-[3px] text-white hover:text-[#999999] select-none">
          daman
        </span>

        <div className="flex items-center justify-center md:gap-3 gap-0.5">
          <Link
            href="/work"
            className="p-2 md:px-3 md:py-2 text-xs md:text-sm text-white font-normal rounded-md transition-colors duration-300 hover:bg-[#262525]/45 hover:text-[#999999]"
          >
            Work
          </Link>

          <Link
            href="/about"
            className="p-2 md:px-3 md:py-2 text-xs md:text-sm text-white font-normal rounded-md transition-colors duration-300 hover:bg-[#262525]/45 hover:text-[#999999]"
          >
            About
          </Link>
        </div>
      </div>

      <div className="w-full h-px bg-[#2727272b]" />
    </nav >
  );
};

export default Navbar;