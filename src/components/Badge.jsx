function Badge ({children, className = "" }) {
    return (
        <span className={`inline-block  bg-primary text-text-button font-semibold  rounded-3xl ${className}`}>
            {children}
        </span>
    )
}
export default Badge