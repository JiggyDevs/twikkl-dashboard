export const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function EngagementChartSkeleton() {
  return (
    <div
      className={`${shimmer} relative w-full overflow-hidden md:col-span-4 h-96`}
    >
      <div className="flex justify-between">
        <div className="mb-4 h-8 w-36 bg-twikkl-active rounded-full" />
        <div className="mb-4 h-8 w-36 rounded-full bg-twikkl-active" />
      </div>
      <div className="grid gap-y-7">
        <div className="rounded-full bg-twikkl-active p-4" />
        <div className="rounded-full bg-twikkl-active p-4" />
        <div className="rounded-full bg-twikkl-active p-4" />
        <div className="rounded-full bg-twikkl-active p-4" />
        <div className="rounded-full bg-twikkl-active p-4" />
        <div className="rounded-full bg-twikkl-active p-4" />
      </div>
    </div>
  );
}
