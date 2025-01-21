export const Typography = ({children, color, isUnderline = true }) =>{
    // primo componente 
    return <p style = {{
        color: color || "red",
        textDecoration: isUnderline? "underline":"none"
    }}> {children} </p>; 
}