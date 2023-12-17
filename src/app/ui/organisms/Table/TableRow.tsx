import { TableProps } from "@/app/lib/types/components";
import CheckBox from "../../atoms/CheckBox";
import clsx from "clsx";
import { TableActionIcon } from "../../../../../public/svg";

const TableRows = <T, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>): JSX.Element => {
  const columnData = [...columns, { action: "" }] as typeof columns;

  const rows = data?.map((row, index) => {
    return (
      <tr key={`row-${index}`} className="border-t border-twikkl-inactive">
        {columnData?.map((column, rowIndex) => {
          return (
            <td
              key={`cell-${rowIndex}`}
              className={clsx(
                "p-4 font-normal text-twikkl-main",
                rowIndex === 0 ? "flex gap-x-4 items-center" : null
              )}
            >
              {rowIndex === 0 ? <CheckBox id={index + "row-data"} /> : null}
              {row[column.key] as string}

              {columnData.length - 1 === rowIndex ? <TableActionIcon /> : null}
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody className="border-separate border-spacing-y-8">{rows}</tbody>;
};

export default TableRows;
