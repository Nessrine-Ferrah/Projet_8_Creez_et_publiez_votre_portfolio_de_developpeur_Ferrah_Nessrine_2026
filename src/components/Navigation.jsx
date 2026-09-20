function Navigation () {
    return (
        <nav className="bg-background/90 backdrop-blur-sm flex justify-between px-nav-x py-nav-y sticky top-0 border-b border-section-border">
            <a href="#header" className="text-xl font-heading text-heading font-bold">
                Nessrine<span className="text-strong">.Dev</span>
            </a>
            <ul className="flex gap-1 text-body-sm font-body font-semibold text-text">
                <li><a href="#header" className="nav-link">Accueil</a></li>
                <li><a href="#about" className="nav-link">À propos</a></li>
                <li><a href="#skills" className="nav-link">Compétences</a></li>
                <li><a href="#projects" className="nav-link">Projets</a></li>
                <li><a href="#careerPath" className="nav-link">Parcours</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation