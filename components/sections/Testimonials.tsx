import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((t) => (
        <figure
          key={t.name + t.group}
          className="border-t border-canopy/20 pt-5"
        >
          <blockquote className="text-ink/85">&ldquo;{t.quote}&rdquo;</blockquote>
          <figcaption className="mt-4 text-sm text-ink/60">
            {t.name} — {t.role}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
