import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";
import { headerNav } from "@/lib/nav";
import { SearchTrigger } from "@/components/search/search-trigger";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-screen-2xl items-center gap-4 px-4">
        {/* Mobile nav trigger */}
        <MobileNav />

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-lg shrink-0"
        >
          <span className="hidden sm:inline">Khanh&apos;s Blog</span>
          <span className="sm:hidden">KB</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 ml-2">
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-accent"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search trigger */}
        <SearchTrigger />

        {/* Theme toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}
