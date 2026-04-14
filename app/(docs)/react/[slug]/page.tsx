import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

const VALID_SLUGS = ["components", "rendering", "hooks"];

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { frontmatter } = getContentBySlug("react", slug);
    return { title: frontmatter.title, description: frontmatter.description };
  } catch {
    return { title: "React" };
  }
}

export default async function ReactSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!VALID_SLUGS.includes(slug)) notFound();
  try {
    const { content, frontmatter } = getContentBySlug("react", slug);
    return <DocPage frontmatter={frontmatter} content={content} />;
  } catch {
    notFound();
  }
}
