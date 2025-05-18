import { useState } from "react";
import ProjectCard from "@/sections/bodyComponents/ProjectCard";
import ProjectDialog from "@/sections/bodyComponents/projectDialog";
import projects from "@/data/projects";

export default function Body() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <section className="flex flex-col items-center gap-20 md:gap-32 py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </section>

      <ProjectDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </>
  );
}
