import { SearchIcon } from "../../../../public/svg";

const SearchBox = () => {
  return (
    <div className="bg-twikkl-tertiary flex items-center outline-none border-none focus:outline-none px-4 py-2 rounded-3xl gap-x-2">
      <input
        type="text"
        className="bg-transparent text-[0.9375rem] font-light placeholder:text-twikkl-inactive"
        placeholder="Search"
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBox;
