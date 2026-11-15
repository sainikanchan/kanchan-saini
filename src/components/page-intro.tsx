import Link from "next/link";
import type { ReactNode } from "react";

export type Crumb = { label: string; href?: string };

export function PageIntro({
  crumbs,
  title,
  lead,
}: {
  crumbs: Crumb[];
  title: string;
  lead?: ReactNode;
}) {
  return (
    <header data-reveal>
      <nav aria-label="Breadcrumb">
        <ol className="meta flex flex-wrap items-center gap-2 text-[var(--fg-faint)]">
          {crumbs.map((crumb, index) => (
            <li key={crumb.label} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-[var(--fg-faint)]">
                  /
                </span>
              )}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-[var(--fg)]"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-[var(--fg)]">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="h-display">{title}</h1>
      {lead && (
        <p className="mt-3 max-w-[45rem] text-[var(--fg-muted)]">{lead}</p>
      )}
    </header>
  );
}
