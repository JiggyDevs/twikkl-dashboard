import SearchBox from "../atoms/SearchBox";
import Select from "../atoms/Select";
import SelectWithSearch from "./SelectWithSearch";
import platformConstants from "@/app/lib/utils/platformConstants";

const GroupTableFilter = () => {
  return (
    <div className="grid gap-y-4 md:gap-y-0 md:grid-cols-[0.6fr_0.4fr] gap-x-2 w-full">
      <div className="flex gap-x-4 items-center">
        <SelectWithSearch
          placeHolder="Select Country"
          options={[{ label: "Followers", value: "10k" }]}
          mxWt="max-w-[10rem]"
        />
        <span className="text-2xl">🇳🇬</span>
        <div className="w-full md:hidden">
          <Select
            placeHolder="Group Type"
            options={platformConstants.genderType}
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
          placeHolder="Group Type"
          options={platformConstants.genderType}
          mxWt="hidden md:flex md:max-w-full"
        />
      </div>
    </div>
  );
};

export default GroupTableFilter;
