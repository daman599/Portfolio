import { projectsData } from "@/lib/projectsData";
import Project from "@/components/common/Project";

export default async function Page({
   params,
}: {
   params: Promise<{ id: string }>
}) {
   const { id } = await params;

   const project = projectsData.find((p) => p.id === id);

   if (!project) {
      return (
         <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <h1 className="text-red-500 text-xl md:text-2xl text-center">
               Oops! Project not found.
            </h1>
         </div>
      );
   }

   return <Project {...project} />
}
