"use client";

import { useState } from "react";
import SearchBox from "../atoms/SearchBox";
import Select from "../atoms/Select";
import CountryDropdown from "./CountryDropdown";
import platformConstants from "@/app/lib/config/platformConstants";

const WalletTableFilter = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("🇳🇬");

  const handleEmojiSelect = (emoji: string) => {
    setSelectedEmoji(emoji);
  };

  return (
    <div className="grid gap-y-4 md:gap-y-0 md:grid-cols-[0.6fr_0.4fr] gap-x-2 w-full">
      <div className="flex gap-x-4 items-center">
        <CountryDropdown
          mxWt="max-w-[12rem]"
          onEmojiSelect={handleEmojiSelect}
        />
        <span className="text-2xl">{selectedEmoji}</span>
        <div className="w-full md:hidden">
          <Select
            placeHolder="Wallet Type"
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
          placeHolder="Wallet Type"
          options={platformConstants.genderType}
          mxWt="hidden md:flex md:max-w-full"
        />
      </div>
    </div>
  );
};

export default WalletTableFilter;
