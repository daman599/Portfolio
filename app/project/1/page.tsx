import Project from "@/components/commonComponent/Project";

const Project1 = () =>{
    
    return <>
             <Project
             project_name = {"Funflix"}
             project_description = {"AI-powered resume analyzer that intelligently matches your resume with the most relevant and up-to-date job postings based on your skills and experience."}
             project_pic = {"/Funflix.png"}
             live_link = {"https://funflix-frontend.onrender.com/"}
             code_link = {"https://github.com/daman599/Funflix"}
             frontend_techStack = {["Javascript","React.js","TailwindCss"]}
             backend_techStack = {["Node.js","Express","MongoDB","JWT","OAuth"]}
             things_learnt={["writing clean & organized code","used caching for fetching same jobs data again & again"]}
             />
        </>
}

export default Project1;