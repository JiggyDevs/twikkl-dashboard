import UsersTableFilter from "@/app/ui/molecules/UsersTableFilter";
import Table from "@/app/ui/organisms/Table";

const UsersPage = () => {
  return (
    <div className="grid gap-y-4">
      <h1 className="text-xl font-bold text-twikkl-main">TwikkL Users</h1>
      <div className="bg-twikkl-tertiary rounded-3xl flex p-8 w-full">
        <UsersTableFilter />
        <Table />
      </div>
    </div>
  );
};

export default UsersPage;
