import { ArrowDown, Mail} from "lucide-react"
import Badge from "../Badge"
import Button from "../Button"
import HeaderCodeCard from "./HeaderCodeCard"

function Header () {
    return (
        <div id="header" className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-16 bg-background px-section-x py-section-y border-b border-section-border">
            <div className="max-w-160">
                <Badge className="px-4 py-2 text-body-sm">
                    <p><span class="inline-block w-2 h-2 rounded-full bg-accent"></span> Disponible pour une première opportunité</p>
                </Badge>
                <div className="mt-7">
                    <h1 className="max-w-[434px]  font-heading text-5xl sm:text-h1 text-heading font-h1 leading-14 sm:leading-19">Nessrine <span className="text-strong">Développeuse web.</span></h1>
                    <p className="mt-7 text-lg font-body text-text ">Je transforme des idées en expériences web claires, accessibles et agréables à utiliser, du front-end au back-end.</p>
                </div>
                <div className="flex gap-4 mt-9">
                    <Button  icon={<ArrowDown size={16}/>} variant={"dark"} size={"md"} href={"#projects"}>
                        Voir mes projets
                    </Button>
                    <Button icon={<Mail size={16}/>} variant={"clear"} size={"md"} href={"#contact"}>
                        Me contacter 
                    </Button>
                </div>
            </div>
            <HeaderCodeCard/>
        </div>
    )
}

export default Header