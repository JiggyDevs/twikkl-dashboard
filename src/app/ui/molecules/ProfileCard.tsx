"use client";

import {
  resetModalState,
  setModalState,
} from "@/app/lib/entities/modal.entity";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const ProfileCard = ({
  isProfileOpen,
  toggleProfile,
}: {
  isProfileOpen: boolean;
  toggleProfile: () => void;
}) => {
  const router = useRouter();

  const handleLogout = () => {
    setModalState({ type: "logout", data: null });
    toggleProfile();
  };

  const navigateToProfile = () => {
    resetModalState();
    router.push("/dashboard/setting");
    toggleProfile();
  };

  return (
    <div
      className={clsx(
        "bg-twikkl-tertiary rounded-lg flex flex-col shadow-lg absolute top-12 md:top-20 right-0 md:right-14 w-[13rem] transition-all duration-200",
        isProfileOpen
          ? "opacity-1 pointer-events-auto"
          : "pointer-events-none opacity-0"
      )}
    >
      <button
        className="py-3 pl-4 text-twikkl-main border-b text-left hover:bg-twikkl-active rounded-t-lg"
        onClick={navigateToProfile}
      >
        Go to Profile
      </button>
      <button
        className="py-3 pl-4 text-twikkl-main text-left hover:bg-twikkl-active rounded-b-lg"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileCard;
