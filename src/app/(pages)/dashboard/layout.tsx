"use client";

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
      <main className="flex-grow flex overflow-hidden">
        <SideBar openSidebar={isOpen} toggleSidebar={toggleMobileSidebar} />

        <div className="bg-[#D7EBD9] flex-grow flex flex-col overflow-hidden pb-4">
          <NavBar toggleSideBar={toggleMobileSidebar} />
          <main className="px-6 py-3 md:pt-5 flex-grow overflow-y-auto overflow-x-hidden flex flex-col">
            {children}
          </main>
        </div>
      </main>

      {/* <Modal>
        {type === "view-voters" ? (
          <VotersModal />
        ) : type === "logout" ? (
          <LogoutModal />
        ) : null}
      </Modal> */}
    </>
  );
};

export default Layout;
