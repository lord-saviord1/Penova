export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium text-clay">{eyebrow}</p>
      )}
      <h2>{title}</h2>
      {body && <p className="mt-4 text-lg text-ink/80">{body}</p>}
    </div>
  );
}
