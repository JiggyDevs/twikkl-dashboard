import NavBar from "@/app/ui/organisms/NavBar";
import SideBar from "@/app/ui/organisms/SideBar";
import clsx from "clsx";
import React from "react";
import HamburgerIcon from "../../../../public/svg/HamburgerIcon";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={clsx("h-screen grid  w-full")}>
      <div className="hidden">
        <SideBar />
      </div>
      <main className="bg-[#D7EBD9] h-screen flex flex-col overflow-hidden">
        <NavBar />
        <div className="flex-[0.9] md:flex-1 px-6 pt-2 md:pt-5 pb-3 overflow-y-auto w-full">
          {children}
        </div>
      </main>
    </main>
  );
};

export default Layout;
