'use client'

const Navbar = ()=>{
  return (
    <>
    <nav className="fixed top-0 w-full">
    <div className="flex justify-between my-2">
      <div className="ml-50 w-[103px] h-[44px] py-1 px-2 text-[24px] tracking-[3px] hover:text-[#999999] cursor-default">daman</div>
      <div className="flex gap-4 mr-50 py-1 px-2 max-w-64">
          <button className="w-[90px] h-[39px] text-[16px] font-normal tracking-[0px] rounded-[5px]  hover:bg-[#262525] hover:bg-opacity-45 hover:text-[#999999]">Projects</button>
          <button className="w-[90px] h-[39px] text-[16px] font-normal tracking-[0px] rounded-[5px] hover:bg-[#262525] hover:bg-opacity-45 hover:text-[#999999]">About</button>
      </div>
    </div>
    <div className="w-full h-[1px] bg-[#1C1C1C]"></div>
   </nav>
    </>
  );
}

export default Navbar;