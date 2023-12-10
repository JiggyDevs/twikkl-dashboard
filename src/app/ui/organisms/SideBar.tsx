import Link from "next/link";
import NavLink from "../molecules/NavLinks";
import Image from "next/image";
import { CalendarTimeIcon, LogoutIcon } from "../../../../public/svg";

const SideBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <aside className="bg-twikkl-main h-[95vh] md:h-screen flex flex-col pb-4 pt-2 transition-all duration-200">
      <div className="flex flex-col gap-y-4">
        <Link href="/dashboard" className="flex items-center">
          <Image
            src="/img/twikkl_logo.webp"
            alt="Twikkl logo"
            width={100}
            height={100}
            priority
          />
          <div className="flex flex-col text-white -ml-2">
            <h2 className="font-extrabold text-2xl">Twikkl</h2>
            <h3 className="font-light">Admin Dashboard</h3>
          </div>
        </Link>

        <NavLink toggleSideBar={toggleSidebar} />
      </div>
      <div className="flex flex-col items-stretch justify-between flex-1  gap-y-5 py-4 px-6">
        <button
          className="grid grid-cols-[0.2fr_0.81fr] items-center py-3 pl-3 rounded-lg"
          onClick={toggleSidebar}
        >
          <LogoutIcon />
          <span className="text-left text-twikkl-inactive">Log out</span>
        </button>

        <div
          className="grid grid-cols-[0.17fr_0.83fr] items-center pt-3 pl-4 rounded-lg"
          onClick={toggleSidebar}
        >
          <CalendarTimeIcon />

          <div className="flex flex-col text-sm">
            <span className="text-twikkl-primary">01:40am</span>
            <span className="text-twikkl-inactive">Monday 30th Oct. 2023</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
