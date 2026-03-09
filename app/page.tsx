import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ProjectFilter from "@/components/ProjectFilter";
import SideProjects from "@/components/SideProjects";
import AboutSection from "@/components/AboutSection";
import InspirationSection from "@/components/InspirationSection";
import AiToolStack from "@/components/AiToolStack";

export default function Home() {
  return (
    <>
      <NavBar />
      <main
        className="px-6 pb-16"
        style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}
      >
        <HeroSection />

        {/* AI Projects */}
        <section id="projects" className="mb-20">
          <h2
            className="text-xs font-medium uppercase tracking-widest mb-6"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            AI Projects
          </h2>
          <ProjectFilter />
        </section>

        {/* Journey */}
        <section id="journey" className="mb-20">
          <AboutSection />
        </section>

        {/* Side Projects & Community */}
        <section id="side-projects" className="mb-20">
          <SideProjects />
        </section>

        {/* Inspiration */}
        <section id="inspiration" className="mb-12">
          <InspirationSection />
        </section>

        {/* AI Tool Stack */}
        <section className="mb-16">
          <AiToolStack />
        </section>

        {/* Contact CTA */}
        <section
          className="text-center py-12 mb-8"
          style={{
            borderTop: "1px solid var(--border-color)",
          }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Interested in working together?
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
            Connect on LinkedIn
          </a>
        </section>

        {/* Footer */}
        <footer
          className="text-center pt-4 pb-2 text-xs"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Built with support from Claude Code
        </footer>
      </main>
    </>
  );
}
