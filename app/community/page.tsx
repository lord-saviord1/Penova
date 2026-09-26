import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { ecosystem, upcomingEvents } from "@/lib/content";

const communityPillar = ecosystem.find((p) => p.title === "Community")!;

export default function CommunityPage() {
  return (
    <>
      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Community"
            title="Find your people."
            body="PENOVA is building a community for people who are committed to learning, growth, contribution and impact."
          />
        </Container>
      </section>

      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <h2>Inside the community</h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {communityPillar.items.map((item) => (
              <li
                key={item}
                className="rounded-sm border border-canopy/15 px-3 py-2 text-sm text-ink/75"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl text-ink/70">
            Don&apos;t just watch opportunities pass by. Build where
            opportunities can find you.
          </p>
        </Container>
      </section>

      <section id="events" className="py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Learn. Experience. Connect."
            title="Upcoming PENOVA experiences"
          />
          <div className="mt-10 space-y-4">
            {upcomingEvents.map((e) => (
              <div
                key={e.name}
                className="flex flex-col gap-2 border-t border-canopy/15 pt-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3>{e.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">{e.description}</p>
                </div>
                <div className="text-sm text-ink/60 md:text-right">
                  <p>{e.date}</p>
                  <p>
                    {e.location} · {e.format}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink/50">
            Past events, with photos and short recaps, can appear on this
            page once PENOVA has run its first few.
          </p>
        </Container>
      </section>

      <CTASection
        headline="Join the PENOVA community."
        cta={{ label: "Join Community", href: "/contact" }}
      />
    </>
  );
}
