"use client";

import { useState } from "react";

import clsx from "clsx";

import CarretIcon from "../../../../public/svg/CarretIcon";
import { SelectValueType } from "@/app/lib/types/components";

const SelectWithSearch = ({
  options,
  mxWt,
  placeHolder,
}: {
  options: SelectValueType[];
  mxWt?: string;
  placeHolder?: string;
}) => {
  const [selectedItem, setSelectedItem] = useState<SelectValueType | null>(
    null
  );

  const holder = placeHolder;

  const [toggleList, setToggleList] = useState<boolean>(false);

  const handleOptionSelect = (val: SelectValueType) => setSelectedItem(val);

  const handleToggleList = () => setToggleList((prev) => !prev);

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
          {selectedItem?.label || holder}
        </span>
        <CarretIcon otherstyle={toggleList ? "transform rotate-180" : ""} />
      </div>
      <div
        className={clsx(
          "absolute top-12 w-full left-0 cursor-pointer transition-all duration-150 transform origin-top z-50 shadow",
          toggleList
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 cursor-none pointer-events-none"
        )}
      >
        <input
          type="text"
          className="bg-[#feffff] text-sm placeholder:text-twikkl-inactive flex-1 py-[0.625rem] w-full px-4 rounded-t-md "
          placeholder="Search"
        />

        {options?.map(({ label, value }) => (
          <div
            key={label}
            className={clsx(
              "flex items-center justify-between px-4 py-3 first:rounded-t-md  last:border-0 last:rounded-b-md hover:bg-twikkl-primary hover:text-white cursor-pointer",
              label === selectedItem?.label
                ? "bg-green-300"
                : "bg-twikkl-tertiary"
            )}
            onClick={() => {
              handleOptionSelect({ label, value });
              handleToggleList();
            }}
          >
            <span className="capitalize">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectWithSearch;
