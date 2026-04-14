import type { Metadata } from "next";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

export const metadata: Metadata = {
  title: "Backend Interview",
  description: "Backend development interview preparation from APIs and databases to architecture",
};

export default function BeInterviewPage() {
  const { content, frontmatter } = getContentBySlug("be-interview", "index");
  return <DocPage frontmatter={frontmatter} content={content} />;
}
