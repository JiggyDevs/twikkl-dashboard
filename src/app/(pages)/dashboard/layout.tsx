"use client";

import clsx from "clsx";
import React, { useCallback, useState } from "react";
import NavBar from "@/app/ui/organisms/NavBar";
import SideBar from "@/app/ui/organisms/SideBar";
import Modal from "@/app/ui/organisms/Modals";
import { modalEntity } from "@/app/lib/entities/modal.entity";
import VotersModal from "@/app/ui/organisms/Modals/VotersModal";
import LogoutModal from "@/app/ui/organisms/Modals/LogoutModal";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { type } = modalEntity.use();

  const toggleMobileSidebar = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <main className="h-screen flex overflow-hidden">
        <div
          className={clsx(
            "transition-all duration-200",
            isOpen
              ? "fixed w-2/3 md:static md:w-full z-20"
              : "-ml-96 md:-ml-0 hidden md:block md:w-1/6"
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
        />
        <div className="bg-[#D7EBD9] flex-grow flex flex-col overflow-hidden">
          <NavBar toggleSideBar={toggleMobileSidebar} />
          <main className="px-6 py-3 md:pt-5 flex-grow overflow-y-auto flex flex-col">
            {children}
          </main>
        </div>
      </main>

      <Modal>
        {type === "view-voters" ? (
          <VotersModal />
        ) : type === "logout" ? (
          <LogoutModal />
        ) : null}
      </Modal>
    </>
  );
};

export default Layout;
