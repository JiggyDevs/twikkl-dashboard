import CardWrapper from "@/app/ui/organisms/dashboard/CardWrapper";
import EngagementChart from "@/app/ui/organisms/dashboard/EngagementChart";

const Page = () => {
  return (
    <div className="grid gap-y-6">
      <CardWrapper />
      <div className="grid md:grid-cols-[0.7fr_0.3fr] gap-x-6">
        <div className="w-full">
          <EngagementChart />
        </div>
        <div className="">2</div>
      </div>
    </div>
  );
};

export default Page;
