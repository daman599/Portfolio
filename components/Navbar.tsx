'use client'
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  
  return (
    <>
      <nav className="fixed top-0 w-full backdrop-blur-md bg-[#0a0a0a]/50 z-50">
        <div className="flex justify-between my-2">
          <div className=" ml-50 w-[103px] h-[44px] py-1 px-2 text-[24px] font-normal tracking-[3px] hover:text-[#999999] cursor-default">daman</div>
          <div className="flex gap-4 mr-50 py-1 px-2 max-w-64">
            <button onClick={()=>{
              router.push("/");
            }}
            className="w-[90px] h-[39px] font-normal text-[16px] text-white tracking-[0px] rounded-[5px]  hover:bg-[#262525]/45 hover:text-[#999999] cursor-pointer">Projects</button>
            
            <button onClick={()=>{
              router.push("/about");
            }}
            className="w-[90px] h-[39px] font-normal text-[16px] text-white tracking-[0px] rounded-[5px]  hover:bg-[#262525]/45 hover:text-[#999999] cursor-pointer">About</button>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#1C1C1C]"></div>
      </nav>
    </>
  );
}

export default Navbar;