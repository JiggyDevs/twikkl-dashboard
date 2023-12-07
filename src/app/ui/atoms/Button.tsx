import React from "react";
import clsx from "clsx";
import { ButtonAttributes } from "@/app/lib/types/components";

const Button = ({
  label,
  disable,
  maxWidth = "max-w-full",
  ...ref
}: ButtonAttributes) => {
  return (
    <button
      className={clsx(
        "py-4 md:py-3 flex flex-1 justify-center items-center font-medium text-twikkl-tertiary rounded-md transition-all duration-300 w-full",
        maxWidth,
        disable ? "bg-twikkl-inactive" : "bg-twikkl-primary"
      )}
      disabled={disable}
      {...ref}
    >
      {label || ""}
    </button>
  );
};

export default Button;
