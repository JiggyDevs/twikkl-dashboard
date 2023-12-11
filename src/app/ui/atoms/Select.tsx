"use client";

import { useState } from "react";

import clsx from "clsx";

import CarretIcon from "../../../../public/svg/CarretIcon";
import { SelectValueType } from "@/app/lib/types/components";

const Select = ({
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
        "flex items-center bg-transparent border border-twikkl-inactive focus:border-twikkl-primary py-2 px-4 rounded-lg text-label relative text-sm w-full",
        mxWt || "max-w-[8rem]"
      )}
      onClick={handleToggleList}
    >
      <div className="flex items-center justify-between w-full cursor-pointer">
        <span className="capitalize pointer-events-none">
          {selectedItem?.label || holder}
        </span>
        <CarretIcon otherstyle={toggleList ? "transform rotate-180" : ""} />
      </div>
      <div
        className={clsx(
          "absolute top-11 w-full left-0 cursor-pointer transition-all duration-150 transform origin-top z-50",
          toggleList
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 cursor-none pointer-events-none"
        )}
      >
        {options?.map(({ label, value }) => (
          <div
            key={label}
            className={clsx(
              "flex items-center justify-between py-2 px-4 first:rounded-t-md  last:border-0 last:rounded-b-md hover:bg-twikkl-primary hover:text-white shadow cursor-pointer",
              label === selectedItem?.label
                ? "bg-green-300"
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
