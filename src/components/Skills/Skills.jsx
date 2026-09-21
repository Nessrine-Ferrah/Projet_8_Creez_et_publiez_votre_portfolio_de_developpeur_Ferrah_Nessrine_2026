import Item from "../Item"
import {skillData} from "./skillData"

function Skills () {
    return (
        <div className="bg-background px-section-x py-section-y border-b border-section-border">
            <div>
                <p className="text-strong font-body text-body-xs font-bold">02 · COMPÉTENCES</p>
                <h2 id="skills" className="text-h2 text-heading font-bold font-heading mt-4 leading-none">Apprises en construisant.</h2>
            </div> 
            <div className="grid grid-cols-2 gap-5 mt-12">
                {skillData.map((skill, index) => (
                    <Item 
                        key={index} 
                        title={skill.title} 
                        content={skill.content}
                        variant="skills"
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills