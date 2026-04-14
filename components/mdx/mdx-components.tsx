import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { YouTube } from "./youtube-embed";
import { Collapsible } from "./collapsible-section";
import { Callout } from "./callout";

export function getMDXComponents(): MDXComponents {
  return {
    // Headings
    h1: ({ children, id }) => (
      <h1 id={id} className="scroll-mt-20 text-3xl font-bold tracking-tight mt-8 mb-4 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2 id={id} className="scroll-mt-20 text-2xl font-semibold tracking-tight mt-10 mb-4 border-b pb-2">
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3 id={id} className="scroll-mt-20 text-xl font-semibold tracking-tight mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children, id }) => (
      <h4 id={id} className="scroll-mt-20 text-lg font-semibold mt-6 mb-2">
        {children}
      </h4>
    ),

    // Text
    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-4 mb-4">{children}</p>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,

    // Links
    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href ?? "#"}
          className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          {children}
        </Link>
      );
    },

    // Inline code
    code: ({ children, className }) => {
      // If it has a language class, it's a code block handled by rehype-pretty-code
      if (className) return <code className={className}>{children}</code>;
      return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal">
          {children}
        </code>
      );
    },

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="mt-4 border-l-4 border-primary/40 pl-4 italic text-muted-foreground [&>p]:mb-0">
        {children}
      </blockquote>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-2 [&>li]:mt-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 [&>li]:mt-1">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,

    // Table
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto rounded-lg border">
        <table className="w-full text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-muted/50">{children}</thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b transition-colors hover:bg-muted/30">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-semibold text-muted-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 align-top">{children}</td>
    ),

    // Horizontal rule
    hr: () => <hr className="my-8 border-border" />,

    // Image
    img: ({ src, alt }) => (
      <span className="my-6 block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? ""}
          className="mx-auto max-w-full rounded-lg border"
          loading="lazy"
        />
        {alt && (
          <span className="mt-2 block text-center text-xs text-muted-foreground">
            {alt}
          </span>
        )}
      </span>
    ),

    // Custom components
    YouTube,
    Collapsible,
    Callout,
  };
}
