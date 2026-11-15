import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { aboutClosing, aboutIntro, aboutSections } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "A little about Kanchan Saini — curiosity, creativity, community, ambition, and what this little corner of the internet is for.",
};

export default function AboutPage() {
  return (
    <div className="wrap pt-12 pb-20">
      {/* Intro */}
      <header data-reveal>
        <nav aria-label="Breadcrumb">
          <ol className="meta flex flex-wrap items-center gap-2 text-[var(--fg-faint)]">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-[var(--fg)]"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-[var(--fg)]">
              About
            </li>
          </ol>
        </nav>
        <p className="meta mt-8 text-[var(--fg-faint)]">{aboutIntro.eyebrow}</p>
        <h1 className="h-display">{aboutIntro.quote}</h1>
        <p className="h-section mt-5">{aboutIntro.greeting}</p>
        <p className="text-[var(--fg-muted)]">{aboutIntro.tagline}</p>
        <p className="mt-4 max-w-[45rem] text-[var(--fg-muted)]">
          {aboutIntro.lead}
        </p>
      </header>

      {/* Sections */}
      <div className="mt-14 max-w-[45rem] space-y-12">
        {aboutSections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24"
            data-reveal
            style={{ "--reveal-delay": i } as CSSProperties}
          >
            <h2 className="h-section">{section.title}</h2>

            {section.paragraphs && (
              <div className="mt-3 space-y-4 text-[var(--fg-muted)]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="mt-4 space-y-3 text-[var(--fg-muted)]">
                {section.bullets.map((bullet) => (
                  <li
                    key={bullet.text.slice(0, 32)}
                    className="flex gap-3"
                  >
                    <span aria-hidden="true" className="text-[var(--fg-faint)]">
                      —
                    </span>
                    <span>
                      {bullet.term && (
                        <>
                          <strong className="font-semibold text-[var(--fg)]">
                            {bullet.term}:
                          </strong>{" "}
                        </>
                      )}
                      {bullet.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <p className="font-semibold text-[var(--fg)]" data-reveal>
          {aboutClosing}
        </p>
      </div>
    </div>
  );
}
