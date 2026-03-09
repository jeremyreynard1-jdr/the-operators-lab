"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "0.8125rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--text-secondary)",
          marginBottom: "0.75rem",
        }}
      >
        Error
      </p>

      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: "0.5rem",
        }}
      >
        Something went wrong
      </h1>

      <p
        style={{
          fontSize: "1rem",
          color: "var(--text-secondary)",
          maxWidth: "360px",
          lineHeight: 1.6,
          marginBottom: "2rem",
        }}
      >
        An unexpected error occurred. You can try again or head back to the
        homepage.
      </p>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button
          onClick={reset}
          style={{
            padding: "0.625rem 1.25rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#FFFFFF",
            background: "var(--accent)",
            border: "none",
            borderRadius: "var(--input-radius)",
            cursor: "pointer",
            transition: "opacity 0.15s ease",
          }}
        >
          Try again
        </button>

        <a
          href="/"
          style={{
            padding: "0.625rem 1.25rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--text-primary)",
            background: "var(--surface)",
            border: "1px solid var(--border-color)",
            borderRadius: "var(--input-radius)",
            textDecoration: "none",
            cursor: "pointer",
            transition: "border-color 0.15s ease",
          }}
        >
          Back to home
        </a>
      </div>
    </main>
  );
}
