import { careerData } from "./careerData"
import Item from "../Item"

function CareerPath () {
    return (
        <div className="bg-background px-section-x py-section-y border-b border-section-border">
            <div>
                <p className="text-strong font-body text-body-xs font-bold">04 · PARCOURS</p>
                <h2 id="careerPath" className="text-h2 text-heading font-bold font-heading mt-4 leading-none">Ma progression</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-12">
                {careerData.map((career, index) => (
                    <Item 
                        key={index} 
                        date={career.date} 
                        title={career.title} 
                        content={career.content}
                        variant="career"
                    />
                ))}
            </div>
        </div>
    )
}

export default CareerPath