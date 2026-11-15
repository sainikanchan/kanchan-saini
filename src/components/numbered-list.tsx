import Link from "next/link";
import type { NumberedItem } from "@/data/portfolio";

function RowContent({ item, index }: { item: NumberedItem; index: number }) {
  return (
    <>
      <span aria-hidden="true" className="row-num">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="row-title">{item.title}</span>
      {item.meta && <span className="row-meta">{item.meta}</span>}
      {item.href && (
        <span aria-hidden="true" className="row-arrow">
          →
        </span>
      )}
    </>
  );
}

export function NumberedList({
  items,
  className = "",
}: {
  items: NumberedItem[];
  className?: string;
}) {
  return (
    <ol className={`row-list ${className}`}>
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`}>
          {item.href ? (
            <Link href={item.href} className="row-link">
              <RowContent item={item} index={index} />
            </Link>
          ) : (
            <div className="row-link">
              <RowContent item={item} index={index} />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
