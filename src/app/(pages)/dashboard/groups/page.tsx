import GroupTableFilter from "@/app/ui/molecules/GroupTableFilter";

const GroupsPage = () => {
  return (
    <div className="grid gap-y-4">
      <h1 className="text-xl font-bold text-twikkl-main">Groups</h1>
      <div className="bg-twikkl-tertiary rounded-3xl flex p-8 w-full">
        <GroupTableFilter />
      </div>
    </div>
  );
};

export default GroupsPage;
