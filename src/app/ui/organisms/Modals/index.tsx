"use client";

import { modalEntity } from "@/app/lib/entities/modal.entity";
import clsx from "clsx";
import VotersModal from "./VotersModal";
import { ReactNode, useEffect } from "react";
import ReactPortal from "../../molecules/ReactPortal";

const Modal = ({
  children,
  isOpen,
  handleClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}) => {
  // const { isEnabled, type } = modalEntity.use();

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;

    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed inset-0 z-30 bg-[#04110580]" />

        <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center px-6 md:px-0 z-30">
          {children}
        </div>
      </>
    </ReactPortal>
  );
};

export default Modal;
