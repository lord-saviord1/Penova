import Tilt from "@/components/ui/Tilt";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((t) => (
        <Tilt
          key={t.name + t.group}
          className="h-full rounded-lg bg-white p-6 shadow-layer-1 hover:shadow-layer-2"
        >
          <figure>
            <blockquote className="text-ink/85">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm text-ink/60">
              {t.name} — {t.role}
            </figcaption>
          </figure>
        </Tilt>
      ))}
    </div>
  );
}
