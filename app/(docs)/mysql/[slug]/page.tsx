import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

const VALID_SLUGS = ["basics", "operators", "join", "advanced-sql", "cheatsheet"];

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { frontmatter } = getContentBySlug("mysql", params.slug);
    return { title: frontmatter.title, description: frontmatter.description };
  } catch {
    return { title: "MySQL" };
  }
}

export default function MySqlSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!VALID_SLUGS.includes(params.slug)) notFound();
  try {
    const { content, frontmatter } = getContentBySlug("mysql", params.slug);
    return <DocPage frontmatter={frontmatter} content={content} />;
  } catch {
    notFound();
  }
}
