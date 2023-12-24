import FollowersCard from "@/app/ui/molecules/dashboard/VotersCard";
import ProfileCard from "@/app/ui/molecules/singleInfo/ProfileCard";

import data from "@/app/lib/data/index.json";
import SingleInfoCardWrapper from "@/app/ui/molecules/singleInfo/SingleInfoCardWrapper";

import Select from "@/app/ui/atoms/Select";
import { selectMonths } from "@/app/lib/data";
import Image from "next/image";

const SingleUser = () => {
  const { votersData } = data;

  return (
    <div className="flex h-screen gap-x-6">
      <div className="w-2/4 flex flex-col gap-y-6">
        <ProfileCard />
        <FollowersCard label="Followers" data={votersData.slice(0, 4)} />
      </div>
      <div className="w-full space-y-6">
        <SingleInfoCardWrapper />
        <div className="bg-twikkl-tertiary p-8 rounded-3xl">
          <div className="flex items-center justify-between">
            <h1 className="font-medium">Recent Posts</h1>
            <Select
              placeHolder="Today"
              mxWt="max-w-[8.5rem]"
              options={selectMonths}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <div className="flex gap-x-4 items-start w-2/3">
                <Image
                  src="/img/profile.webp"
                  width={47}
                  height={47}
                  alt="user-image"
                  className="h-12 w-12 rounded-full"
                />

                <div className="w-[90%]">
                  <h2 className="font-semibold text-twikkl-main">
                    maxwell.jgy
                  </h2>
                  <p className="text-sm">
                    The joy of using AI is like discovering a whole new world!
                    🌍✨ It&apos;s fascinating to see how artificial
                    intelligence can simplify tasks and make our lives easier.{" "}
                    {["#AIWonderland", "#TechMagic"].map((tag, i) => (
                      <span
                        key={`recent-user-` + { tag } + i}
                        className="text-twikkl-inactive"
                      >
                        {tag}{" "}
                      </span>
                    ))}
                  </p>
                  <span className="text-twikkl-primary">12 hrs ago</span>
                </div>
              </div>

              <div className="">
                <Image
                  src="/img/profile.webp"
                  width={150}
                  height={80}
                  alt="user-image"
                  className="rounded-lg max-h-28"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
