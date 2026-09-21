function SkillItem ({title, content, date, variant="skills"}) {

    const titleClasses =
        variant === "skills" ? "text-h3 text-strong font-bold font-heading" 
        : "text-lg text-heading font-bold font-heading mt-3"

    return (
        <div className="p-6 bg-surface border border-section-border rounded-lg">
            {date && (
                <p className="text-body-sm text-accent font-bold font-body ">{date}</p>
            )}
            <h3 className={titleClasses}>{title}</h3>
            <p className="text-body text-description text-text text-sm font-body mt-3 leading-6">{content}</p>
        </div>
    )
}

export default SkillItem 