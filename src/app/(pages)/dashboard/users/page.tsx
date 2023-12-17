import UsersTableFilter from "@/app/ui/molecules/UsersTableFilter";
import Table from "@/app/ui/organisms/Table";
import data from "@/app/lib/data/index.json";
import { userTableHeaders } from "@/app/lib/data";
import Pagination from "@/app/ui/molecules/Pagination";

const UsersPage = () => {
  return (
    <div className="grid gap-y-4">
      <h1 className="text-xl font-bold text-twikkl-main">TwikkL Users</h1>
      <div className="bg-twikkl-tertiary rounded-3xl grid p-8 w-full gap-y-4">
        <UsersTableFilter />
        <Table columns={userTableHeaders} data={data.twiKKlUserData} />
        <Pagination />
      </div>
    </div>
  );
};

export default UsersPage;
