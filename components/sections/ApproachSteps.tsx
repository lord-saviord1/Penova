import { approach } from "@/lib/content";

export default function ApproachSteps() {
  return (
    <ol className="relative border-l border-canopy/20 pl-8 md:pl-10">
      {approach.steps.map((step, i) => (
        <li key={step.title} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-gold-500 md:-left-[calc(2.5rem+5px)]" />
          <p className="text-xs text-ink/50">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-1">{step.title}</h3>
          <p className="mt-1 max-w-md text-ink/75">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
