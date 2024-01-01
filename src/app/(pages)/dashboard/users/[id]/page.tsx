import FollowersCard from "@/app/ui/molecules/dashboard/VotersCard";
import ProfileCard from "@/app/ui/molecules/singleInfo/ProfileCard";

import data from "@/app/lib/data/index.json";
import SingleInfoCardWrapper from "@/app/ui/molecules/singleInfo/SingleInfoCardWrapper";

import SingleInfoPostCards from "@/app/ui/molecules/singleInfo/SingleInfoPostCards";

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
        <SingleInfoPostCards />
      </div>
    </div>
  );
};

export default SingleUser;
