import Select from "../../atoms/Select";
import dynamic from "next/dynamic";
import data from "@/app/lib/data/index.json";
import { timeLine } from "@/app/lib/data";

const SingleInfoPostCard = dynamic(
  () => import("@/app/ui/molecules/singleInfo/SingleInfoPostCard"),
  { ssr: false }
);

const SingleInfoPostCards = () => {
  const { userRecentPosts } = data;
  return (
    <div className="bg-twikkl-tertiary p-8 rounded-3xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-medium">Recent Posts</h1>
        <Select placeHolder="Today" mxWt="max-w-[9.5rem]" options={timeLine} />
      </div>
      <div className="flex flex-col gap-y-4 overflow-y-auto max-h-[38rem]">
        {userRecentPosts?.map((post, i) => (
          <div
            className=" pb-4 border-b-twikkl-inactive border-b-[0.025rem] last:border-none last:pb-0"
            key={`Recent-Posts-${post.time + i}`}
          >
            <SingleInfoPostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleInfoPostCards;
