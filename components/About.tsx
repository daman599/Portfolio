import { ArrowLeft } from 'lucide-react';

const About = ()=>{
 return ( 
 <div className='flex ml-96 mr-96 justify-between  mt-24'>
     
    <div className='flex gap-3 rounded-[5px] hover:bg-[#262525]/45 items-center justify-center group  w-[165px] h-[37px] px-2 py-1.5'>
        <ArrowLeft className='group-hover:text-white text-[#999999] w-5 transition-colors h-9'/> 
        <button className='font-medium text-[#999999] group-hover:text-white text-[14px] transition-colors'>Back to Projects</button>
    </div>

     <button className='px-4 py-1.5 rounded-[5px] hover:bg-[#262525]/45 [165px] h-[37px] font-medium text-[#999999]
      hover:text-white text-[14px]'>
        Download Resume
    </button>
 </div>
 );
}

export default About;