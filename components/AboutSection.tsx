import CareerMap from "@/components/CareerMap";

export default function AboutSection() {
  return (
    <>
      <h2
        className="text-xs font-medium uppercase tracking-widest mb-2"
        style={{
          color: "var(--accent)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        Journey
      </h2>
      <p
        className="text-lg mb-8 max-w-2xl"
        style={{ color: "var(--text-secondary)" }}
      >
        Over the last 10+ years I&apos;ve been lucky to work at some amazing
        companies and startups all over the world.
      </p>

      {/* Career Map - the centerpiece */}
      <div className="mb-10">
        <CareerMap />
      </div>

    </>
  );
}
