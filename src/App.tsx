import { useMemo, useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { EmptyState } from "./components/EmptyState";
import { Input } from "./components/Input";
import { Modal } from "./components/Modal";

type Prototype = {
  id: number;
  title: string;
  description: string;
  status: "Ready" | "Draft";
};

const samplePrototypes: Prototype[] = [
  {
    id: 1,
    title: "AI Search Dashboard",
    description: "Search, filtering, cards, and empty-state behavior.",
    status: "Ready",
  },
  {
    id: 2,
    title: "Onboarding Flow",
    description: "A lightweight multi-step account setup experience.",
    status: "Draft",
  },
  {
    id: 3,
    title: "Settings Workspace",
    description: "Forms and account-management patterns.",
    status: "Ready",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const filtered = useMemo(
    () =>
      samplePrototypes.filter((prototype) =>
        `${prototype.title} ${prototype.description}`
          .toLowerCase()
          .includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <main className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Design System Prototype Kit</p>
          <h1>Build the idea, not the basic UI.</h1>
          <p className="hero-copy">
            Reusable, accessible React components for designers and AI coding
            agents building fast product prototypes.
          </p>
        </div>

        <Button onClick={() => setModalOpen(true)}>Create prototype</Button>
      </header>

      <section className="toolbar" aria-label="Prototype search">
        <Input
          id="prototype-search"
          label="Search prototypes"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try “dashboard”"
        />
      </section>

      <section aria-labelledby="examples-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Example flow</p>
            <h2 id="examples-title">Prototype workspace</h2>
          </div>
          <span className="result-count">{filtered.length} results</span>
        </div>

        {filtered.length ? (
          <div className="card-grid">
            {filtered.map((prototype) => (
              <Card key={prototype.id}>
                <div className="card-topline">
                  <span className={`status status-${prototype.status.toLowerCase()}`}>
                    {prototype.status}
                  </span>
                </div>
                <h3>{prototype.title}</h3>
                <p>{prototype.description}</p>
                <div className="card-actions">
                  <Button variant="secondary">Preview</Button>
                  <Button variant="ghost">Duplicate</Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No prototypes found"
            description="Try another search or create a new prototype using the reusable components."
            action={
              <Button onClick={() => setQuery("")}>Clear search</Button>
            }
          />
        )}
      </section>

      <Modal
        title="Create a prototype"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        <p>
          This modal demonstrates a reusable overlay with keyboard and click
          dismissal behavior.
        </p>
        <div className="modal-actions">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setModalOpen(false)}>Start building</Button>
        </div>
      </Modal>
    </main>
  );
}
