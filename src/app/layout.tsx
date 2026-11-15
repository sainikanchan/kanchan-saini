import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: {
    default: "Kanchan Saini — Full-Stack Developer",
    template: "%s | Kanchan Saini",
  },
  description:
    "Portfolio of Kanchan Saini, a full-stack developer building fast, accessible web products. Projects, experience, and contact.",
};

// Resolve the theme before first paint (no flash) and opt into scroll reveals
// only when JS is available — without JS, content stays visible.
const earlyScript = `
try {
  var t = localStorage.getItem("theme");
  if (t !== "light" && t !== "dark") {
    t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  document.documentElement.setAttribute("data-theme", t);
} catch (e) {
  document.documentElement.setAttribute("data-theme", "light");
}
document.documentElement.classList.add("js-reveal");
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      // The early <head> script resolves data-theme/js-reveal before paint;
      // tell React those attribute diffs are intentional.
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        {/* Hand-drawn wobble filter used by the doodle illustrations */}
        <svg
          aria-hidden="true"
          focusable="false"
          width="0"
          height="0"
          style={{ position: "absolute" }}
        >
          <defs>
            <filter id="rough" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.02"
                numOctaves="2"
                seed="7"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="2.5"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
