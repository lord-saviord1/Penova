import type { CSSProperties } from "react";

/**
 * Atmosphere = a soft fog layer + hand-drawn doodles for a section background.
 *
 * Usage: make the section `relative isolate overflow-hidden`, then put this as
 * its first child:
 *
 *   <section className="relative isolate overflow-hidden py-20 md:py-28">
 *     <Atmosphere doodles="bigIdea" />
 *     <Container>...</Container>
 *   </section>
 *
 * On dark sections pass tone="dark". Everything is decorative (aria-hidden,
 * pointer-events none), sits behind content, and is mostly hidden on small
 * screens so phones stay clean. Motion is slow and switches off for
 * prefers-reduced-motion (see globals.css).
 */

type Kind =
  | "bulb"
  | "pencil"
  | "book"
  | "cap"
  | "sprout"
  | "compass"
  | "stairs"
  | "spark"
  | "chat"
  | "key"
  | "squiggle"
  | "arrow"
  | "loop"
  | "plus";

type Tone = "line" | "gold" | "accent";
type Breakpoint = "all" | "md" | "lg";

type Item = {
  kind?: Kind;
  text?: string;
  from?: "left" | "right";
  x: string;
  y: string;
  anchor?: "top" | "bottom";
  size?: number; // doodle width in px, or font size in px for text
  rot?: number;
  tone?: Tone;
  bp?: Breakpoint;
  float?: boolean;
};

export type PresetName =
  | "hero"
  | "bigIdea"
  | "whatIs"
  | "ecosystem"
  | "impact"
  | "testimonials"
  | "cta"
  | "generalA"
  | "generalB"
  | "generalC";

// Simple line drawings. Strokes keep a constant width at any size.
const shapes: Record<Kind, { vb: string; d: string[] }> = {
  bulb: {
    vb: "0 0 64 64",
    d: [
      "M32 8c-9 0-16 7-16 16 0 6 3 10 7 14 2 2 3 4 3 7h12c0-3 1-5 3-7 4-4 7-8 7-14 0-9-7-16-16-16z",
      "M26 50h12",
      "M28 55h8",
      "M28 38V29l4 4 4-4v9",
      "M32 2v3",
      "M8 24H5",
      "M59 24h-3",
      "M13 8l2 2",
      "M51 8l-2 2",
    ],
  },
  pencil: {
    vb: "0 0 64 64",
    d: [
      "M10 54l5-15 31-31a4 4 0 0 1 6 0l4 4a4 4 0 0 1 0 6L25 49z",
      "M15 39l10 10",
      "M42 12l10 10",
    ],
  },
  book: {
    vb: "0 0 64 64",
    d: [
      "M32 14c-5-4-14-5-22-4v36c8-1 17 0 22 4 5-4 14-5 22-4V10c-8-1-17 0-22 4z",
      "M32 14v36",
      "M16 20c4 0 7 1 10 2",
      "M16 28c4 0 7 1 10 2",
      "M38 22c3-1 6-2 10-2",
      "M38 30c3-1 6-2 10-2",
    ],
  },
  cap: {
    vb: "0 0 64 64",
    d: [
      "M32 14L4 28l28 14 28-14z",
      "M16 35v10c0 4 7 8 16 8s16-4 16-8V35",
      "M60 28v16",
    ],
  },
  sprout: {
    vb: "0 0 64 64",
    d: [
      "M32 56V30",
      "M32 36c0-10-8-16-20-16 0 10 8 16 20 16z",
      "M32 30c0-9 7-15 18-15 0 9-7 15-18 15z",
      "M22 56h20",
    ],
  },
  compass: {
    vb: "0 0 64 64",
    d: [
      "M32 6a26 26 0 1 0 0 52 26 26 0 0 0 0-52z",
      "M42 22L36 36 22 42 28 28z",
      "M32 8v4",
      "M32 52v4",
      "M8 32h4",
      "M52 32h4",
    ],
  },
  stairs: {
    vb: "0 0 64 64",
    d: [
      "M6 56h14V44h14V32h14V20h10",
      "M12 30c8-8 18-14 32-15",
      "M44 15l-9-4",
      "M44 15l-4 9",
    ],
  },
  spark: {
    vb: "0 0 64 64",
    d: [
      "M32 6v14",
      "M32 44v14",
      "M6 32h14",
      "M44 32h14",
      "M14 14l9 9",
      "M41 41l9 9",
      "M50 14l-9 9",
      "M23 41l-9 9",
    ],
  },
  chat: {
    vb: "0 0 64 64",
    d: [
      "M8 10h30a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H22l-8 7v-7H8a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z",
      "M46 24h10a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-2v7l-8-7H34a4 4 0 0 1-4-4v-2",
    ],
  },
  key: {
    vb: "0 0 64 64",
    d: [
      "M22 20a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
      "M32 30h26",
      "M50 30v8",
      "M42 30v6",
      "M18 30h.01",
    ],
  },
  squiggle: {
    vb: "0 0 64 20",
    d: ["M3 10c6-8 10 8 16 0s10 8 16 0 10 8 16 0"],
  },
  arrow: {
    vb: "0 0 64 48",
    d: ["M4 40C16 14 36 8 56 16", "M56 16l-11-1", "M56 16l-5 10"],
  },
  loop: {
    vb: "0 0 64 64",
    d: ["M32 8c15 0 25 11 24 25S45 56 30 55 7 44 8 31 20 10 36 9"],
  },
  plus: {
    vb: "0 0 64 64",
    d: ["M32 12v40", "M12 32h40"],
  },
};

