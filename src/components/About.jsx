function About () {
    return (
        <div className="flex gap-10 bg-surface px-section-x py-section-y border-b border-section-border">
            <div className="max-w-[412px]">
                <p className="text-strong font-body text-body-xs font-bold ">01 · À PROPOS</p>
                <h2 id="about" className="text-h2 text-heading font-bold font-heading mt-4 leading-none">Une reconversion guidée par l'envie de créer.</h2>
            </div>
            <div className="text-text font-body text-body-base pt-8 leading-8">
                <p className="mb-5">J'ai découvert le développement web par curiosité, avant de rejoindre le parcours Développeur Web d'OpenClassrooms avec l'accompagnement d'un mentor.</p>
                <p>Huit projets professionnalisants m'ont permis de pratiquer l'intégration responsive, JavaScript, les API, React, Node.js, la sécurité, le SEO et la gestion de projet.</p>
            </div>
        </div>
    )
}

export default About