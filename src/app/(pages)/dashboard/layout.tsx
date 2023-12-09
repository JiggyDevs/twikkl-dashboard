import NavBar from "@/app/ui/organisms/NavBar";
import SideBar from "@/app/ui/organisms/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen grid grid-cols-[0.18fr_0.82fr]">
      <SideBar />
      <div className="bg-[#D7EBD9] h-screen flex flex-col overflow-hidden">
        <NavBar />
        <div className="flex-[0.95] md:flex-1 px-6 pt-2 md:pt-5 pb-3 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
