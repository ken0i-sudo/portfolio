/** Skeleton placeholder shown while project cards are loading/filtering. */
export function SkeletonCard() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="skeleton h-52 w-full" />
      <div className="space-y-3 p-6">
        <div className="skeleton h-4 w-2/3" />
        <div className="skeleton h-3 w-full" />
        <div className="skeleton h-3 w-5/6" />
        <div className="flex gap-2 pt-2">
          <div className="skeleton h-6 w-16" />
          <div className="skeleton h-6 w-16" />
          <div className="skeleton h-6 w-16" />
        </div>
      </div>
    </div>
  );
}
