import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

const About = () => {

    const skills = ["Javascript", "Typrescript", "TailwindCss", "React",
        "Next.js", "Node.js", "Express", "MongoDB"];

    return (
        <>
            <div className='flex ml-96 mr-96 justify-between  mt-24'>

                <div className='flex gap-3 rounded-[5px] hover:bg-[#262525]/45 items-center justify-center group  w-[165px] h-[37px] px-2 py-1.5'>
                    <ArrowLeft className='group-hover:text-white text-[#999999] w-5 transition-colors h-9' />
                    <button className='font-medium text-[#999999] group-hover:text-white text-[14px] transition-colors'>Back to Projects</button>
                </div>

                <button className='px-4 py-1.5 rounded-[5px] hover:bg-[#262525]/45 [165px] h-[37px] font-medium text-[#999999]
      hover:text-white text-[14px]'>
                    Download Resume
                </button>
            </div>

            <div className='ml-24 flex-col'>
                <Image
                    src="/photo.svg"
                    alt="My pic"
                    width={310}
                    height={310}
                    className='mt-[40px] ml-[415px]'
                />
                <p className='ml-[415px] mt-[38px]  text-[36px] font-medium'>Damanpreet Kaur</p>

                <div className='ml-[415px] mt-[38px] w-[451px] h-[150px] text-[#999999] font-medium text-[16px] leading-[25px]'>
                    <p>I’m BCA final-year student from Punjab, India, passionate about building modern web applications using modern technologies.</p>

                    <p className='mt-5'>I enjoy creating creative designs using Figma and then
                        converting into functional and responsive interfaces.</p>
                </div>

                <p className='ml-[415px] mt-[47px] font-medium text-[20px] leading-[25px]'>Tech-stack</p>

                <div className='mt-[48px] ml-[415px] w-[406px] h-[121px] flex flex-wrap gap-3 relative'>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className=' rounded-full bg-[#201F1F] border border-[#201F1F] hover:border-[#7E7E7E] px-[15px] py-[3px] cursor-default'>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default About;