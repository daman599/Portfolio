import { projectsData } from "@/lib/projectsData";
import Project from "@/components/commonComponents/Project";

export default async function Page({ params }: { params: { id: string } }) {

  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-red-500 text-xl md:text-2xl lg:text-3xl text-center">
          Project not found !
        </h1>
      </div>
    );
  }

  return <Project {...project} />
}
