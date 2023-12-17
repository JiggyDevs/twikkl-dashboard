import { TableProps } from "@/app/lib/types/components";
import TableHeader from "./TableHeader";
import TableRows from "./TableRow";

const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>) => {
  return (
    <div className="overflow-x-auto overflow-y-scroll max-h-[41.75rem] text-left rounded-lg border relative">
      <table className="w-full table-auto">
        <TableHeader columns={columns} />
        <TableRows data={data} columns={columns} />
      </table>
    </div>
  );
};

export default Table;
