import { useState } from "react";
import { Menu, X} from "lucide-react";

function Navigation () {
    const [open, setopen] = useState(false);
    return (
        <div className="sticky top-0  bg-background/95 backdrop-blur-sm"> 
            <nav className="flex justify-between px-nav-x py-nav-y border-b border-section-border">
                <a href="#header" className="text-xl font-heading text-heading font-bold">
                    Nessrine<span className="text-strong">.Dev</span>
                </a>

                <button 
                className="md:hidden nav-link" 
                onClick={() => setopen(!open)}  
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {open ? <X size={20}/> : <Menu size={20}/>}
                </button>
                
                <ul className="hidden md:flex gap-1 text-body-sm font-body font-semibold text-text">
                    <li><a href="#header" className="nav-link">Accueil</a></li>
                    <li><a href="#about" className="nav-link">À propos</a></li>
                    <li><a href="#skills" className="nav-link">Compétences</a></li>
                    <li><a href="#projects" className="nav-link">Projets</a></li>
                    <li><a href="#careerPath" className="nav-link">Parcours</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
            {open && (
                <div className="w-full px-5 py-3 border border-t border-section-border">
                    <ul className="flex flex-col  text-body-sm font-body font-medium text-text">
                        <li className="py-2.5" ><a href="#header" onClick={() => setopen(false)} >Accueil</a></li>
                        <li className="py-2.5"><a href="#about" onClick={() => setopen(false)}>À propos</a></li>
                        <li className="py-2.5"><a href="#skills" onClick={() => setopen(false)}>Compétences</a></li>
                        <li className="py-2.5"><a href="#projects" onClick={() => setopen(false)}>Projets</a></li>
                        <li className="py-2.5"><a href="#careerPath" onClick={() => setopen(false)}>Parcours</a></li>
                        <li className="py-2.5"><a href="#contact" onClick={() => setopen(false)}>Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
    
    )
}

export default Navigation