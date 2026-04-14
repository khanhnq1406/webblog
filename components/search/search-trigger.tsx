"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearch } from "./search-provider";

export function SearchTrigger() {
  const { setOpen } = useSearch();

  return (
    <Button
      variant="outline"
      size="sm"
      className="hidden sm:flex items-center gap-2 h-9 w-44 justify-between text-muted-foreground text-sm cursor-pointer"
      onClick={() => setOpen(true)}
    >
      <span className="flex items-center gap-2">
        <Search className="h-3.5 w-3.5" />
        Search...
      </span>
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
        ⌘K
      </kbd>
    </Button>
  );
}
