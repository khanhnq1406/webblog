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
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { frontmatter } = getContentBySlug("react", params.slug);
    return { title: frontmatter.title, description: frontmatter.description };
  } catch {
    return { title: "React" };
  }
}

export default function ReactSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!VALID_SLUGS.includes(params.slug)) notFound();
  try {
    const { content, frontmatter } = getContentBySlug("react", params.slug);
    return <DocPage frontmatter={frontmatter} content={content} />;
  } catch {
    notFound();
  }
}
