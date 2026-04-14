import * as runtime from "react/jsx-runtime";
import { compile, run } from "@mdx-js/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import { Badge } from "@/components/ui/badge";
import { getMDXComponents } from "@/components/mdx/mdx-components";
import { TableOfContents } from "@/components/layout/toc";
import { extractToc } from "@/lib/toc";
import type { FrontMatter } from "@/lib/mdx";

async function MDXContent({ source }: { source: string }) {
  const compiled = await compile(source, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["anchor"], ariaLabel: "Link to section" },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: true,
        },
      ],
    ] as any,
  });

  const { default: Content } = await run(String(compiled), {
    ...(runtime as any),
    baseUrl: import.meta.url,
  });

  const components = getMDXComponents();
  return <Content components={components} />;
}

export function DocPage({
  frontmatter,
  content,
}: {
  frontmatter: FrontMatter;
  content: string;
}) {
  const toc = extractToc(content);

  return (
    <>
      <main className="flex-1 min-w-0 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            {frontmatter.title}
          </h1>
          {frontmatter.description && (
            <p className="mt-2 text-lg text-muted-foreground">
              {frontmatter.description}
            </p>
          )}
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="prose prose-zinc dark:prose-invert max-w-none prose-dark-fix">
          <MDXContent source={content} />
        </div>
      </main>
      <TableOfContents items={toc} />
    </>
  );
}
