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
      <section className="flex flex-col items-center gap-[142px] py-[130px] px-[16px] md:py-[142px] md:px-[142px]">
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
