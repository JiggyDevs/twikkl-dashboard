"use client";

import { modalEntity } from "@/app/lib/entities/modal.entity";
import clsx from "clsx";
import VotersModal from "./VotersModal";

const Modal = () => {
  const { isEnabled, type } = modalEntity.use();
  return (
    <div
      className={clsx(
        "fixed inset-0 bg-[#04110580] justify-center items-center px-6 md:px-0",
        isEnabled ? "flex" : "hidden"
      )}
    >
      {type === "view-voters" ? <VotersModal /> : null}
    </div>
  );
};

export default Modal;
