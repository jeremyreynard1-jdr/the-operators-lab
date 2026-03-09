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
      <div
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
