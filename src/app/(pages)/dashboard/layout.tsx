import NavBar from "@/app/ui/organisms/NavBar";
import SideBar from "@/app/ui/organisms/SideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-twikkl-main">
      <SideBar />
      {/* <div className="bg-[#D7EBD9] flex-grow h-auto flex-col relative">
        <NavBar />
        <div className="flex-1 px-6 py-4 overflow-y-auto">{children}</div>
      </div> */}
    </div>
  );
};

export default Layout;
