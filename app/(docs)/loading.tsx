export default function DocsLoading() {
  return (
    <div className="flex flex-1 gap-8">
      <main className="flex-1 min-w-0 max-w-3xl animate-pulse">
        <div className="mb-8 space-y-3">
          <div className="h-8 bg-muted rounded w-1/3" />
          <div className="h-4 bg-muted rounded w-2/3" />
          <div className="flex gap-2">
            <div className="h-5 bg-muted rounded w-16" />
            <div className="h-5 bg-muted rounded w-20" />
          </div>
        </div>
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          ))}
        </div>
      </main>
      <div className="hidden xl:block w-48 shrink-0">
        <div className="sticky top-20 pt-6 space-y-2 animate-pulse">
          <div className="h-3 bg-muted rounded w-20 mb-4" />
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-3 bg-muted rounded w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
