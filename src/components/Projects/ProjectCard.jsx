import Badge from "../Badge";
import Button from "../Button";
import { useState } from 'react';

function ProjectCard ({project}) {
    const [ open, setOpen ] = useState(false)
    return (
        <article className="bg-surface border border-section-border rounded-lg p-6 shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full object-cover aspect-video rounded-lg"
            />

            <div className="mt-4 border-b border-section-border">
                <p className="text-body-xs text-accent font-bold">{project.date}</p>
                <h3 className="text-h3 text-heading font-bold mt-2">{project.title}</h3>
                <p className="text-body-sm text-text mt-3">{project.contenu}</p>

                <div className="flex flex-wrap gap-2 mt-4 pb-5">
                    {project.items.map((item, index) => (
                        <Badge key={index} className="px-3 py-1.5 text-body-xs">{item}</Badge>
                    ))}
                </div> 
            </div>

            <button onClick={() => setOpen(!open)} className="mt-5 text-strong font-body text-body-sm font-bold cursor-pointer">
                Voir les détails
            </button>

            {open && (
                <div className="mt-5">
                    <p className="text-heading font-bold">Objectifs du projet</p>
                    <ul className="list-disc pl-5 mt-2 text-body-sm text-text mb-6 marker:text-accent marker:text-xs">
                        {project.objectifs.map((objectif, index) => (
                        <li key={index}>{objectif}</li>
                        ))}
                    </ul>
                    <p className="text-heading font-bold">Compétences & réalisations</p>
                    <ul className="list-disc pl-5 mt-2 text-body-sm text-text mb-6 marker:text-accent marker:text-xs">
                        {project.competences.map((competence, index) => (
                        <li key={index}>{competence}</li>
                        ))}
                    </ul>
                    <p className="text-heading font-bold">Axes d’amélioration</p>
                    <ul className="list-disc pl-5 mt-2 text-body-sm text-text mb-8 marker:text-accent marker:text-xs">
                        {project.axesAmelioration.map((axe, index) => (
                        <li key={index}>{axe}</li>
                        ))}
                    </ul>
                    <Button 
                        icon={<img  src="/icons/github-icon.svg" alt="lien gitHub" className="inline-block ml-1.5 w-5"/>} 
                        variant="dark" target="blank" 
                        href={project.github} 
                        size="sm"
                        external={true}
                    >
                        Voir sur GitHub 
                    </Button>
                </div>
            )}
        </article>
  )
}

export default ProjectCard