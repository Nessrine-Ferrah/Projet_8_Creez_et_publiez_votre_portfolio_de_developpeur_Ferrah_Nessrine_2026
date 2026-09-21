function HeaderCodeCard () {
    return (
        <article className="flex flex-col w-full max-w-130 max-h-[292px] bg-surface border border-section-border rounded-lg shadow-lg">
            <div className="flex items-center justify-between max-h-10 px-5 py-3 border-b border-section-border">
                <div className="flex gap-2">
                    <span class="inline-block w-3 h-3 rounded-full bg-accent"></span>
                    <span class="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    <span class="inline-block w-3 h-3 rounded-full bg-strong"></span>
                </div>
                <p className="font-mono text-text text-body-xs">nessrine.js</p>
            </div>
           <div className="p-6 text-base font-mono leading-6 ">
                <p className="mb-2">
                    <span className="text-accent">const </span> 
                    <span className="text-strong">developpeuse </span>
                    <span className="text-heading" >{`= {`}</span>
                </p>
                <p className="pl-5 mb-2 text-heading">
                    nom: <span className="text-text-code">"Nessrine"</span>,
                </p>
                <p className="pl-5 mb-2 text-heading">
                    profil: <span className="text-text-code">"Curieuse & rigoureuse"</span>,
                </p>
                <p className="pl-5 mb-2 text-heading">
                    outils: {`[`}<span className="text-text-code">"React", "Node.js"</span>{`],`}
                </p>
                <p className="pl-5 mb-2 text-heading">
                    objectif: <span className="text-text-code">"Créer avec soin"</span>
                </p>
                <span className="text-heading">{`};`}</span>
           </div>
        </article>
    )
}

export default HeaderCodeCard