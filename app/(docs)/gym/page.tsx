import type { Metadata } from "next";
import { getContentBySlug } from "@/lib/mdx";
import { DocPage } from "@/components/mdx/doc-page";

export const metadata: Metadata = {
  title: "Lịch tập Gym",
  description: "Lịch tập gym 5 buổi/tuần - Pull day, Push day, Legs day",
};

export default function GymPage() {
  const { content, frontmatter } = getContentBySlug("gym", "index");
  return <DocPage frontmatter={frontmatter} content={content} />;
}
