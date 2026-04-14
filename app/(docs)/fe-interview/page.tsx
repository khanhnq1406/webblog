import type { Metadata } from "next";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

export const metadata: Metadata = {
  title: "Frontend Interview",
  description: "Essential frontend interview Q&A covering CSS, JavaScript, HTML, and web performance",
};

export default function FeInterviewPage() {
  const { content, frontmatter } = getContentBySlug("fe-interview", "index");
  return <DocPage frontmatter={frontmatter} content={content} />;
}
