"use client";

import clsx from "clsx";
import { TickIcon } from "../../../../public/svg";
import { useState } from "react";

interface CustomCheckboxProps {
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  type?: "primary" | "secondary";
  id?: string;
}

const CheckBox = ({
  type = "primary",
  isChecked = false,
  onChange,
  id,
}: CustomCheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <label htmlFor={"check-box" + id} className="cursor-pointer relative flex">
      <input
        id={"check-box" + id}
        type="checkbox"
        className={clsx(
          "appearance-none h-5 w-5 border-2 rounded",
          type === "primary" ? "border-twikkl-main" : "border-twikkl-tertiary",
          type === "primary" && checked ? "bg-twikkl-main border-none" : null
        )}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <span
        className={clsx(
          "h-[0.9rem] w-[0.9rem] absolute left-[0.2rem] mt-[0.2rem] transition",
          type === "primary" ? "bg-twikkl-main rounded-sm" : null,
          checked ? "opacity-100" : "opacity-0"
        )}
      >
        <TickIcon />
      </span>
    </label>
  );
};

export default CheckBox;
