import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteMeta, footerLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-canopy-700 text-canopy-50">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {siteMeta.name}
          </p>
          <p className="mt-2 text-sm text-canopy-100">{siteMeta.tagline}</p>
          <p className="mt-4 max-w-xs text-sm text-canopy-200">
            A service-oriented learning and development ecosystem creating
            platforms for bright minds to grow and connect.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-canopy-200 no-underline hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Get Involved</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.getInvolved.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-canopy-200 no-underline hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-white">Follow PENOVA</p>
          <ul className="mt-4 space-y-2">
            {siteMeta.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-sm text-canopy-200 no-underline hover:text-white"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col gap-2 text-xs text-canopy-300 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteMeta.name}. All rights reserved.</p>
          <p>{siteMeta.email}</p>
        </Container>
      </div>
    </footer>
  );
}
