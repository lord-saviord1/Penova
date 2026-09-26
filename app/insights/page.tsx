import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { insightsCategories } from "@/lib/content";

export default function InsightsPage() {
  return (
    <>
      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="PENOVA Insights"
            title="A knowledge space for learning, building and discovering."
          />
        </Container>
      </section>

      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {insightsCategories.map((c) => (
              <div key={c.name} className="border-t border-canopy/15 pt-5">
                <h3>{c.name}</h3>
                <p className="mt-2 text-ink/70">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="border border-dashed border-canopy/25 p-10 text-center">
            <p className="text-ink/60">
              No articles published yet. Wire this page to a content source
              (for example MDX files under <code>app/insights/</code> or a
              Supabase <code>posts</code> table) to start publishing.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
