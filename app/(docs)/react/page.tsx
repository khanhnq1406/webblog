import type { Metadata } from "next";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

export const metadata: Metadata = {
  title: "React Roadmap",
  description: "React roadmap covering components, rendering lifecycle, hooks, and best practices",
};

export default function ReactPage() {
  const { content, frontmatter } = getContentBySlug("react", "index");
  return <DocPage frontmatter={frontmatter} content={content} />;
}
