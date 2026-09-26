import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-canopy-800 hover:bg-gold-300 focus-visible:bg-gold-300",
  secondary:
    "bg-transparent text-canopy border border-canopy/40 hover:border-canopy focus-visible:border-canopy",
  ghost: "bg-transparent text-canopy underline hover:text-canopy-500",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm font-medium tracking-normal transition-colors duration-150";
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
