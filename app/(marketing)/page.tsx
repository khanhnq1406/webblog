import Link from "next/link";
import {
  Monitor,
  Server,
  Database,
  Atom,
  Code2,
  Palette,
  Dumbbell,
  FileText,
  ArrowRight,
  Github,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategoryInfo } from "@/lib/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Server,
  Database,
  Atom,
  Code2,
  Palette,
  Dumbbell,
  FileText,
};

export default function HomePage() {
  const categories = getCategoryInfo();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto w-full max-w-screen-xl px-4 py-20 sm:py-32">
        <div className="max-w-2xl">
          <div className="mb-4">
            <Badge variant="secondary" className="text-xs font-medium">
              Software Engineer
            </Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Khanh&apos;s Blog
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Personal knowledge base covering frontend, backend, databases, and
            fitness. Built to learn, document, and share.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button asChild size="lg">
              <Link href="/fe-interview">
                Browse Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Documentation Hub */}
      <section className="mx-auto w-full max-w-screen-xl px-4 pb-24">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight">
            Documentation Hub
          </h2>
          <p className="mt-1 text-muted-foreground">
            {categories.length} sections &middot;{" "}
            {categories.reduce((sum, c) => sum + c.articleCount, 0)} articles
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] ?? FileText;
            return (
              <Link key={cat.slug} href={cat.href} className="group">
                <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/30 cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                      {cat.articleCount > 0 && (
                        <span className="text-xs text-muted-foreground pt-1">
                          {cat.articleCount}{" "}
                          {cat.articleCount === 1 ? "article" : "articles"}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-lg mt-3 group-hover:text-primary transition-colors">
                      {cat.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {cat.description}
                    </CardDescription>
                  </CardHeader>
                  {cat.tags.length > 0 && (
                    <CardFooter className="pt-0 flex flex-wrap gap-1.5">
                      {cat.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </CardFooter>
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
