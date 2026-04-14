import type { Metadata } from "next";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

export const metadata: Metadata = {
  title: "Designing Data-Intensive Applications",
  description: "A 4-week study guide for Martin Kleppmann's DDIA — covering reliability, scalability, distributed systems, and data processing",
};

export default function DDIAPage() {
  const { content, frontmatter } = getContentBySlug("ddia", "index");
  return <DocPage frontmatter={frontmatter} content={content} />;
}
