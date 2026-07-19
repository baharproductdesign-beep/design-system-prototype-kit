import { ReactNode } from "react";
import "./components.css";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="ds-empty-state">
      <div className="ds-empty-icon" aria-hidden="true">⌕</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {action ? <div className="ds-empty-action">{action}</div> : null}
    </div>
  );
}