const presets: Record<PresetName, Item[]> = {
  hero: [
    { kind: "bulb", from: "right", x: "30%", y: "56px", size: 64, rot: 10, tone: "gold", float: true },
    { text: "from potential to impact", from: "right", x: "6%", y: "34px", size: 30, rot: -5, tone: "line" },
    { kind: "spark", from: "right", x: "4%", y: "46%", size: 40, tone: "gold", float: true },
    { kind: "compass", x: "47%", y: "26px", size: 52, rot: -12, tone: "line", bp: "lg" },
    { kind: "squiggle", x: "4%", y: "22px", anchor: "bottom", size: 90, tone: "line", bp: "md" },
  ],
  bigIdea: [
    { kind: "sprout", x: "2%", y: "20px", size: 44, rot: -6, tone: "line", bp: "all" },
    { kind: "book", from: "right", x: "3%", y: "28px", size: 70, rot: 8, tone: "line", float: true },
    { text: "potential is everywhere", from: "right", x: "14%", y: "96px", size: 28, rot: -4, tone: "accent", bp: "lg" },
    { text: "learn · build · connect", x: "3%", y: "26px", anchor: "bottom", size: 30, rot: -2, tone: "line", bp: "md" },
    { kind: "key", from: "right", x: "5%", y: "30px", anchor: "bottom", size: 56, rot: -14, tone: "gold", float: true, bp: "md" },
    { text: "access matters", from: "right", x: "15%", y: "44px", anchor: "bottom", size: 26, rot: 3, tone: "accent", bp: "lg" },
    { kind: "spark", from: "right", x: "6%", y: "18px", anchor: "bottom", size: 34, tone: "gold", bp: "all" },
  ],
  whatIs: [
    { kind: "loop", from: "right", x: "5%", y: "18px", size: 40, tone: "gold", bp: "all" },
    { kind: "cap", from: "right", x: "4%", y: "30px", size: 66, rot: 12, tone: "line", float: true, bp: "md" },
    { text: "ask questions", from: "right", x: "15%", y: "100px", size: 28, rot: -5, tone: "accent", bp: "lg" },
    { kind: "pencil", x: "3%", y: "24px", anchor: "bottom", size: 60, rot: -20, tone: "line", bp: "md" },
    { text: "find your people", x: "12%", y: "34px", anchor: "bottom", size: 30, rot: -3, tone: "gold", bp: "lg" },
    { kind: "chat", from: "right", x: "6%", y: "26px", anchor: "bottom", size: 54, rot: 6, tone: "line", bp: "md" },
  ],
  ecosystem: [
    { kind: "compass", from: "right", x: "6%", y: "44px", size: 80, rot: 10, tone: "line", float: true },
    { text: "one ecosystem, many paths", from: "right", x: "16%", y: "150px", size: 30, rot: -4, tone: "accent", bp: "lg" },
    { kind: "spark", from: "right", x: "2%", y: "150px", size: 38, tone: "gold", bp: "lg" },
    { kind: "stairs", x: "3%", y: "28px", anchor: "bottom", size: 84, tone: "line", bp: "md" },
    { text: "keep growing", x: "16%", y: "40px", anchor: "bottom", size: 30, rot: -3, tone: "accent", bp: "lg" },
    { kind: "sprout", from: "right", x: "6%", y: "20px", anchor: "bottom", size: 48, rot: 8, tone: "gold", bp: "all" },
  ],
  impact: [
    { kind: "spark", x: "2%", y: "22px", size: 36, tone: "gold", bp: "all" },
    { kind: "bulb", from: "right", x: "5%", y: "34px", size: 62, rot: 8, tone: "gold", float: true, bp: "md" },
    { text: "numbers tell part of the story", from: "right", x: "12%", y: "112px", size: 26, rot: -3, tone: "accent", bp: "lg" },
    { kind: "stairs", from: "right", x: "4%", y: "28px", anchor: "bottom", size: 100, tone: "line", bp: "md" },
    { text: "small steps, real impact", from: "right", x: "6%", y: "150px", anchor: "bottom", size: 30, rot: -5, tone: "accent", bp: "lg" },
    { kind: "squiggle", x: "3%", y: "30px", anchor: "bottom", size: 90, tone: "line", bp: "lg" },
  ],
  testimonials: [
    { kind: "spark", from: "right", x: "8%", y: "26px", anchor: "bottom", size: 40, tone: "gold", bp: "all" },
    { kind: "chat", from: "right", x: "6%", y: "34px", size: 68, rot: -6, tone: "line", float: true, bp: "md" },
    { text: "real people, real stories", from: "right", x: "15%", y: "108px", size: 28, rot: -4, tone: "accent", bp: "lg" },
    { kind: "squiggle", x: "4%", y: "30px", anchor: "bottom", size: 100, tone: "gold", bp: "md" },
    { text: "your story could be next", x: "14%", y: "28px", anchor: "bottom", size: 28, rot: -2, tone: "accent", bp: "lg" },
  ],
  cta: [
    { kind: "spark", x: "3%", y: "14px", size: 34, tone: "gold", bp: "all" },
    { text: "your move", from: "right", x: "24%", y: "20px", size: 30, rot: -6, tone: "line", bp: "lg" },
    { kind: "arrow", from: "right", x: "17%", y: "64px", size: 64, tone: "gold", bp: "lg" },
    { kind: "compass", from: "right", x: "3%", y: "18px", anchor: "bottom", size: 48, rot: 12, tone: "line", bp: "lg" },
  ],
  generalA: [
    { kind: "bulb", from: "right", x: "5%", y: "30px", size: 60, rot: 8, tone: "gold", float: true },
    { text: "ideas welcome", from: "right", x: "14%", y: "100px", size: 28, rot: -4, tone: "accent", bp: "lg" },
    { kind: "pencil", x: "3%", y: "24px", anchor: "bottom", size: 56, rot: -18, tone: "line", bp: "md" },
  ],
  generalB: [
    { kind: "book", from: "right", x: "5%", y: "30px", size: 64, rot: 8, tone: "line", float: true },
    { text: "keep learning", from: "right", x: "14%", y: "100px", size: 28, rot: -4, tone: "accent", bp: "lg" },
    { kind: "sprout", x: "3%", y: "24px", anchor: "bottom", size: 52, rot: -6, tone: "gold", bp: "md" },
  ],
  generalC: [
    { kind: "compass", from: "right", x: "5%", y: "30px", size: 66, rot: 10, tone: "line", float: true },
    { text: "find your way", from: "right", x: "14%", y: "100px", size: 28, rot: -4, tone: "accent", bp: "lg" },
    { kind: "stairs", x: "3%", y: "24px", anchor: "bottom", size: 76, tone: "line", bp: "md" },
  ],
};

