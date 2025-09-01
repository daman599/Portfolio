import Project from "@/components/commonComponents/Project";

export default function Project2(){
    return (
             <Project
             project_name = {"ResumeMatch AI"}
             project_description = {"AI-powered resume analyzer that intelligently matches your resume with the most relevant and up-to-date job postings."}
             project_pic = {"/ResumeMatch_AI.png"}
             live_link = {"https://resume-match-ai-three.vercel.app"}
             code_link = {"https://github.com/daman599/Resume-match-ai"}
             frontend_techStack = {["Next.js","TailwindCss","Zustand"]}
             backend_techStack = {["NextAuth","MongoDB","Groq API"]}
             things_learnt={["writing clean & organized code","used caching for fetching same jobs data again & again"]}
             />
    );
}