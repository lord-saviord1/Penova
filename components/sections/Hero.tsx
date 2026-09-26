import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="bg-canopy-fade text-canopy-50">
      <Container className="grid gap-10 py-24 md:grid-cols-[1.3fr_1fr] md:py-32">
        <div>
          <h1 className="text-white">{hero.headline}</h1>
          <p className="mt-6 max-w-xl text-lg text-canopy-100">{hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button
              href={hero.secondaryCta.href}
              variant="secondary"
              className="border-canopy-100/40 text-canopy-50 hover:border-canopy-50"
            >
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="flex items-end">
          <p className="max-w-xs border-l border-gold-500/60 pl-5 text-sm text-canopy-100">
            {hero.body}
          </p>
        </div>
      </Container>
    </section>
  );
}
