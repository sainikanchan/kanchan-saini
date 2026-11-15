import Link from "next/link";
import type { CSSProperties } from "react";

export type CardSpec = {
  label: string;
  href: string;
  external?: boolean;
  portrait?: boolean;
};

/** Hand-drawn motifs that sit inside each window. */
function Motif({ label }: { label: string }) {
  switch (label) {
    case "Projects":
      // rocket
      return (
        <g className="bob">
          <path d="M100 44 C114 60 119 84 115 108 L85 108 C81 84 86 60 100 44 Z" />
          <circle cx="100" cy="74" r="9" />
          <path d="M85 96 L72 116 L87 111" />
          <path d="M115 96 L128 116 L113 111" />
          <path d="M93 108 L100 128 L107 108" />
        </g>
      );
    case "About":
      // coffee mug
      return (
        <g className="bob">
          <path d="M62 74 L62 116 C62 126 70 134 80 134 L104 134 C114 134 122 126 122 116 L122 74 Z" />
          <path d="M56 74 L128 74" />
          <path d="M122 86 C138 86 140 108 122 110" />
          <path d="M78 46 C84 52 72 58 78 64" />
          <path d="M100 46 C106 52 94 58 100 64" />
        </g>
      );
    case "Experience":
      // stairs climbing up
      return (
        <g className="bob">
          <path d="M54 134 L54 112 L86 112 L86 90 L118 90 L118 68 L150 68 L150 46" />
          <path d="M138 54 L150 46 L150 60" />
        </g>
      );
    case "Skills":
      // sparkles
      return (
        <g className="bob">
          <path d="M96 52 L104 84 L136 92 L104 100 L96 132 L88 100 L56 92 L88 84 Z" />
          <path d="M138 48 L142 62 L156 66 L142 70 L138 84 L134 70 L120 66 L134 62 Z" />
        </g>
      );
    case "GitHub":
      // terminal window
      return (
        <g className="bob">
          <path d="M50 56 L150 56 L150 134 L50 134 Z" />
          <path d="M50 74 L150 74" />
          <circle className="ink-fill" cx="62" cy="65" r="3" />
          <circle className="ink-fill" cx="74" cy="65" r="3" />
          <circle className="ink-fill" cx="86" cy="65" r="3" />
          <path d="M70 94 L88 108 L70 122" />
          <path d="M98 124 L130 124" />
        </g>
      );
    case "Contact":
      // speech bubble
      return (
        <g className="bob">
          <path d="M52 58 L148 58 C153 58 157 62 157 67 L157 101 C157 106 153 110 148 110 L96 110 L76 132 L76 110 L52 110 C47 110 43 106 43 101 L43 67 C43 62 47 58 52 58 Z" />
          <path d="M66 78 L134 78" />
          <path d="M66 94 L110 94" />
        </g>
      );
    default:
      return null;
  }
}

export function WindowCard({ spec }: { spec: CardSpec }) {
  const { label, href, external, portrait } = spec;

  const viewBox = portrait ? "0 0 160 200" : "0 0 200 160";
  const paper = portrait
    ? { x: 8, y: 8, w: 144, h: 184 }
    : { x: 8, y: 8, w: 184, h: 144 };
  const frame = portrait
    ? { x: 10, y: 10, w: 140, h: 180 }
    : { x: 10, y: 10, w: 180, h: 140 };
  const transomY = portrait ? 44 : 36;
  const edgeRight = portrait ? 146 : 186;
  const handle = portrait
    ? { x1: 147, y1: 100, x2: 139, y2: 100 }
    : { x1: 187, y1: 74, x2: 179, y2: 74 };
  const inset = portrait
    ? { "--inset-x": "5%", "--inset-y": "4%" }
    : { "--inset-x": "4%", "--inset-y": "5%" };

  const inner = (
    <>
      <span className="sr-only">{label}</span>
      <span className="card__frame" style={inset as CSSProperties}>
        <svg
          className="doodle"
          viewBox={viewBox}
          aria-hidden="true"
          focusable="false"
        >
          <rect
            className="doodle__paper"
            x={paper.x}
            y={paper.y}
            width={paper.w}
            height={paper.h}
            rx="3"
          />
          <g className="doodle__ink">
            <rect
              className="doodle__frame"
              x={frame.x}
              y={frame.y}
              width={frame.w}
              height={frame.h}
              rx="2"
            />
            <rect
              className="doodle__frame doodle__frame--echo"
              x={frame.x + 2.5}
              y={frame.y + 2}
              width={frame.w - 5}
              height={frame.h - 4.5}
              rx="2"
            />
            <path d={`M14 ${transomY} L${edgeRight} ${transomY}`} />
            <path d={`M${handle.x1} ${handle.y1} L${handle.x2} ${handle.y2}`} />
            <Motif label={label} />
          </g>
        </svg>
        <span className="card__veil">
          <span className="card__type">
            {Array.from(label).map((ch, i) => (
              <span
                key={`${ch}-${i}`}
                className="card__ch"
                style={{ "--i": i } as CSSProperties}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
            <i className="card__caret" aria-hidden="true" />
          </span>
        </span>
      </span>
      <span className="card__caption">
        <span className="card__lines" aria-hidden="true">
          <i />
          <i />
        </span>
        <span className="card__touch-label">{label}</span>
      </span>
    </>
  );

  if (external) {
    return (
      <a
        className="card"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {inner}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link className="card" href={href}>
      {inner}
    </Link>
  );
}
