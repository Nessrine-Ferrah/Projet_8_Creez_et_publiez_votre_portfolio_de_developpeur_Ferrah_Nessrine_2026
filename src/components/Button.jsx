function Button ({children, variant = "dark", size = "md", href, icon, disabled = false, type = "button", className = "", external = false}) 
{
    const base =
        "inline-flex items-center justify-center text-body-sm font-semibold rounded-sm transition duration-300";

    const variants = {
        dark: "bg-strong text-background hover:bg-strong/90 shadow-sm",
        clear: "bg-background text-heading hover:bg-accent border border-section-border shadow-sm",
    };

    const sizes = {
        md: "h-10 px-8",
        sm: "h-8 px-3",
    };

    const classes = `
        ${base}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer"}
        ${className}
    `;
    
    // Si href 
    if (href) {
        return (
        <a 
            href={href} 
            className={classes}
            target={external ? "_blank" : undefined}        
            rel={external ? "noopener noreferrer" : undefined} 
        >
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </a>
        );
    }

    // Sinon button
    return (
        <button type={type} disabled={disabled} className={classes}>
            {children}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
}

export default Button