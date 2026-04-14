import type { Metadata } from "next";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

export const metadata: Metadata = {
  title: "MySQL",
  description: "MySQL fundamentals, operators, joins, advanced queries, and cheat sheets",
};

export default function MySqlPage() {
  const { content, frontmatter } = getContentBySlug("mysql", "index");
  return <DocPage frontmatter={frontmatter} content={content} />;
}
