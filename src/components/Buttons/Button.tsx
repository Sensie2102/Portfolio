import React from 'react'
import clsx from "clsx";

type Variant = "primary" | "outline" | "ghost";
type Size = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-[var(--accent)] text-[var(--foreground)] hover:opacity-80",
  outline: "text-[var(--accent)] shadow-[0_0_10px_rgba(165,89,255,0.6)] hover:shadow-[0_0_20px_rgba(165,89,255,1)]",
  ghost: "text-[var(--foreground)] hover:text-[var(--accent)]",
  };
  
  
const sizeClasses: Record<Size, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2 text-base",
    large: "px-7 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "medium",
    className,
    ...props
}) => {
    const finalClassName = clsx(
        variantClasses[variant],
        sizeClasses[size],
        className
    );

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  )
}

export default Button
