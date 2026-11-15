import type { CSSProperties } from "react";
import { Clock } from "@/components/clock";
import { WindowCard } from "@/components/window-card";
import { boardCards, profile } from "@/data/portfolio";

const nameChars = Array.from(profile.name);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero wrap" data-reveal>
        <p className="hero__hello script">hi there, I&apos;m</p>
        <h1 className="hero__name">
          <span className="sr-only">{profile.name}</span>
          <span aria-hidden="true">
            {nameChars.map((ch, i) => (
              <span
                key={`${ch}-${i}`}
                className="hero__char"
                style={{ "--i": i } as CSSProperties}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
        </h1>
        <p className="hero__role meta">
          <span className="hero__role-group">
            {profile.role} · Available for work
          </span>
          <span className="hero__role-group">
            {profile.location} · <Clock />
          </span>
        </p>
        <ul className="hero__links">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noreferrer noopener">
                {social.label}
                <span className="hero__arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${profile.email}`}>
              Email
              <span className="hero__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </li>
        </ul>
      </section>

      {/* Window board */}
      <section className="board wrap" aria-label="Explore">
        <div className="board__wall">
          <div className="board__head" data-reveal>
            <h2 className="board__title script">have a look around</h2>
            <svg
              className="board__arrow"
              viewBox="0 0 60 40"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6 9 C24 5 44 13 52 30" filter="url(#rough)" />
              <path d="M43 26 L53 32 L54 20" filter="url(#rough)" />
            </svg>
          </div>
          <ul className="board__grid">
            {boardCards.map((card, i) => (
              <li
                key={card.label}
                className="board__item"
                data-reveal
                style={{ "--reveal-delay": i } as CSSProperties}
              >
                <WindowCard spec={card} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
