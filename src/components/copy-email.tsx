"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Copies the address to the clipboard and swaps its label to "Copied!"
 * for a moment. Falls back to a hidden textarea where the async
 * clipboard API is unavailable (e.g. non-secure origins).
 */
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const handleCopy = async () => {
    // Prefer the async clipboard API; fall back to a hidden textarea where
    // it's missing or denied (non-secure origins, restricted browsers).
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        ok = true;
      }
    } catch {
      ok = false;
    }

    if (!ok) {
      try {
        const area = document.createElement("textarea");
        area.value = email;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        ok = document.execCommand("copy");
        document.body.removeChild(area);
      } catch {
        ok = false;
      }
    }

    if (!ok) return; // Clipboard unavailable — keep the label honest.

    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="copy-email"
      aria-live="polite"
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
