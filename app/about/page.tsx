import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ApproachSteps from "@/components/sections/ApproachSteps";
import CTASection from "@/components/sections/CTASection";
import { aboutStory, mission, vision, approach, values } from "@/lib/content";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="About PENOVA" title={aboutStory.question} />
          <div className="mt-8 max-w-2xl space-y-5 text-ink/75">
            {aboutStory.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <h2>Our mission</h2>
            <p className="mt-4 text-ink/75">{mission}</p>
          </div>
          <div>
            <h2>Our vision</h2>
            <p className="mt-4 text-ink/75">{vision}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <SectionHeading title={approach.headline} body={approach.intro} />
          <div className="mt-12">
            <ApproachSteps />
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading title="What guides PENOVA" />
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title}>
                <h3>{v.title}</h3>
                <p className="mt-2 text-ink/70">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Support your potential until it's impactful."
        cta={{ label: "Join PENOVA", href: "/community" }}
      />
    </>
  );
}
