import Badge from "../Badge"
import Button from "../Button"
import HeaderCodeCard from "./HeaderCodeCard"

function Header () {
    return (
        <div className="flex justify-between items-center bg-background px-section-x py-section-y border-b border-section-border">
            <div className="max-w-160">
                <Badge>
                    <p><span class="inline-block w-2 h-2 rounded-full bg-accent"></span> Disponible pour une première opportunité</p>
                </Badge>
                <div className="mt-7">
                    <h1 id="header" className="font-heading text-h1 text-heading font-h1 leading-19">Nessrine <span className="text-strong">Développeuse web.</span></h1>
                    <p className="mt-7 text-lg font-body text-text ">Je transforme des idées en expériences web claires, accessibles et agréables à utiliser, du front-end au back-end.</p>
                </div>
            </div>
            <HeaderCodeCard/>
        </div>
    )
}

export default Header