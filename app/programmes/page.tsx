import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { programmes } from "@/lib/content";

export default function ProgrammesPage() {
  return (
    <>
      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Programmes"
            title="Designed around real needs."
            body="PENOVA programmes are organised around the stage people are at, not a fixed catalogue of courses."
          />
        </Container>
      </section>

      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <p className="text-sm font-medium text-clay">Featured programme</p>
          <h2 className="mt-2">{programmes.featured.name}</h2>
          <p className="mt-2 text-lg text-ink/70">{programmes.featured.tagline}</p>
          <p className="mt-4 max-w-2xl text-ink/70">{programmes.featured.body}</p>
          <Button href={programmes.featured.cta.href} variant="primary" className="mt-6">
            {programmes.featured.cta.label}
          </Button>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading title="Future programme structure" />
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {programmes.future.map((p) => (
              <div key={p.name} className="border-t border-canopy/15 pt-5">
                <h3>{p.name}</h3>
                <p className="mt-2 text-ink/70">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink/50">
            These are planned to become distinct PENOVA verticals over time.
          </p>
        </Container>
      </section>

      <CTASection
        headline="Turn potential into practical skill."
        cta={{ label: "Explore Opportunities", href: "/opportunities" }}
      />
    </>
  );
}
