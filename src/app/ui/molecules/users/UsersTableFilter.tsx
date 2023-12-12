import React from "react";
import SearchBox from "../../atoms/SearchBox";
import Select from "../../atoms/Select";
import SelectWithSearch from "../SelectWithSearch";

const UsersTableFilter = () => {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-x-4 items-center flex-[0.3]">
        <SelectWithSearch
          placeHolder="Select Country"
          options={[{ label: "Followers", value: "10k" }]}
          mxWt="max-w-[10rem]"
        />
        <span className="text-2xl">🇳🇬</span>
      </div>
      <div className="flex items-center gap-x-6 flex-[0.75] w-full">
        <SearchBox placeholder="Search for by username" />
        <Select
          placeHolder="Followers"
          options={[{ label: "Followers", value: "10k" }]}
          mxWt="max-w-[10rem]"
        />
        <Select
          placeHolder="Points"
          options={[{ label: "10k-20k", value: "start" }]}
        />
        <Select
          placeHolder="Gender"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />
      </div>
    </div>
  );
};

export default UsersTableFilter;
