import ActiveUsersCard from "@/app/ui/organisms/dashboard/ActiveUsers";
import CardWrapper from "@/app/ui/organisms/dashboard/CardWrapper";
import EngagementChart from "@/app/ui/organisms/dashboard/EngagementChart";
import TopEarnersCard from "@/app/ui/organisms/dashboard/TopEarnersCard";
import VotersContainer from "@/app/ui/organisms/dashboard/VotersContainer";

const Page = () => {
  return (
    <div className="grid gap-y-6 w-full">
      <CardWrapper />
      <div className="grid md:grid-cols-[0.7fr_0.3fr] gap-y-6 md:gap-y-0 gap-x-6 sidebar-scroll">
        <div className="space-y-6">
          <EngagementChart />
          <div className="grid md:grid-cols-[6fr_3fr] gap-y-6 md:gap-y-0 md:gap-x-6">
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
