import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="nav">
      <div className="nav__inner wrap">
        <ThemeToggle />
      </div>
      <div className="nav__progress" aria-hidden="true" />
    </header>
  );
}
