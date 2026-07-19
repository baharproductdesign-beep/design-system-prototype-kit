import { InputHTMLAttributes } from "react";
import "./components.css";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  helperText?: string;
};

export function Input({ id, label, helperText, ...props }: InputProps) {
  const helperId = helperText ? `${id}-helper` : undefined;

  return (
    <div className="ds-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} aria-describedby={helperId} {...props} />
      {helperText ? <span id={helperId}>{helperText}</span> : null}
    </div>
  );
}
