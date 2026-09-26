import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { opportunities, opportunityCategories } from "@/lib/content";

export default function OpportunitiesPage() {
  return (
    <>
      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Opportunities"
            title="Opportunities for your next step."
            body="Find opportunities relevant to your growth. Opportunities shared through PENOVA may be provided by external organisations — eligibility, application requirements and selection decisions remain with the respective providers."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {opportunityCategories.map((c) => (
              <li
                key={c}
                className="rounded-sm border border-canopy/20 px-3 py-1.5 text-sm text-ink/70"
              >
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((o) => (
              <article
                key={o.title}
                className="flex flex-col justify-between border border-canopy/15 p-6"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-clay">
                    {o.category}
                  </p>
                  <h3 className="mt-2">{o.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{o.organisation}</p>
                  <p className="mt-3 text-sm text-ink/70">{o.description}</p>
                  <dl className="mt-4 space-y-1 text-xs text-ink/60">
                    <div className="flex justify-between gap-4">
                      <dt>Deadline</dt>
                      <dd>{o.deadline}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Location</dt>
                      <dd>{o.location}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt>Eligibility</dt>
                      <dd className="text-right">{o.eligibility}</dd>
                    </div>
                  </dl>
                </div>
                <button
                  type="button"
                  className="mt-6 self-start text-sm font-medium text-canopy underline"
                >
                  View Opportunity
                </button>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-ink/50">
            Sample listings shown above. Replace with a live feed (for
            example, a Supabase <code>opportunities</code> table) before
            launch — see the README for a suggested schema.
          </p>
        </Container>
      </section>

      <CTASection
        headline="Have an opportunity to share?"
        body="Organisations can submit opportunities for the PENOVA community."
        cta={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
