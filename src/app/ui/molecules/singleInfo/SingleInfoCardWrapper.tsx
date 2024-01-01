import data from "@/app/lib/data/index.json";
import SingleInfoCard from "./SingleInfoCard";

const SingleInfoCardWrapper = () => {
  const { singleUserInfo } = data;

  return (
    <div className="grid grid-cols-4 gap-x-6">
      <SingleInfoCard {...singleUserInfo[0]} indicator="green" />
      <SingleInfoCard {...singleUserInfo[1]} indicator="lightOrange" />
      <SingleInfoCard {...singleUserInfo[2]} indicator="darkOrange" />
      <SingleInfoCard {...singleUserInfo[3]} indicator="darkBlue" />
    </div>
  );
};

export default SingleInfoCardWrapper;
