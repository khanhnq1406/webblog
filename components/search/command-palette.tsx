"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Badge } from "@/components/ui/badge";
import type { SearchItem } from "@/lib/search-index";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [items, setItems] = useState<SearchItem[]>([]);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [query, setQuery] = useState("");
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);

  // Load search index
  useEffect(() => {
    if (!open || items.length > 0) return;

    fetch("/api/search")
      .then((r) => r.json())
      .then((data: SearchItem[]) => {
        setItems(data);
        setFuse(
          new Fuse(data, {
            keys: [
              { name: "title", weight: 0.4 },
              { name: "description", weight: 0.3 },
              { name: "tags", weight: 0.2 },
              { name: "snippet", weight: 0.1 },
            ],
            threshold: 0.4,
            minMatchCharLength: 2,
          })
        );
        setResults(data.slice(0, 8));
      })
      .catch(() => {});
  }, [open, items.length]);

  // Search on query change
  useEffect(() => {
    if (!fuse) return;
    if (query.trim() === "") {
      setResults(items.slice(0, 8));
    } else {
      setResults(fuse.search(query).map((r) => r.item).slice(0, 10));
    }
  }, [query, fuse, items]);

  const handleSelect = useCallback(
    (href: string) => {
      onOpenChange(false);
      setQuery("");
      router.push(href);
    },
    [onOpenChange, router]
  );

  // Group results by category
  const grouped = results.reduce<Record<string, SearchItem[]>>((acc, item) => {
    if (!acc[item.categoryLabel]) acc[item.categoryLabel] = [];
    acc[item.categoryLabel].push(item);
    return acc;
  }, {});

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search docs..."
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {Object.entries(grouped).map(([label, groupItems], i) => (
          <div key={label}>
            {i > 0 && <CommandSeparator />}
            <CommandGroup heading={label}>
              {groupItems.map((item) => (
                <CommandItem
                  key={item.id}
                  value={`${item.title} ${item.category}`}
                  onSelect={() => handleSelect(item.href)}
                  className="flex flex-col items-start gap-1 cursor-pointer"
                >
                  <span className="font-medium">{item.title}</span>
                  {item.description && (
                    <span className="text-xs text-muted-foreground line-clamp-1">
                      {item.description}
                    </span>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </div>
        ))}
      </CommandList>
    </CommandDialog>
  );
}
