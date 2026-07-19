import { ButtonHTMLAttributes, ReactNode } from "react";
import "./components.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`ds-button ds-button-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
