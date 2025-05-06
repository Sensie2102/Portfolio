import React from 'react'
import clsx from "clsx";

type Variant = "primary" | "gradient";
type Size = "small" | "medium" | "large";

interface CapsuleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
}

const variantClasses: Record<Variant, string> = {
    primary: " border border-[var(--foreground)] text-[var(--foreground)] hover:backdrop-blur-sm",
    gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--highlight)] hover:backdrop-blur-sm shadow-[0_0_6px_var(--highlight)]",
  };
  
    
    
const sizeClasses: Record<Size, string> = {
    small: "px-4 py-2 text-sm",
    medium: "px-5 py-2.5 text-base",
    large: "px-6 py-3 text-lg",
};
  

const Capsule: React.FC<CapsuleProps> = ({ children,
    variant = "primary",
    size = "medium",
    className }) => {
    
    const baseClass = 'inline-flex flex-row items-center justify-center gap-2 whitespace-nowrap rounded-full';
   const finalClassName = clsx(
           baseClass,
           variantClasses[variant],
           sizeClasses[size],
           className
       );
    return (
        <div className={finalClassName}>
        {children}
        </div>
    )
}

export default Capsule
