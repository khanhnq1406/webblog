import { getAllCategories, getAllContent } from "./mdx";

export type SearchItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  tags: string[];
  href: string;
  snippet: string;
};

const categoryLabels: Record<string, string> = {
  "fe-interview": "Frontend Interview",
  "be-interview": "Backend Interview",
  mysql: "MySQL",
  react: "React",
  typescript: "TypeScript",
  css: "CSS",
  gym: "Gym",
};

function getHref(category: string, slug: string): string {
  if (slug === "index") return `/${category}`;
  return `/${category}/${slug}`;
}

export function buildSearchIndex(): SearchItem[] {
  const categories = getAllCategories();
  const items: SearchItem[] = [];

  for (const cat of categories) {
    const articles = getAllContent(cat);
    for (const article of articles) {
      const snippet = article.content
        .replace(/```[\s\S]*?```/g, "")
        .replace(/#{1,6}\s/g, "")
        .replace(/\*\*|__|\*|_/g, "")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/\n+/g, " ")
        .trim()
        .slice(0, 200);

      items.push({
        id: `${cat}-${article.slug}`,
        title: article.frontmatter.title,
        description: article.frontmatter.description ?? "",
        category: cat,
        categoryLabel: categoryLabels[cat] ?? cat,
        tags: article.frontmatter.tags ?? [],
        href: getHref(cat, article.slug),
        snippet,
      });
    }
  }

  return items;
}
