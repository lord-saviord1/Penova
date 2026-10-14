"use client";

import { useEffect, useRef, useState } from "react";

/**
 * PENOVA intro loader.
 *
 * Ported from Animmaster/Interactive-ASCII. Same core ideas: the wordmark is
 * sampled onto a coarse grid, every lit cell becomes a random character,
 * the cursor pushes cells away, and a gravity phase drops them at the end.
 * Differences from the original:
 *  - the source is the word "PENOVA" drawn on an offscreen canvas (no image)
 *  - it runs by itself: assemble -> hold -> fall -> fade out (~2s)
 *  - it works on phones with a smaller grid instead of switching off
 *  - it plays once per browser session and is skipped for reduced motion
 */

const WORD = "PENOVA";
const SESSION_KEY = "penova-intro-seen";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Colours come from the Tailwind tokens (paper, gold).
const COLOR_REST = "#F2F7FB";
const COLOR_MOVING = "#E8A33D";

const BRIGHTNESS_THRESHOLD = 0.5;
const HOVER_RADIUS = 10;
const HOVER_PUSH = 7;
const EASE = 0.1;
const GRAVITY = 0.05;
const BOUNCE = 0.25;
const STAGGER_FRAMES = 18;
const ENTRY_SPREAD = 40; // how far (in cells) letters start from home

const ASSEMBLE_MS = 750;
const HOLD_MS = 550;
const EXIT_MS = 800;

type Cell = {
  col: number;
  row: number;
  char: string;
  offsetX: number;
  offsetY: number;
  fallSpeed: number;
  wait: number;
};

type Phase = "assemble" | "hold" | "fall";

const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

