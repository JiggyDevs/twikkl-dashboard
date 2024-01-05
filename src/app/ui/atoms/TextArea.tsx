"use client";

import clsx from "clsx";

import { useState } from "react";

import { TextAreaAttributes } from "@/app/lib/types/components";

const TextArea = ({
  name,
  label,
  type,
  suffix,
  extraInfo,
  ...ref
}: TextAreaAttributes) => {
  const [isFocused, setIsFocused] = useState(false);

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
          "flex flex-1 bg-white pl-3 pr-4 py-3 rounded-2xl items-center gap-x-1 transition-all duration-200 border",
          isFocused ? "border-twikkl-primary" : "border-twikkl-inactive"
        )}
      >
        <textarea
          className="flex-1 bg-transparent text-twikkl-main font-light placeholder:font-light placeholder:text-[0.9375rem] outline-none"
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={4}
          id={name}
          {...ref}
        />
      </div>
    </div>
  );
};

export default TextArea;
