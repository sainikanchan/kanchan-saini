import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__pre meta">
          <a href="#top" className="footer__top">
            BACK TO TOP{" "}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
      <div className="footer__rule">
        <div className="wrap">
          <p className="footer__sign">
            made with{" "}
            <span className="footer__heart" aria-hidden="true">
              ♡
            </span>{" "}
            by {profile.name}
          </p>
          <div className="footer__row meta">
            <p>
              © 2026 {profile.name.toUpperCase()} · {profile.location.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