export default function AsciiIntro() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const skipRef = useRef<() => void>(() => {});
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let seen = false;
    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      /* storage unavailable: just play the intro */
    }

    if (reduceMotion || seen) {
      setVisible(false);
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) {
      setVisible(false);
      return;
    }

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    let cancelled = false;
    let raf = 0;
    let exitTimer = 0;
    let cells: Cell[] = [];
    let cols = 0;
    let rows = 0;
    let size = 8;
    let step = 11;
    let phase: Phase = "assemble";
    let phaseStart = performance.now();
    const cursor = { col: -999, row: -999 };

    const family =
      getComputedStyle(document.body).getPropertyValue("--font-display").trim();
    const fontFamily = family ? `${family}, system-ui, sans-serif` : "system-ui, sans-serif";

    const build = (scatter: boolean) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      const small = w < 700;

      size = small ? 5 : 8;
      step = size + (small ? 2 : 3);
      cols = Math.floor(w / step);
      rows = Math.floor(h / step);

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Draw the wordmark at grid resolution, centred and fitted to width.
      const sampler = document.createElement("canvas");
      sampler.width = cols;
      sampler.height = rows;
      const sctx = sampler.getContext("2d", { willReadFrequently: true });
      if (!sctx) return;

      sctx.fillStyle = "#000";
      sctx.fillRect(0, 0, cols, rows);
      sctx.fillStyle = "#fff";
      sctx.textAlign = "center";
      sctx.textBaseline = "middle";

      const probe = 100;
      sctx.font = `700 ${probe}px ${fontFamily}`;
      const measured = sctx.measureText(WORD).width || probe * 4;
      const targetWidth = cols * (small ? 0.84 : 0.66);
      const fontPx = Math.min((probe * targetWidth) / measured, rows * 0.5);
      sctx.font = `700 ${fontPx}px ${fontFamily}`;
      sctx.fillText(WORD, cols / 2, rows / 2);

      const { data } = sctx.getImageData(0, 0, cols, rows);
      const lit = new Set<string>();
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const i = (row * cols + col) * 4;
          if (data[i] / 255 > BRIGHTNESS_THRESHOLD) {
            lit.add(`${col},${row}`);
            lit.add(`${col + 1},${row}`); // widen strokes, as in the original
          }
        }
      }

      cells = [];
      for (const key of lit) {
        const [col, row] = key.split(",").map(Number);
        cells.push({
          col,
          row,
          char: randomChar(),
          offsetX: scatter ? (Math.random() - 0.5) * ENTRY_SPREAD * 2 : 0,
          offsetY: scatter ? (Math.random() - 0.5) * ENTRY_SPREAD : 0,
          fallSpeed: 0,
          wait: scatter ? Math.floor(Math.random() * STAGGER_FRAMES) : 0,
        });
      }
    };

    const finish = () => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
      setVisible(false);
    };

    const startFall = (now: number) => {
      if (phase === "fall") return;
      phase = "fall";
      phaseStart = now;
      for (const cell of cells) {
        cell.fallSpeed = 0;
        cell.wait = Math.floor(Math.random() * STAGGER_FRAMES);
      }
      setLeaving(true);
      exitTimer = window.setTimeout(finish, EXIT_MS);
    };

    const update = (now: number) => {
      const elapsed = now - phaseStart;
      if (phase === "assemble" && elapsed > ASSEMBLE_MS) {
        phase = "hold";
        phaseStart = now;
      } else if (phase === "hold" && elapsed > HOLD_MS) {
        startFall(now);
      }

      for (const cell of cells) {
        if (cell.wait > 0) {
          cell.wait--;
          continue;
        }

        if (phase === "fall") {
          const floor = rows - 1 - cell.row;
          cell.fallSpeed += GRAVITY;
          cell.offsetY += cell.fallSpeed;
          if (cell.offsetY > floor) {
            cell.offsetY = floor;
            cell.fallSpeed *= -BOUNCE;
          }
          continue;
        }

        // assemble + hold: drift home, pushed away by the cursor
        let targetX = 0;
        let targetY = 0;
        const dx = cell.col - cursor.col;
        const dy = cell.row - cursor.row;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < HOVER_RADIUS && distance > 0) {
          const push = (1 - distance / HOVER_RADIUS) * HOVER_PUSH;
          targetX = (dx / distance) * push;
          targetY = (dy / distance) * push;
        }
        cell.offsetX += (targetX - cell.offsetX) * EASE;
        cell.offsetY += (targetY - cell.offsetY) * EASE;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${size + 2}px monospace`;
      ctx.textBaseline = "top";
      ctx.textAlign = "center";

      let current = "";
      for (const cell of cells) {
        // gold while a letter is in motion, paper once it is at rest
        const moving = Math.abs(cell.offsetX) + Math.abs(cell.offsetY) > 1.2;
        const color = moving ? COLOR_MOVING : COLOR_REST;
        if (color !== current) {
          ctx.fillStyle = color;
          current = color;
        }
        ctx.fillText(
          cell.char,
          (cell.col + cell.offsetX) * step + size / 2,
          (cell.row + cell.offsetY) * step
        );
      }
    };

    const loop = (now: number) => {
      if (cancelled) return;
      update(now);
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onPointerMove = (event: PointerEvent) => {
      cursor.col = event.clientX / step;
      cursor.row = event.clientY / step;
    };
    const onPointerLeave = () => {
      cursor.col = -999;
      cursor.row = -999;
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") startFall(performance.now());
    };
    const onResize = () => build(false);

    skipRef.current = () => startFall(performance.now());

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    // Make sure the display font is ready before sampling the wordmark.
    const fontReady = Promise.race([
      document.fonts.load(`700 64px ${fontFamily}`),
      new Promise((resolve) => setTimeout(resolve, 800)),
    ]);

    fontReady.then(() => {
      if (cancelled) return;
      build(true);
      phaseStart = performance.now();
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      root.style.overflow = previousOverflow;
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="Loading PENOVA"
      className={`ascii-intro fixed inset-0 z-[100] bg-canopy-900 transition-opacity duration-500 ease-out ${
        leaving ? "pointer-events-none opacity-0 delay-200" : "opacity-100"
      }`}
    >
      <canvas ref={canvasRef} aria-hidden="true" className="block h-full w-full" />
      <button
        type="button"
        onClick={() => skipRef.current()}
        className="absolute bottom-6 right-6 rounded px-3 py-2 font-display text-sm text-canopy-200 transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        Skip intro
      </button>
    </div>
  );
}
