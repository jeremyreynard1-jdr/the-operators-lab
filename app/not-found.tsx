import Link from "next/link";

export default function NotFound() {
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
        404
      </p>

      <h1
        style={{
          fontSize: "1.75rem",
          fontWeight: 600,
          color: "var(--text-primary)",
          marginBottom: "0.5rem",
        }}
      >
        Page not found
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
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          padding: "0.625rem 1.25rem",
          fontSize: "0.875rem",
          fontWeight: 500,
          color: "#FFFFFF",
          background: "var(--accent)",
          borderRadius: "var(--input-radius)",
          textDecoration: "none",
          transition: "opacity 0.15s ease",
        }}
      >
        Back to home
      </Link>
    </main>
  );
}
