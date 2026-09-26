import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { audiences, partnershipTypes, partnerAudiences } from "@/lib/content";

const organisations = audiences.find((a) => a.slug === "organisations")!;

export default function PartnersPage() {
  return (
    <>
      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="For Partners"
            title={organisations.headline}
            body={organisations.body}
          />
          <p className="mt-6 max-w-xl text-sm text-ink/60">
            Whether you&apos;re a {partnerAudiences.slice(0, -1).join(", ").toLowerCase()},
            or {partnerAudiences[partnerAudiences.length - 1].toLowerCase()},
            there may be an opportunity to collaborate.
          </p>
        </Container>
      </section>

      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <h2>Organisations can partner with PENOVA to</h2>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {organisations.items.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-canopy/15 px-3 py-2 text-sm text-ink/75"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="Let's build something valuable" title="Partnership opportunities" />
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipTypes.map((p) => (
              <div key={p.title} className="border-t border-canopy/15 pt-5">
                <h3>{p.title}</h3>
                <p className="mt-2 text-ink/70">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        headline="Let's build platforms for impact."
        cta={{ label: "Partner With PENOVA", href: "/contact" }}
      />
    </>
  );
}
