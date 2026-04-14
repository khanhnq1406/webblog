import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type FrontMatter = {
  title: string;
  description?: string;
  category: string;
  tags?: string[];
  date?: string;
  slug?: string;
};

export type ContentItem = {
  frontmatter: FrontMatter;
  content: string;
  slug: string;
  category: string;
};

export function getContentBySlug(category: string, slug: string): ContentItem {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    frontmatter: { ...(data as FrontMatter), slug },
    content,
    slug,
    category,
  };
}

export function getAllContent(category: string): ContentItem[] {
  const dir = path.join(contentDir, category);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return getContentBySlug(category, slug);
    })
    .sort((a, b) => {
      const order = ["index", "basic", "intermediate", "advanced", "basics", "operators", "join", "advanced-sql", "cheatsheet", "components", "rendering", "hooks"];
      const ia = order.indexOf(a.slug);
      const ib = order.indexOf(b.slug);
      if (ia === -1 && ib === -1) return a.slug.localeCompare(b.slug);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
}

export function getAllCategories(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir).filter((f) => {
    return fs.statSync(path.join(contentDir, f)).isDirectory();
  });
}

export function getContentMetadata(
  category: string,
  slug: string
): FrontMatter {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return { ...(data as FrontMatter), slug };
}
