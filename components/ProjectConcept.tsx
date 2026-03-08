import { Lightbulb } from "lucide-react";

export default function ProjectConcept({
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div
      className="p-8 text-center"
      style={{
        backgroundColor: "var(--surface)",
        border: "2px dashed var(--border-color)",
        borderRadius: "var(--card-radius)",
      }}
    >
      <Lightbulb
        size={28}
        className="mx-auto mb-4"
        style={{ color: "var(--status-ideation)" }}
      />
      <p
        className="text-xs font-medium uppercase tracking-wide mb-3"
        style={{
          color: "var(--status-ideation)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        Concept
      </p>
      {description ? (
        <p
          className="text-sm leading-relaxed max-w-lg mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      ) : (
        <p
          className="text-sm"
          style={{ color: "var(--text-secondary)", opacity: 0.6 }}
        >
          This concept is still being shaped. Check back soon.
        </p>
      )}
    </div>
  );
}
