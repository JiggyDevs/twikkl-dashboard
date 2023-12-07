import SideBar from "@/app/ui/organisms/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full grid grid-cols-[0.18fr_0.82fr]">
      <SideBar />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
};

export default Layout;
