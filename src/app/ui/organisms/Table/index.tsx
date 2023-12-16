import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { TableProps } from "@/app/lib/types/components";

const Table = <T, K extends keyof T>({ data, columns }: TableProps<T, K>) => {
  const header = [
    { name: "Usename", key: "username" },
    { name: "Gender", key: "gender" },
    { name: "Points", key: "points" },
    { name: "Followers", key: "followers" },
    { name: "Following", key: "following" },
    { name: "Posts", key: "posts" },
    { name: "Date Joined", key: "joinedDate" },
    { name: "Action", key: "action" },
  ];

  return (
    <table>
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default Table;
