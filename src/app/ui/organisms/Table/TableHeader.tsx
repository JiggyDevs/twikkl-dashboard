import { TableHeaderProps } from "@/app/lib/types/components";
import clsx from "clsx";
import CheckBox from "../../atoms/CheckBox";

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>) => {
  const headers = [...columns, { label: "Action", key: "action" }]?.map(
    (column, index) => {
      return (
        <th
          className={clsx(
            "p-4 text-twikkl-tertiary font-normal"
            // index === 0 ? "flex gap-x-4 items-center" : ""
          )}
          key={`heading-${index}-${column.label}`}
        >
          {/* {index === 0 ? <CheckBox type="secondary" /> : null} */}
          {column.label}
        </th>
      );
    }
  );

  return (
    <thead className="bg-twikkl-main text-twikkl-tertiary tracking-wider sticky top-0 z-10">
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
