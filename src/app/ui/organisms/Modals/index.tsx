"use client";

import { modalEntity, resetModalState } from "@/app/lib/entities/modal.entity";

import { ReactNode, useEffect } from "react";
import ReactPortal from "../../molecules/ReactPortal";

const Modal = ({ children }: { children: ReactNode }) => {
  const { isEnabled } = modalEntity.use();

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? resetModalState() : null;

    document.body.addEventListener("keydown", closeOnEscapeKey);

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [isEnabled]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <>
        <div className="fixed inset-0 overflow-hidden z-20 bg-[#04110580]" />
        <div className="fixed w-screen inset-y-4 md:inset-y-36 flex justify-center items-center px-6 md:px-0 z-30 min-w-fit">
          {children}
        </div>
      </>
    </ReactPortal>
  );
};

export default Modal;
