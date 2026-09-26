export default function PathwayStrip({ steps }: { steps: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-2">
          <span
            className={
              i === steps.length - 1
                ? "font-display text-sm font-semibold uppercase tracking-wide text-clay"
                : "font-display text-sm font-medium uppercase tracking-wide text-canopy"
            }
          >
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden className="h-px w-6 bg-canopy/30" />
          )}
        </li>
      ))}
    </ol>
  );
}
