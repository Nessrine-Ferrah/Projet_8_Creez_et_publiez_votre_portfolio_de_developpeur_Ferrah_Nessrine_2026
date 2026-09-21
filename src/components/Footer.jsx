import Button from "./Button"

function Footer () {
    return (
        <div className="bg-background px-footer-x ">
           <div className="py-footer-y"> 
                <span className="text-base font-heading text-heading font-bold">Nessrine <span className="text-strong">.Dev</span></span>
                <p className="text-body-sm text-text font-body mt-1">Développeuse web junior · Portfolio 2026</p>
           </div>
            <p className="pb-footer-bottom text-text font-body text-body-xs">© 2026 Nessrine. Portfolio réalisé dans le cadre du projet 8 du parcours Développeur Web OpenClassrooms.</p>
        </div>
    )
}

export default Footer