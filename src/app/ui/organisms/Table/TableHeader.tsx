import { TableHeaderProps } from "@/app/lib/types/components";

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>) => {
  const headers = columns.map((column, index) => {
    // const style = {
    //   width: column.width ?? 100, // 100 is our default value if width is not defined
    //   borderBottom: "2px solid black",
    // };

    return <th key={`headCell-${index}`}>{column.name}</th>;
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
