"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { sidebarNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 md:hidden cursor-pointer"
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 pr-0">
        <Link
          href="/"
          className="flex items-center gap-2 mb-6"
          onClick={() => setOpen(false)}
        >
          <span className="font-bold text-lg">Khanh&apos;s Blog</span>
        </Link>
        <nav className="flex flex-col gap-1 overflow-y-auto pr-4">
          {sidebarNav.map((section) => (
            <div key={section.href} className="mb-2">
              <Link
                href={section.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block text-sm font-medium py-1.5 px-2 rounded-md transition-colors hover:bg-accent",
                  pathname === section.href
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground"
                )}
              >
                {section.title}
              </Link>
              {section.items?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-sm py-1 px-4 rounded-md transition-colors hover:bg-accent",
                    pathname === item.href
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
