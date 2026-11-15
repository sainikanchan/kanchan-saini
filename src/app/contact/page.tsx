import type { Metadata } from "next";
import Link from "next/link";
import { CopyEmailButton } from "@/components/copy-email";
import { SocialIcon } from "@/components/social-icon";
import { profile, socialLinks } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kanchan Saini — email, LinkedIn, GitHub, LeetCode, and X.",
};

export default function ContactPage() {
  return (
    <div className="wrap pt-12 pb-20">
      <div className="mx-auto w-full max-w-[34rem]">
        {/* Back link */}
        <nav data-reveal>
          <Link
            href="/"
            className="meta inline-flex items-center gap-2 text-[var(--fg-faint)] transition-colors hover:text-[var(--fg)]"
          >
            <span aria-hidden="true">←</span> Back to portfolio
          </Link>
        </nav>

        {/* Intro */}
        <header className="mt-10" data-reveal>
          <h1 className="h-display">Contact</h1>
          <p className="h-section mt-4">Let&apos;s connect :)</p>
          <p className="mt-3 text-[var(--fg-muted)]">
            Always happy to meet curious people, exchange ideas, explore
            opportunities, and collaborate on things worth building.
          </p>
          <p className="mt-3 text-[var(--fg-muted)]">
            Have something in mind? Drop me an email or find me on the internet.
          </p>
        </header>

        {/* Email */}
        <section className="mt-10" aria-label="Email" data-reveal>
          <a
            href={`mailto:${profile.email}`}
            className="contact-email break-all"
          >
            {profile.email}
          </a>
          <div className="mt-4">
            <CopyEmailButton email={profile.email} />
          </div>
        </section>

        {/* Elsewhere */}
        <section className="mt-12" aria-labelledby="elsewhere" data-reveal>
          <h2 id="elsewhere" className="meta text-[var(--fg-faint)]">
            Find me elsewhere
          </h2>
          <ul className="mt-4">
            {socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="social-row"
                >
                  <span className="social-row__icon">
                    <SocialIcon name={link.icon} />
                  </span>
                  <span className="social-row__platform">{link.platform}</span>
                  <span className="social-row__user">{link.username}</span>
                  <span
                    aria-hidden="true"
                    className="social-row__arrow"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer line */}
        <p className="meta mt-14 text-[var(--fg-faint)]" data-reveal>
          {profile.name} · {profile.location}
        </p>
      </div>
    </div>
  );
}
