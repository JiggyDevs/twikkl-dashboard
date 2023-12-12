import clsx from "clsx";
import { SearchIcon } from "../../../../public/svg";
import { InputAttributes } from "@/app/lib/types/components";

const SearchBox = ({
  mxWt = "max-w-[27rem]",
  border = "border-none",
  ...ref
}: InputAttributes) => {
  return (
    <div
      className={clsx(
        "bg-white flex items-center outline-none focus:outline-none px-4 py-3 rounded-lg gap-x-2 w-full",
        mxWt,
        border
      )}
    >
      <SearchIcon />
      <input
        type="text"
        className="bg-transparent text-sm font-light placeholder:text-twikkl-inactive flex-1"
        placeholder="Search For anything"
        {...ref}
      />
    </div>
  );
};

export default SearchBox;
