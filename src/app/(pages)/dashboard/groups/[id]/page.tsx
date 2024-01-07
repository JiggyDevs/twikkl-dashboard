import AdministratorsCard from "@/app/ui/molecules/dashboard/VotersCard";

import data from "@/app/lib/data/index.json";
import GroupInfoCardWrapper from "@/app/ui/molecules/singleInfo/GroupInfoCardWrapper";

import SingleInfoPostCards from "@/app/ui/molecules/singleInfo/SingleInfoPostCards";
import GroupProfileCard from "@/app/ui/molecules/singleInfo/GroupProfileCard";

const SingleGroup = () => {
  const { votersData } = data;

  return (
    <div className="flex flex-col md:flex-row h-screen gap-x-6">
      <div className="flex flex-col md:w-2/4 gap-y-6 mb-6 md:mb-0">
        <GroupProfileCard />
        <AdministratorsCard
          label="Administrators"
          data={votersData.slice(0, 4)}
        />
      </div>
      <div className="w-full space-y-6">
        <GroupInfoCardWrapper />
        <SingleInfoPostCards />
      </div>
    </div>
  );
};

export default SingleGroup;
