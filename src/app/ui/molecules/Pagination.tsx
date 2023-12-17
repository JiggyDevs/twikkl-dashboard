"use client";

import clsx from "clsx";
import Link from "next/link";

import { usePathname, useSearchParams } from "next/navigation";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "../../../../public/svg";

const Pagination = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const allPages = [1, 2, 3, 4, 5, 6, "..."];
  return (
    <div className="flex items-center gap-x-2 md:gap-x-6 justify-center">
      <PaginationArrow direction="left" href={"#"} />
      <div className="flex items-center gap-x-2 md:gap-x-6">
        {allPages.map((page, index) => {
          let position: "first" | "last" | "single" | "middle" | undefined;

          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={"pagination-num-" + page}
              href="#"
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>
      <PaginationArrow direction="right" href={"#"} />
      <span className="flex items-center gap-x-1 md:gap-x-2">
        20 / pages <ArrowDownIcon />
      </span>
    </div>
  );
};

export default Pagination;

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  const className = clsx(
    "flex p-2 md:h-10 md:w-10 items-center justify-center rounded-lg",
    {
      // "rounded-l-md": position === "first" || position === "single",
      // "rounded-r-md": position === "last" || position === "single",
      "z-10  text-white bg-twikkl-primary": isActive,
      "hover:bg-twikkl-inactive": !isActive && position !== "middle",
      "text-twikkl-main text-xl h-6 w-6": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = clsx(
    "grid place-con h-6 w-6 place-content-center"
    //   {
    //     "pointer-events-none text-gray-300": isDisabled,
    //     "hover:bg-gray-100": !isDisabled,
    //     "mr-2 md:mr-4": direction === "left",
    //     "ml-2 md:ml-4": direction === "right",
    //   }
  );

  const Icon = direction === "left" ? <ArrowLeftIcon /> : <ArrowRightIcon />;

  return isDisabled ? (
    <span className={className}>{Icon}</span>
  ) : (
    <Link className={className} href={href}>
      {Icon}
    </Link>
  );
}
