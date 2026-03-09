export default function HeroSection() {
  return (
    <section className="text-center pt-24 pb-16 md:pt-32 md:pb-20">
      <p
        className="text-xs font-medium uppercase tracking-widest mb-4"
        style={{
          color: "var(--accent)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        The Operator&apos;s Lab
      </p>
      <h1
        className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        Jeremy Reynard
      </h1>
      <p
        className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
        style={{ color: "var(--text-secondary)" }}
      >
        Strategic operator building companies &amp; AI-powered tools
      </p>
      <a
        href="https://www.linkedin.com/in/jeremyreynard"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 transition-all hover:opacity-80"
        style={{
          backgroundColor: "var(--text-primary)",
          color: "var(--surface)",
          borderRadius: "var(--input-radius)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        LinkedIn
      </a>
    </section>
  );
}
