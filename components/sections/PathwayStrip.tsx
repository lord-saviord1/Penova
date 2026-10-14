export default function PathwayStrip({ steps }: { steps: string[] }) {
  // Each step sits one notch further along and slightly higher in the stack,
  // so the pathway reads as a staircase toward Impact (the last step).
  return (
    <ol className="flex flex-col gap-2">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li
            key={step}
            style={{ marginLeft: `${i}rem` }}
            className={`w-fit rounded-sm bg-white px-3.5 py-1.5 ${
              isLast ? "shadow-layer-2" : "shadow-layer-1"
            }`}
          >
            <span
              className={
                isLast
                  ? "font-display text-sm font-semibold uppercase tracking-wide text-clay"
                  : "font-display text-sm font-medium uppercase tracking-wide text-canopy"
              }
            >
              {step}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
