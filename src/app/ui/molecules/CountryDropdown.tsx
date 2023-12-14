"use client";

import { useState, useMemo, ChangeEvent } from "react";

import clsx from "clsx";

import CarretIcon from "../../../../public/svg/CarretIcon";
import { SelectValueType } from "@/app/lib/types/components";

import countryData from "@/app/lib/data/country-data.json";

const CountryDropdown = ({
  mxWt,
  onEmojiSelect,
}: {
  mxWt?: string;
  onEmojiSelect: (emoji: string) => void;
}) => {
  const [selectedItem, setSelectedItem] = useState<SelectValueType | null>(
    null
  );

  const [searchQuery, setSearchQuery] = useState("");

  const countryList = useMemo(() => {
    return countryData
      ?.map((country) => ({
        label: country.name,
        value: country.code,
        emoji: country.emoji,
      }))
      .filter((country) =>
        country.label.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [searchQuery]);

  const [toggleList, setToggleList] = useState<boolean>(false);

  const handleOptionSelect = (val: SelectValueType) => setSelectedItem(val);

  const handleToggleList = () => setToggleList((prev) => !prev);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div
      className={clsx(
        "flex items-center bg-transparent border border-twikkl-inactive focus:border-twikkl-primary py-3 px-4 rounded-lg text-label relative text-sm w-full",
        mxWt || "max-w-[8rem]"
      )}
    >
      <div
        className="flex items-center justify-between w-full cursor-pointer gap-x-2"
        onClick={handleToggleList}
      >
        <span className="capitalize pointer-events-none truncate">
          {selectedItem?.label || "Select Country"}
        </span>
        <span>
          <CarretIcon otherstyle={toggleList ? "transform rotate-180" : ""} />
        </span>
      </div>
      <div
        className={clsx(
          "absolute top-12 w-full left-0 cursor-pointer transition-all duration-150 transform origin-top z-50 shadow first:rounded-t-md",
          toggleList
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 cursor-none pointer-events-none"
        )}
      >
        <input
          type="text"
          className="bg-[#feffff] text-sm placeholder:text-twikkl-inactive flex-1 py-[0.625rem] w-full px-4 first:rounded-t-md"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />

        <div className="max-h-[34.5rem] overflow-y-auto">
          {countryList?.map(({ label, value, emoji }) => (
            <div
              key={label}
              className={clsx(
                "flex items-center justify-between px-4 py-3 last:border-0 last:rounded-b-md hover:bg-twikkl-primary hover:text-white cursor-pointer gap-x-2",
                label === selectedItem?.label
                  ? "bg-green-300"
                  : "bg-twikkl-tertiary"
              )}
              onClick={() => {
                handleOptionSelect({ label, value });
                handleToggleList();
                onEmojiSelect(emoji || "");
              }}
            >
              <span className="capitalize">{label}</span> {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDropdown;
