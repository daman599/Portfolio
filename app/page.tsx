import Hero from "@/components/landingpage/Hero";
import Projects from "@/components/landingpage/MyProjects";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Projects />
    </div>
  );
}
