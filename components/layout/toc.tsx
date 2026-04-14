"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0% 0% -80% 0%", threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="hidden xl:block w-48 shrink-0">
      <div className="sticky top-20 py-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          On This Page
        </p>
        <nav className="flex flex-col gap-0.5">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "block text-xs py-1 transition-colors duration-200 hover:text-foreground cursor-pointer",
                item.level === 3 && "pl-3",
                activeId === item.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
