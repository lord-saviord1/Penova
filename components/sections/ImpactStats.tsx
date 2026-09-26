import { impactStats, impactStatement } from "@/lib/content";

export default function ImpactStats() {
  return (
    <div>
      <dl className="grid grid-cols-2 gap-8 md:grid-cols-3">
        {impactStats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-sm text-ink/60">{stat.label}</dt>
            <dd className="font-display text-3xl font-semibold text-canopy">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-10 text-ink/70">
        Our impact isn&apos;t measured only by numbers. It is measured by:
      </p>
      <ul className="mt-3 space-y-1.5">
        {impactStatement.map((line) => (
          <li key={line} className="text-ink/80">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
