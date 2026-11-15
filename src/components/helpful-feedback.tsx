"use client";

import { useState } from "react";

export function HelpfulFeedback() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  if (answer) {
    return (
      <div>
        <h2 className="h-section">Was this helpful?</h2>
        <p className="mt-2 text-[var(--fg-muted)]">
          {answer === "yes"
            ? "Thanks — glad it helped."
            : "Thanks for the honesty — I'll improve this page."}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="h-section">Was this helpful?</h2>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => setAnswer("yes")}
          className="btn btn--secondary"
        >
          Yes
        </button>
        <button
          type="button"
          onClick={() => setAnswer("no")}
          className="btn btn--secondary"
        >
          No
        </button>
      </div>
    </div>
  );
}
