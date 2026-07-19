import { HTMLAttributes, ReactNode } from "react";
import "./components.css";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <article className={`ds-card ${className}`.trim()} {...props}>
      {children}
    </article>
  );
}
