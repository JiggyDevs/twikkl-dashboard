import Image from "next/image";
import {
  HamburgerIcon,
  NotificationIcon,
  ToggleLightModeIcon,
} from "../../../../public/svg";
import SearchBox from "../atoms/SearchBox";

const NavBar = ({ toggleSideBar }: { toggleSideBar: () => void }) => {
  return (
    <nav className="py-8 px-6 flex items-center justify-between">
      <span className="w-10 h-10 md:hidden">
        <HamburgerIcon onClick={toggleSideBar} />
      </span>
      <p className="flex items-center gap-x-1 text-xl">
        Good Morning
        <span className="font-medium text-twikkl-primary">Joy Mark!</span>
      </p>
      <div className="flex items-center gap-x-7">
        <div className="hidden md:flex items-center gap-x-10">
          <SearchBox />
          <div className="w-[1.875rem] h-[1.875rem]">
            <NotificationIcon />
          </div>
        </div>

        <div className="flex gap-x-3 items-center">
          <Image
            src="/img/profile.webp"
            alt="profile-image"
            width={40}
            height={40}
            className="rounded-full h-10 w-10"
          />
          <div className="hidden md:flex flex-col">
            <span className="font-medium text-twikkl-main">
              @ubongabasi.jgy
            </span>
            <span className="text-xs text-twikkl-primary">Admin</span>
          </div>
        </div>

        <span className="hidden md:block h-[1.875rem] w-[1.875rem]">
          <ToggleLightModeIcon />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
