import data from "@/app/lib/data/index.json";
import SingleInfoCard from "./SingleInfoCard";

const GroupInfoCardWrapper = () => {
  const { groupInfo } = data;

  return (
    <div className="grid gap-y-6 md:gap-y-0 md:grid-cols-4 md:gap-x-6">
      <SingleInfoCard {...groupInfo[0]} indicator="green" />
      <SingleInfoCard {...groupInfo[1]} indicator="lightOrange" />
      <SingleInfoCard {...groupInfo[2]} indicator="darkOrange" />
      <SingleInfoCard {...groupInfo[3]} indicator="darkBlue" />
    </div>
  );
};

export default GroupInfoCardWrapper;
