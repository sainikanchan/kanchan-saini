import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap flex max-w-[45rem] flex-col items-start pt-20 pb-24">
      <p className="meta text-[var(--fg-faint)]">404</p>
      <h1 className="h-display">Hmm...this page doesn&apos;t exist.</h1>
      <p className="mt-4 text-[var(--fg-muted)]">
        The window you&apos;re looking for isn&apos;t here — head back to the
        homepage instead.
      </p>
      <Link href="/" className="btn btn--primary mt-8">
        Go to homepage
      </Link>
    </div>
  );
}
