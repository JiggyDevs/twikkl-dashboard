import NavBar from "@/app/ui/organisms/NavBar";
import SideBar from "@/app/ui/organisms/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen grid grid-cols-[0.18fr_0.82fr] overflow-hidden">
      <SideBar />
      <div className="bg-[#D7EBD9] h-screen flex flex-col overflow-hidden">
        <NavBar />
        <div className="flex-1 px-6 py-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
