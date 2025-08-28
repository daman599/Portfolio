import Project from "@/components/commonComponent/Project";

export default function Project1(){
    return ( 
             <Project
             project_name = {"Funflix"}
             project_description = {"Funflix is a smart movie discovery platform that helps users instantly find out which streaming service a movie is available on."}
             project_pic = {"/Funflix.png"}
             live_link = {"https://funflix-frontend.onrender.com/"}
             code_link = {"https://github.com/daman599/Funflix"}
             frontend_techStack = {["Javascript","React.js","TailwindCss"]}
             backend_techStack = {["Node.js","Express","MongoDB","JWT","OAuth"]}
             things_learnt={["this project helped me to understand the workflow of a fullstack web application ",
                "understood how the React has made life easy for creating dynamic websites"]}
             />
    );
}