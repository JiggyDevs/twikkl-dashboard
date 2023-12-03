"use client";

import { InputAttributes } from "@/app/lib/types/components";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import ViewPasswordIcon from "../../../../public/svg/ViewPasswordIcon";
import HidePasswordIcon from "../../../../public/svg/HidePasswordIcon";

const Input = ({
  name,
  label,
  type,
  suffix,
  extraInfo,
  ...ref
}: InputAttributes) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleHidePassword = () => setShowPassword((prev) => !prev);

  const handleFocus = () => setIsFocused((prev) => !prev);

  const handleBlur = () => setIsFocused((prev) => !prev);

  return (
    <div className="flex flex-col gap-y-1">
      {label ? (
        <label htmlFor={name} className="text-base text-twikkl-main">
          {label}
        </label>
      ) : null}

      <div
        className={clsx(
          "flex flex-1 bg-white pl-3 pr-4 py-3 rounded-sm items-center gap-x-1 transition-all duration-200 border",
          isFocused ? "border-twikkl-primary" : "border-twikkl-inactive"
        )}
      >
        <input
          className="flex-1 bg-transparent text-twikkl-main font-light placeholder:font-light placeholder:text-[0.9375rem]"
          type={
            type === "password" && showPassword ? "password" : "text" || type
          }
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id={name}
          {...ref}
        />
        {suffix ? (
          suffix
        ) : type === "password" ? (
          <div>
            {showPassword ? (
              <span onClick={handleShowPassword}>
                <ViewPasswordIcon />
              </span>
            ) : (
              <span onClick={handleHidePassword}>
                <HidePasswordIcon />
              </span>
            )}
          </div>
        ) : null}
      </div>
      {extraInfo?.to ? (
        <Link
          href={extraInfo.to || "#"}
          className="self-end text-twikkl-primary text-sm mt-2 underline"
        >
          {extraInfo?.label}
        </Link>
      ) : null}
    </div>
  );
};

export default Input;
