import dynamic from "next/dynamic";

import ReportTableFilter from "@/app/ui/molecules/ReportTableFilter";

import Pagination from "@/app/ui/molecules/Pagination";

import data from "@/app/lib/data/index.json";

const SingleInfoPostCard = dynamic(
  () => import("@/app/ui/molecules/singleInfo/SingleInfoPostCard"),
  { ssr: false }
);

const ReportPage = () => {
  const { userRecentPosts } = data;
  return (
    <div className="grid gap-y-4 pb-2">
      <h1 className="text-xl font-bold text-twikkl-main">Reports</h1>
      <div className="bg-twikkl-tertiary rounded-3xl flex flex-col py-6 p-4 md:p-8 w-full mb-2">
        <ReportTableFilter />
        <div className="flex flex-col gap-y-4 overflow-y-auto max-h-[38rem] mt-4">
          {userRecentPosts?.map((post, i) => (
            <div
              className="pb-4 last:border-none last:pb-0"
              key={`Recent-Post-${post.time + i}`}
            >
              <SingleInfoPostCard {...post} />
            </div>
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ReportPage;
