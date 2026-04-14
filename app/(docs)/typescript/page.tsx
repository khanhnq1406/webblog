import type { Metadata } from "next";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

export const metadata: Metadata = {
  title: "TypeScript",
  description: "TypeScript everyday types, functions, enums, interfaces, generics, and advanced patterns",
};

export default function TypeScriptPage() {
  const { content, frontmatter } = getContentBySlug("typescript", "index");
  return <DocPage frontmatter={frontmatter} content={content} />;
}
