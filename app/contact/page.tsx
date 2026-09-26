import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { siteMeta, faqItems } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-canopy/10 py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Contact" title="Let's connect." />
            <p className="mt-4 max-w-sm text-ink/70">
              Have a question? Want to collaborate? Have an opportunity?
              Want to join? Have something valuable to offer? We&apos;d love
              to hear from you.
            </p>
            <dl className="mt-8 space-y-2 text-sm text-ink/70">
              <div className="flex gap-2">
                <dt className="font-medium text-ink">Email</dt>
                <dd>{siteMeta.email}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-medium text-ink">WhatsApp</dt>
                <dd>{siteMeta.whatsapp}</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="max-w-2xl">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="mt-8 divide-y divide-canopy/15">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-ink">
                  <span className="font-medium">{item.question}</span>
                  <span className="ml-4 text-canopy/50 group-open:hidden">
                    +
                  </span>
                  <span className="ml-4 hidden text-canopy/50 group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-3 text-ink/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
