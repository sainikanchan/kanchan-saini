import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageIntro } from "@/components/page-intro";
import { NumberedList } from "@/components/numbered-list";
import { HelpfulFeedback } from "@/components/helpful-feedback";
import { getProject, projects, relatedProjects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/projects/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

// `params` is URL data: it stays behind Suspense so the shared app shell
// (and navigation into this route) doesn't wait on a single URL's content.
export default function ProjectPage(props: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <ProjectContent params={props.params} />
    </Suspense>
  );
}

function ProjectSkeleton() {
  return (
    <div aria-hidden="true" className="wrap pt-12 pb-20 animate-pulse">
      <div className="h-4 w-48 rounded bg-[var(--bg-sunk)]" />
      <div className="mt-6 h-8 w-3/4 rounded bg-[var(--bg-sunk)]" />
      <div className="mt-4 h-4 w-full rounded bg-[var(--bg-sunk)]" />
      <div className="mt-2 h-4 w-2/3 rounded bg-[var(--bg-sunk)]" />
      <div className="mt-10 space-y-4">
        <div className="h-4 w-40 rounded bg-[var(--bg-sunk)]" />
        <div className="h-4 w-full rounded bg-[var(--bg-sunk)]" />
        <div className="h-4 w-11/12 rounded bg-[var(--bg-sunk)]" />
      </div>
    </div>
  );
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = relatedProjects(project.slug);

  return (
    <div className="wrap pt-12 pb-20">
      <PageIntro
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title.split(" — ")[0] },
        ]}
        title={project.title}
        lead={project.summary}
      />

      {/* Meta */}
      <div className="meta mt-6 flex max-w-[45rem] flex-wrap items-center gap-x-4 gap-y-2 text-[var(--fg-faint)]">
        <span>Updated {project.updated}</span>
        <span aria-hidden="true">·</span>
        <span>{project.readTime}</span>
        <span aria-hidden="true">·</span>
        <span>{project.role}</span>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        {/* Article */}
        <article className="lg:col-span-7 xl:col-span-8">
          <div className="max-w-[45rem] space-y-10">
            {/* Stack chips */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="meta rounded-full border border-[var(--rule)] px-3 py-1 text-[var(--fg-muted)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.sections.map((section) => (
              <section key={section.h} data-reveal>
                <h2 className="h-section">{section.h}</h2>
                <div className="mt-3 space-y-4 text-[var(--fg-muted)]">
                  {section.p?.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2.5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 32)} className="flex gap-3">
                          <span aria-hidden="true" className="text-[var(--fg-faint)]">
                            —
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {/* Actions */}
            <div className="flex flex-wrap gap-3 border-t border-[var(--rule)] pt-8">
              {project.live?.startsWith("http") && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--primary"
                >
                  Live demo ↗
                </a>
              )}
              {project.source?.startsWith("http") && (
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--secondary"
                >
                  View source ↗
                </a>
              )}
              <Link href="/projects" className="btn btn--secondary">
                All projects
              </Link>
            </div>

            {/* Feedback */}
            <div className="border-t border-[var(--rule)] pt-8">
              <HelpfulFeedback />
            </div>
          </div>
        </article>

        {/* Related */}
        <aside className="lg:col-span-5 xl:col-span-4">
          <div className="panel overflow-hidden" data-reveal>
            <div className="p-5 pb-3">
              <h2 className="h-section">Related projects</h2>
              <p className="mt-1 text-[var(--fg-faint)]">Keep reading</p>
            </div>
            <NumberedList
              items={related.map((item) => ({
                title: item.title,
                href: `/projects/${item.slug}`,
              }))}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
