import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ProjectFilter from "@/components/ProjectFilter";
import AboutSection from "@/components/AboutSection";
import InspirationSection from "@/components/InspirationSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <div
        className="px-6 pb-16"
        style={{ maxWidth: "var(--max-w)", margin: "0 auto" }}
      >
        <HeroSection />

        {/* Projects */}
        <section id="projects" className="mb-20">
          <h2
            className="text-xs font-medium uppercase tracking-widest mb-6"
            style={{
              color: "var(--accent)",
              fontFamily: "var(--font-geist-mono)",
            }}
          >
            Projects
          </h2>
          <ProjectFilter />
        </section>

        {/* Journey */}
        <section id="journey" className="mb-20">
          <AboutSection />
        </section>

        {/* Inspiration */}
        <section id="inspiration" className="mb-16">
          <InspirationSection />
        </section>

        {/* Footer */}
        <footer
          className="text-center pt-8 border-t text-xs"
          style={{
            borderColor: "var(--border-color)",
            color: "var(--text-secondary)",
          }}
        >
          Built with Claude
        </footer>
      </div>
    </>
  );
}
