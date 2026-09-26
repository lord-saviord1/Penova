import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import EcosystemGrid from "@/components/sections/EcosystemGrid";
import CTASection from "@/components/sections/CTASection";
import { whatIsPenova, audiences } from "@/lib/content";

const shown = audiences.filter((a) => a.slug !== "organisations");

export default function WhatWeDoPage() {
  return (
    <>
      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title={whatIsPenova.headline}
            body={whatIsPenova.intro}
          />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our ecosystem"
            title="One ecosystem. Multiple pathways."
            body="PENOVA operates through interconnected platforms designed to meet people at different stages of their journey."
          />
        </Container>
        <div className="mt-10">
          <Container>
            <EcosystemGrid />
          </Container>
        </div>
      </section>

      <section className="bg-canopy-50/60 py-20 md:py-28">
        <Container className="space-y-20">
          {shown.map((a) => (
            <div key={a.slug} className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
              <div>
                <p className="text-sm font-medium text-clay">{a.title}</p>
                <h2 className="mt-2">{a.headline}</h2>
                <p className="mt-4 text-ink/70">{a.body}</p>
                <Button href={a.cta.href} variant="secondary" className="mt-6">
                  {a.cta.label}
                </Button>
              </div>
              <ul className="grid grid-cols-1 gap-2 content-start sm:grid-cols-2">
                {a.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm border border-canopy/15 bg-white px-3 py-2 text-sm text-ink/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <CTASection
        headline="You may already have value. You may just need the right platform."
        cta={{ label: "Get Connected", href: "/contact" }}
      />
    </>
  );
}
