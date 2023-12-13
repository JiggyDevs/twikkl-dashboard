import ReportTableFilter from "@/app/ui/molecules/ReportTableFilter";

const ReportPage = () => {
  return (
    <div className="grid gap-y-4">
      <h1 className="text-xl font-bold text-twikkl-main">Reports</h1>
      <div className="bg-twikkl-tertiary rounded-3xl flex p-8 w-full">
        <ReportTableFilter />
      </div>
    </div>
  );
};

export default ReportPage;
