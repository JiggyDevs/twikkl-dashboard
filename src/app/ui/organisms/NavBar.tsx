"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HamburgerIcon,
  NotificationIcon,
  ToggleLightModeIcon,
} from "../../../../public/svg";
import SearchBox from "../atoms/SearchBox";
import ProfileCard from "../molecules/ProfileCard";

const NavBar = ({ toggleSideBar }: { toggleSideBar: () => void }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfileCard = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <nav className="py-8 px-6 flex items-center justify-between w-full">
      <span className="w-10 h-10 md:hidden">
        <HamburgerIcon onClick={toggleSideBar} />
      </span>
      <p className="flex items-center gap-x-1 text-xl">
        Good Morning
        <span className="font-medium text-twikkl-primary">Joy Mark!</span>
      </p>

      <div className="flex items-center gap-x-6 md:flex-[0.7]">
        <div className="hidden md:flex md:items-center gap-x-10 md:flex-grow">
          <SearchBox />
          <span className="w-[1.875rem] h-[1.875rem]">
            <NotificationIcon />
          </span>
        </div>

        <div className="flex gap-x-3 items-center cursor-pointer relative md:static">
          <Image
            src="/img/profile.webp"
            alt="profile-image"
            width={40}
            height={40}
            className="rounded-full h-10 w-10"
            onClick={toggleProfileCard}
          />
          <div className="hidden md:flex flex-col">
            <span className="font-medium text-twikkl-main">
              @ubongabasi.jgy
            </span>
            <span className="text-xs text-twikkl-primary">Admin</span>
          </div>
          <ProfileCard
            isProfileOpen={isProfileOpen}
            toggleProfile={toggleProfileCard}
          />
        </div>

        <span className="hidden md:block h-[1.875rem] w-[1.875rem]">
          <ToggleLightModeIcon />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
