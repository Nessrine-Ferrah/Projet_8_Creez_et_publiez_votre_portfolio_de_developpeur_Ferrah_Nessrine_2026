function About () {
    return (
        <div id="about" className="flex flex-col lg:flex-row lg:gap-10 bg-surface px-section-x py-section-y border-b border-section-border ">
            <div className="lg:max-w-[412px]">
                <p className="text-strong font-body text-body-xs font-bold">01 · À PROPOS</p>
                <h2 className="text-4xl sm:text-h2 text-heading font-bold font-heading mt-4 leading-none">Une reconversion guidée par l'envie de créer.</h2>
            </div>
            <div className="text-text font-body text-body-base pt-8 leading-8 text-justify lg:max-w-2xl">
                <p className="mb-5">J’ai découvert le développement web par curiosité, avant de rejoindre le parcours Développeur Web d’OpenClassrooms, accompagné par un mentor.</p>
                <p className="mb-5">Sept projets professionnalisants m’ont permis de pratiquer l’intégration responsive, le JavaScript, les API, React, Node.js, la sécurité, le SEO et la gestion de projet.</p>
                <p className="mb-5">Ce que j’aime le plus dans ce métier, c’est concevoir des interfaces modernes et esthétiques. Le frontend me passionne, car il allie créativité et technique : j’aime transformer une maquette en une interface fluide, agréable et visuellement cohérente.</p> 
                <p className="mb-5">Mon objectif est de créer des expériences utilisateurs claires, dynamiques et élégantes, où chaque détail visuel contribue à la qualité du site.</p>
            </div>
        </div>
    )
}

export default About