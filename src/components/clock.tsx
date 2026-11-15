"use client";

import { useEffect, useState } from "react";

/** Live IST clock — "12:47 IST", updating every 20 seconds. */
export function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 20_000);
    return () => clearInterval(id);
  }, []);

  if (!time) return <span className="tabular-nums">— IST</span>;

  return <time className="tabular-nums">{time.replace(" ", " ")} IST</time>;
}
