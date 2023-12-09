import NavBar from "@/app/ui/organisms/NavBar";
import SideBar from "@/app/ui/organisms/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <SideBar />
      <div className="bg-[#D7EBD9] flex flex-col">
        <NavBar />
        <div className="flex-1 px-6 py-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
