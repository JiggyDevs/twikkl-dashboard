import ActiveUsersCard from "@/app/ui/organisms/dashboard/ActiveUsers";
import CardWrapper from "@/app/ui/organisms/dashboard/CardWrapper";
import EngagementChart from "@/app/ui/organisms/dashboard/EngagementChart";
import TopEarnersCard from "@/app/ui/organisms/dashboard/TopEarnersCard";
import VotersContainer from "@/app/ui/organisms/dashboard/VotersContainer";

const Page = () => {
  return (
    <div className="grid gap-y-6">
      <CardWrapper />
      <div className="grid md:grid-cols-[0.75fr_0.25fr] gap-y-6 md:gap-y-0 gap-x-6 sidebar-scroll ">
        <div className="w-full space-y-6">
          <EngagementChart />
          <div className="grid gap-y-6 md:grid-cols-[6fr_3fr] md:gap-x-6 md-gap-y-0">
            <TopEarnersCard />
            <ActiveUsersCard />
          </div>
        </div>
        <VotersContainer />
      </div>
    </div>
  );
};

export default Page;
