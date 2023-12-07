import Link from "next/link";
import NavLink from "../molecules/NavLinks";
import Image from "next/image";
import { CalendarTimeIcon, LogoutIcon } from "../../../../public/svg";

const SideBar = () => {
  return (
    <div className="bg-twikkl-main flex flex-col flex-1 py-4">
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

        <NavLink />
      </div>
      <div className="flex flex-col justify-between flex-1 px-6 gap-y-5 py-3">
        <button className="grid grid-cols-[0.2fr_0.81fr] items-center py-3 pl-3 rounded-lg">
          <LogoutIcon />
          <span className="text-left text-twikkl-inactive">Log out</span>
        </button>

        <div className="grid grid-cols-[0.17fr_0.83fr] items-center pt-3 pl-4 rounded-lg">
          <CalendarTimeIcon />

          <div className="flex flex-col text-sm">
            <span className="text-twikkl-primary">01:40am</span>
            <span className="text-twikkl-inactive">Monday 30th Oct. 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
