'use client'
import { useRouter } from "next/navigation";

const buttons = [
  { btn: "Projects", navigateTo: "/" },
  { btn: "About", navigateTo: "/about" }
]

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed top-0 w-full left-0 backdrop-blur-md bg-[#0a0a0a]/50 z-50">
      <div className="flex justify-between py-1 px-14 md:px-24 lg:px-28 xl:px-[194px]">

        <div className="px-2 py-2 md:py-3 text-base md:text-2xl font-normal tracking-[3px] hover:text-[#999999] cursor-default">daman</div>

        <div className="flex gap-2 sm:gap-4 p-1 md:p-2">
          {buttons.map(({ btn, navigateTo }, index) => (
            <button
              key={index}
              onClick={() => {
                router.push(navigateTo);
              }}
              className="w-[70px] h-[30px] md:w-[90px] md:h-[39px] font-normal text-[12px] md:text-base text-white tracking-[0px] rounded-md  hover:bg-[#262525]/45 hover:text-[#999999] cursor-pointer">
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#1C1C1C]"></div>
    </nav>
  );
}

export default Navbar;