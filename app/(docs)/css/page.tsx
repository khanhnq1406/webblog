import type { Metadata } from "next";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

export const metadata: Metadata = {
  title: "CSS Cheatsheet",
  description: "Quick reference for CSS techniques and modern features",
};

export default function CssPage() {
  const { content, frontmatter } = getContentBySlug("css", "index");
  return <DocPage frontmatter={frontmatter} content={content} />;
}