const bpClass: Record<Breakpoint, string> = {
  all: "",
  md: "hidden md:block",
  lg: "hidden lg:block",
};

const toneClass: Record<"light" | "dark", Record<Tone, string>> = {
  light: {
    line: "text-canopy/40",
    gold: "text-gold-700/45",
    accent: "text-clay/50",
  },
  dark: {
    line: "text-canopy-200/45",
    gold: "text-gold/60",
    accent: "text-gold-300/55",
  },
};

const fogColors = {
  light: [
    "rgba(127,177,216,0.30)",
    "rgba(173,208,236,0.55)",
    "rgba(232,163,61,0.10)",
  ],
  dark: [
    "rgba(127,177,216,0.22)",
    "rgba(78,145,195,0.28)",
    "rgba(232,163,61,0.08)",
  ],
};

function placement(item: Item): CSSProperties {
  const style: CSSProperties = {
    transform: `rotate(${item.rot ?? 0}deg)`,
  };
  if (item.from === "right") style.right = item.x;
  else style.left = item.x;
  if (item.anchor === "bottom") style.bottom = item.y;
  else style.top = item.y;
  if (!item.text) style.width = item.size ?? 56;
  return style;
}

export default function Atmosphere({
  tone = "light",
  doodles,
  fog = true,
}: {
  tone?: "light" | "dark";
  doodles?: PresetName;
  fog?: boolean;
}) {
  const items = doodles ? presets[doodles] : [];
  const [c1, c2, c3] = fogColors[tone];

  return (
    <>
      {fog && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            className="fog-drift absolute -left-[12%] -top-[10%] h-[75%] w-[60%]"
            style={{ background: `radial-gradient(closest-side, ${c1}, transparent)` }}
          />
          <div
            className="fog-drift-slow absolute -bottom-[15%] -right-[10%] h-[80%] w-[60%]"
            style={{ background: `radial-gradient(closest-side, ${c2}, transparent)` }}
          />
          <div
            className="fog-drift absolute left-[35%] top-[30%] h-[45%] w-[35%]"
            style={{ background: `radial-gradient(closest-side, ${c3}, transparent)` }}
          />
        </div>
      )}

      {items.length > 0 && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          {items.map((item, i) => {
            const shape = item.kind ? shapes[item.kind] : null;
            return (
              <div
                key={i}
                className={`absolute ${bpClass[item.bp ?? "md"]} ${
                  toneClass[tone][item.tone ?? "line"]
                }`}
                style={placement(item)}
              >
                <div
                  className={item.float ? "doodle-float" : undefined}
                  style={item.float ? { animationDelay: `${(i * 1.3) % 6}s` } : undefined}
                >
                  {shape ? (
                    <svg
                      viewBox={shape.vb}
                      width="100%"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.75}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ display: "block", overflow: "visible" }}
                    >
                      {shape.d.map((d) => (
                        <path key={d} d={d} vectorEffect="non-scaling-stroke" />
                      ))}
                    </svg>
                  ) : (
                    <span
                      className="block whitespace-nowrap font-hand leading-none"
                      style={{ fontSize: item.size ?? 28 }}
                    >
                      {item.text}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
