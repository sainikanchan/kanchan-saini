import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { PageIntro } from "@/components/page-intro";
import { NumberedList } from "@/components/numbered-list";
import { experiences, skillGroups } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A collection of places, people, and opportunities that have shaped the way Kanchan Saini learns, works, and grows.",
};

export default function ExperiencePage() {
  return (
    <div className="wrap pt-12 pb-20">
      <PageIntro
        crumbs={[{ label: "Home", href: "/" }, { label: "Experience" }]}
        title="Experience"
        lead="A collection of places, people, and opportunities that have shaped the way I learn, work, and grow."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        {/* Timeline */}
        <div className="lg:col-span-7 xl:col-span-8">
          <ol className="timeline max-w-[46rem]">
            {experiences.map((item, i) => (
              <li
                key={item.id}
                id={item.id}
                className="tl-item scroll-mt-24"
                data-reveal
                style={{ "--reveal-delay": i } as CSSProperties}
              >
                <span className="tl-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="tl-body">
                  <p className="meta tl-org">
                    {[item.org, item.place, item.period]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                  <h2 className="tl-title">{item.title}</h2>

                  {item.paragraphs && (
                    <div className="mt-3 space-y-3 text-[var(--fg-muted)]">
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {item.responsibilities && (
                    <ul className="mt-3 space-y-2.5 text-[var(--fg-muted)]">
                      {item.responsibilities.map((line) => (
                        <li key={line.slice(0, 32)} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="text-[var(--fg-faint)]"
                          >
                            —
                          </span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.achievement && (
                    <p className="tl-ach">
                      <span className="meta tl-ach__label">Achievement</span>
                      <span className="tl-ach__text">{item.achievement}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Skills */}
        <aside id="skills" className="scroll-mt-24 lg:col-span-5 xl:col-span-4">
          <h2 className="h-section">Skills &amp; tools</h2>
          <div className="mt-4 space-y-4">
            {skillGroups.map((group) => (
              <section key={group.id} className="panel overflow-hidden" data-reveal>
                <div className="p-5 pb-3">
                  <h3 className="meta text-[var(--fg-muted)]">{group.title}</h3>
                </div>
                <NumberedList items={group.items} />
              </section>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
