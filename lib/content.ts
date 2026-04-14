import { getAllCategories, getAllContent, type FrontMatter } from "./mdx";

export type CategoryInfo = {
  slug: string;
  title: string;
  description: string;
  href: string;
  articleCount: number;
  tags: string[];
  icon: string;
};

const categoryMeta: Record<
  string,
  { title: string; description: string; icon: string }
> = {
  "fe-interview": {
    title: "Frontend Interview",
    description:
      "30+ essential frontend Q&A covering CSS, JavaScript, DOM, and web performance.",
    icon: "Monitor",
  },
  "be-interview": {
    title: "Backend Interview",
    description:
      "Backend development interview prep from APIs and databases to distributed systems.",
    icon: "Server",
  },
  mysql: {
    title: "MySQL",
    description:
      "MySQL fundamentals, operators, joins, advanced queries, and a quick cheat sheet.",
    icon: "Database",
  },
  react: {
    title: "React",
    description:
      "React roadmap: components, rendering lifecycle, hooks, and best practices.",
    icon: "Atom",
  },
  typescript: {
    title: "TypeScript",
    description:
      "TypeScript everyday types, enums, interfaces, generics, and advanced patterns.",
    icon: "Code2",
  },
  css: {
    title: "CSS",
    description:
      "CSS techniques and quick references: animations, flexbox, grid, and variables.",
    icon: "Palette",
  },
  gym: {
    title: "Gym",
    description:
      "Lịch tập gym 5 buổi/tuần — Pull, Push, and Legs day workout guide.",
    icon: "Dumbbell",
  },
};

const categoryOrder = [
  "fe-interview",
  "be-interview",
  "react",
  "typescript",
  "mysql",
  "css",
  "gym",
];

export function getCategoryInfo(): CategoryInfo[] {
  const categories = getAllCategories();

  return categoryOrder
    .filter((slug) => categories.includes(slug))
    .map((slug) => {
      const meta = categoryMeta[slug] ?? {
        title: slug,
        description: "",
        icon: "FileText",
      };
      const articles = getAllContent(slug);
      const allTags = articles.flatMap((a) => a.frontmatter.tags ?? []);
      const uniqueTags = Array.from(new Set(allTags)).slice(0, 4);
      const articleCount = articles.filter((a) => a.slug !== "index").length;

      return {
        slug,
        title: meta.title,
        description: meta.description,
        href: `/${slug}`,
        articleCount,
        tags: uniqueTags,
        icon: meta.icon,
      };
    });
}

export function getAllTags(): string[] {
  const categories = getAllCategories();
  const allTags = categories.flatMap((cat) => {
    const articles = getAllContent(cat);
    return articles.flatMap((a) => a.frontmatter.tags ?? []);
  });
  return Array.from(new Set(allTags)).sort();
}
