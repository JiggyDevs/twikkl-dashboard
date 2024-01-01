"use client";

import { useState } from "react";
import SearchBox from "../atoms/SearchBox";
import Select from "../atoms/Select";
import CountryDropdown from "./CountryDropdown";
import { userSelectFilter } from "@/app/lib/data";
import platformConstants from "@/app/lib/config/platformConstants";

const UsersTableFilter = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("🇳🇬");

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="grid gap-y-4 md:gap-y-0 md:grid-cols-[0.25fr_0.75fr] gap-x-2 w-full">
      <div className="flex gap-x-4 items-center">
        <CountryDropdown
          mxWt="max-w-[12rem]"
          onEmojiSelect={handleEmojiSelect}
        />
        <span className="text-2xl">{selectedEmoji}</span>
        <div className="w-full md:hidden">
          <Select
            placeHolder="Gender"
            options={platformConstants.genderType}
            mxWt="max-w-full"
          />
        </div>
      </div>
      <div className="flex gap-x-6 items-center w-full md:hidden">
        <Select
          placeHolder="Followers"
          options={userSelectFilter}
          mxWt="max-w-full"
        />
        <Select
          placeHolder="Points"
          options={userSelectFilter}
          mxWt="max-w-full"
        />
      </div>
      <div className="flex items-center gap-x-6 w-full">
        <SearchBox placeholder="Search for by username" border="border" />
        <div className="gap-x-6 items-center hidden md:flex w-full">
          <Select
            placeHolder="Followers"
            options={userSelectFilter}
            mxWt="max-w-[10rem]"
          />
          <Select
            placeHolder="Points"
            options={userSelectFilter}
            mxWt="max-w-[10rem]"
          />
          <Select placeHolder="Gender" options={platformConstants.genderType} />
        </div>
      </div>
    </div>
  );
};

export default UsersTableFilter;
