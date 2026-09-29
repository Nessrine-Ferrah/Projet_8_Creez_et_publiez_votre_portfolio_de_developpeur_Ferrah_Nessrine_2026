import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";

function Projects () {
    return (
        <div id="projects" className="bg-projects px-section-x py-section-y border-b border-section-border">
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
                <div>
                    <p className="text-strong font-body text-body-xs font-bold">03 · RÉALISATIONS</p>
                    <h2 className="text-4xl sm:text-h2 text-heading font-bold font-heading mt-4 leading-none" >Mes projets</h2>
                </div>
                <p className="max-w-112 text-text text-body-sm">Clique sur « Voir les détails » pour découvrir les objectifs, les apprentissages et les futurs liens de chaque projet.</p>
            </div>
           <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:items-start mt-12">
                {projectData.map((project, index) => (
                <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects