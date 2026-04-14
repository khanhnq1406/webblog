export function Footer() {
  return (
    <footer className="border-t py-6 mt-auto">
      <div className="mx-auto max-w-screen-2xl px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Khanh&apos;s Blog. Built with
          Next.js &amp; shadcn/ui.
        </p>
        <p>Software Engineer</p>
      </div>
    </footer>
  );
}
