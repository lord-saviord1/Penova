import Button from "@/components/ui/Button";
import { ecosystem } from "@/lib/content";

export default function EcosystemGrid() {
  return (
    <div className="divide-y divide-canopy/10 border-y border-canopy/10">
      {ecosystem.map((pillar, i) => (
        <div
          key={pillar.number}
          id={pillar.title.toLowerCase().replace(/[^a-z]+/g, "-")}
          className={`grid gap-6 py-12 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10 ${
            i % 2 === 1 ? "bg-canopy-50/60" : ""
          }`}
        >
          <p className="font-display text-2xl text-canopy/30">{pillar.number}</p>

          <div>
            <h3>{pillar.title}</h3>
            <p className="mt-1 text-ink/70">{pillar.tagline}</p>
            <p className="mt-3 max-w-2xl text-ink/70">{pillar.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {pillar.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm border border-canopy/15 px-2.5 py-1 text-xs text-ink/70"
                >
                  {item}
                </li>
              ))}
            </ul>
            {pillar.note && (
              <p className="mt-4 max-w-xl text-xs text-ink/50">{pillar.note}</p>
            )}
          </div>

          <div className="md:pt-1">
            <Button href={pillar.cta.href} variant="secondary">
              {pillar.cta.label}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
