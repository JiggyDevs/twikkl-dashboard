import { ReloadIcon } from "../../../../../public/svg";

const ActiveUsersCard = () => {
  return (
    <div className="bg-twikkl-tertiary rounded-3xl p-8 flex flex-col justify-between">
      <div className="space-y-4">
        <h2 className="font-medium">Active Users</h2>
        <div className="flex gap-x-2 items-center">
          <span className="flex items-center text-twikkl-main text-sm">
            Recently, about a minute ago
          </span>
          <ReloadIcon />
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <h1 className="text-[6.75rem] font-bold leading-none">85%</h1>
        <span className="text-twikkl-primary text-xs">online</span>
      </div>
    </div>
  );
};

export default ActiveUsersCard;
