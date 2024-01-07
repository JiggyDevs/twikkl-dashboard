import { groupTableHeaders } from "@/app/lib/data";
import GroupTableFilter from "@/app/ui/molecules/GroupTableFilter";
import Table from "@/app/ui/organisms/Table";
import data from "@/app/lib/data/index.json";
import Pagination from "@/app/ui/molecules/Pagination";

const GroupsPage = () => {
  return (
    <div className="grid gap-y-4">
      <h1 className="text-xl font-bold text-twikkl-main">Groups</h1>
      <div className="bg-twikkl-tertiary rounded-3xl grid px-4 py-6 md:p-8 w-full gap-y-4">
        <GroupTableFilter />
        <Table columns={groupTableHeaders} data={data.twiKKlGroupData} />
        <Pagination />
      </div>
    </div>
  );
};

export default GroupsPage;
