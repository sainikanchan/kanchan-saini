import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { NumberedList } from "@/components/numbered-list";
import { projectGroups, projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Kanchan Saini — AI payments, photo editing, interview prep, and open source.",
};

export default function ProjectsPage() {
  return (
    <div className="wrap pt-12 pb-20">
      <PageIntro
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        title="Projects"
        lead="A selection of things I've designed, built, and shipped — case studies with the problem, what I built, and what changed."
      />

      <div className="mt-10 space-y-12">
        {projectGroups.map((group) => {
          const items = projects.filter((project) => project.group === group);
          if (items.length === 0) return null;
          return (
            <section key={group} data-reveal>
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="h-section">{group}</h2>
                <span className="meta text-[var(--fg-faint)]">
                  {items.length} {items.length === 1 ? "project" : "projects"}
                </span>
              </div>
              <div className="panel mt-4 overflow-hidden">
                <NumberedList
                  items={items.map((project) => ({
                    title: project.title,
                    href: `/projects/${project.slug}`,
                    meta: project.year,
                  }))}
                />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
