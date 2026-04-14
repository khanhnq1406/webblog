"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { sidebarNav, type NavItem } from "@/lib/nav";
import { ScrollArea } from "@/components/ui/scroll-area";

function SidebarSection({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const isChildActive = item.items?.some((child) => pathname === child.href);
  const isExpanded = isActive || isChildActive;

  return (
    <div className="mb-1">
      <Link
        href={item.href}
        className={cn(
          "flex items-center justify-between text-sm font-medium py-1.5 px-3 rounded-md transition-colors duration-200 hover:bg-accent cursor-pointer",
          isActive
            ? "bg-accent text-accent-foreground"
            : "text-foreground/80 hover:text-foreground"
        )}
      >
        {item.title}
        {item.items && (
          <ChevronRight
            className={cn(
              "h-3.5 w-3.5 transition-transform duration-200 text-muted-foreground",
              isExpanded && "rotate-90"
            )}
          />
        )}
      </Link>

      {item.items && isExpanded && (
        <div className="mt-0.5 ml-3 pl-3 border-l border-border flex flex-col gap-0.5">
          {item.items.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "block text-sm py-1 px-2 rounded-md transition-colors duration-200 hover:bg-accent cursor-pointer",
                pathname === child.href
                  ? "text-foreground font-medium bg-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0">
      <ScrollArea className="h-[calc(100vh-3.5rem)] py-6 pr-4">
        <div className="mb-3 px-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Documentation
          </p>
        </div>
        <nav className="flex flex-col gap-0.5">
          {sidebarNav.map((item) => (
            <SidebarSection key={item.href} item={item} />
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
