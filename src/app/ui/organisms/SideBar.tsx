import Link from "next/link";
import NavLink from "../molecules/NavLinks";
import Image from "next/image";
import { CalendarTimeIcon, LogoutIcon } from "../../../../public/svg";

const SideBar = () => {
  return (
    <div className="bg-twikkl-main h-[95vh] md:h-screen flex flex-col pb-4 pt-2">
      <div className="flex flex-col gap-y-4">
        <Link href="/dashboard" className="flex items-center">
          <Image
            src="/img/twikkl_logo.webp"
            alt="Twikkl logo"
            width={100}
            height={100}
            priority
          />
          <div className="hidden md:flex flex-col text-white -ml-2">
            <h2 className="font-extrabold text-2xl">Twikkl</h2>
            <h3 className="font-light">Admin Dashboard</h3>
          </div>
        </Link>

        <NavLink />
      </div>
      <div className="flex flex-col items-center md:items-stretch justify-between flex-1 md:px-6 gap-y-5 py-4">
        <button className="md:grid md:grid-cols-[0.2fr_0.81fr] items-center p-3 pr-5 max-w-fit md:max-w-none md:py-3 md:pl-3 rounded-lg">
          <LogoutIcon />
          <span className="hidden md:block text-left text-twikkl-inactive">
            Log out
          </span>
        </button>

        <div className="md:grid md:grid-cols-[0.17fr_0.83fr] items-center p-3 md:pt-3 md:pl-4 rounded-lg max-w-fit md:max-w-none">
          <CalendarTimeIcon />

          <div className="hidden md:flex flex-col text-sm">
            <span className="text-twikkl-primary">01:40am</span>
            <span className="text-twikkl-inactive">Monday 30th Oct. 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
