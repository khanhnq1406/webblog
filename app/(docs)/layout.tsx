import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Sidebar } from "@/components/layout/sidebar";
import { ReadingProgress } from "@/components/layout/reading-progress";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <ReadingProgress />
      <Header />
      <div className="mx-auto flex w-full max-w-screen-2xl flex-1 gap-8 px-4 py-8">
        <Sidebar />
        <div className="flex flex-1 gap-8 min-w-0">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
