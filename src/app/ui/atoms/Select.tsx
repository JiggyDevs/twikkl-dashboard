"use client";

import { useState } from "react";

import clsx from "clsx";

import CarretIcon from "../../../../public/svg/CarretIcon";
import { SelectValueType } from "@/app/lib/types/components";

const Select = ({
  options,
  mxWt,
  placeHolder,
  extraStyle,
}: {
  options: SelectValueType[];
  mxWt?: string;
  placeHolder?: string;
  extraStyle?: string;
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
        mxWt || "max-w-[8rem]",
        extraStyle
      )}
      onClick={handleToggleList}
    >
      <div className="flex items-center justify-between gap-x-2 w-full cursor-pointer">
        <span className="capitalize pointer-events-none truncate text-ellipsis">
          {selectedItem?.label || holder}
        </span>
        <CarretIcon otherstyle={toggleList ? "transform rotate-180" : ""} />
      </div>
      <div
        className={clsx(
          "absolute top-12 w-full left-0 cursor-pointer transition-all duration-150 transform origin-top z-50",
          toggleList
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 cursor-none pointer-events-none"
        )}
      >
        {options?.map(({ label, value }) => (
          <div
            key={label}
            className={clsx(
              "flex items-center justify-between py-3 px-4 first:rounded-t-md  last:border-0 last:rounded-b-md hover:bg-[#c1e0bd] shadow cursor-pointer",
              label === selectedItem?.label
                ? "bg-twikkl-primary text-white"
                : "bg-twikkl-tertiary"
            )}
            onClick={() => handleOptionSelect({ label, value })}
          >
            <span className="capitalize">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
