"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds `data-revealed` to `[data-reveal]` elements as they scroll into view.
 * The `js-reveal` class on <html> is set by an inline script before paint.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    const targets = document.querySelectorAll("[data-reveal]:not([data-revealed])");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
