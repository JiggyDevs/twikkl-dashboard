"use client";

import Modal from "@/app/ui/organisms/Modals";
import NavBar from "@/app/ui/organisms/NavBar";
import SideBar from "@/app/ui/organisms/SideBar";
import clsx from "clsx";
import React, { useCallback, useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <main
      className={clsx(
        "h-screen grid w-full transition-all duration-300 md:grid-cols-[0.18fr_0.82fr]"
      )}
    >
      <div
        className={clsx(
          "transition-all duration-500 md:static",
          isOpen
            ? "fixed w-2/3 md:static md:h-full md:w-full z-20"
            : "-ml-96 md:-ml-0 hidden md:block"
        )}
      >
        <SideBar toggleSidebar={toggleMobileSidebar} />
      </div>
      <div
        className={clsx(
          "absolute w-full md:hidden bg-[#15381670] h-full z-10 transition-all duration-300",
          isOpen ? "block opacity-60" : "hidden opacity-0"
        )}
        onClick={toggleMobileSidebar}
      ></div>
      <div className="bg-[#D7EBD9] h-screen flex flex-col overflow-hidden">
        <NavBar toggleSideBar={toggleMobileSidebar} />
        <div className="flex-[0.9] md:flex-1 px-6 pt-2 md:pt-5 pb-3 overflow-y-auto w-full">
          {children}
        </div>
      </div>
      <Modal />
    </main>
  );
};

export default Layout;
