import dynamic from "next/dynamic";

import ActiveUsersCard from "@/app/ui/organisms/dashboard/ActiveUsers";
import TopEarnersCard from "@/app/ui/organisms/dashboard/TopEarnersCard";
import VotersContainer from "@/app/ui/organisms/dashboard/VotersContainer";

import CardWrapper from "@/app/ui/organisms/dashboard/CardWrapper";

const EngagementChart = dynamic(
  () => import("@/app/ui/organisms/dashboard/EngagementChart"),
  { ssr: false }
);

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
