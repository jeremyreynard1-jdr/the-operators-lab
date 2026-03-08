"use client";

type PillOption = {
  label: string;
  value: string;
};

export default function PillToggle({
  options,
  selected,
  onChange,
}: {
  options: PillOption[];
  selected: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = selected === option.value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className="text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200"
            style={{
              backgroundColor: isActive
                ? "var(--accent)"
                : "var(--surface)",
              color: isActive ? "#FFFFFF" : "var(--text-secondary)",
              border: isActive
                ? "1px solid var(--accent)"
                : "1px solid var(--border-color)",
              boxShadow: isActive
                ? "0 1px 3px rgba(30, 58, 95, 0.25)"
                : "none",
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
