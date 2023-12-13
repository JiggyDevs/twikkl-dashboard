import { durationType } from "@/app/lib/data";
import SearchBox from "../atoms/SearchBox";
import Select from "../atoms/Select";

const ReportTableFilter = () => {
  return (
    <div className="grid gap-y-4 md:gap-y-0 md:grid-cols-[0.6fr_0.4fr] gap-x-2 w-full">
      <div className="flex gap-x-4 items-center">
        <h2 className="font-medium text-twikkl-main">Recent Reports</h2>
        <div className="w-full md:hidden">
          <Select
            placeHolder={durationType[0]?.label}
            options={durationType}
            mxWt="max-w-full"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-[0.7fr_0.3fr] gap-x-8">
        <SearchBox
          placeholder="Search for by username"
          mxWt="max-w-full border"
          border="border"
        />
        <Select
          placeHolder={durationType[0]?.label}
          options={durationType}
          mxWt="hidden md:flex md:max-w-full"
        />
      </div>
    </div>
  );
};

export default ReportTableFilter;
