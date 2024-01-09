import clsx from "clsx";

import Link from "next/link";
import NavLink from "../molecules/NavLinks";
import Image from "next/image";
import { CalendarTimeIcon } from "../../../../public/svg";

const SideBar = ({
  toggleSidebar,
  openSidebar,
}: {
  toggleSidebar: () => void;
  openSidebar: boolean;
}) => {
  return (
    <>
      <div
        className={clsx(
          "fixed h-[calc(100dvh)] inset-0 bg-[#15381670] z-20 md:hidden",
          openSidebar ? "block opacity-60" : "hidden opacity-0"
        )}
        onClick={toggleSidebar}
      />
      <aside
        className={clsx(
          "bg-twikkl-main h-[calc(100dvh)] overflow-y-auto flex flex-col pb-4 pt-2 transition-all duration-200 z-30 absolute md:static min-w-fit",
          openSidebar ? "left-0" : "-left-96"
        )}
      >
        <div className="flex flex-col gap-y-4 flex-grow">
          <Link href="/dashboard" className="flex items-center pr-12">
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

          <div className="flex flex-col justify-between h-full">
            <NavLink toggleSideBar={toggleSidebar} />

            <div
              className="grid grid-cols-[0.17fr_0.83fr] items-center pt-3 pl-4 rounded-lg mx-4"
              onClick={toggleSidebar}
            >
              <CalendarTimeIcon />

              <p className="flex flex-col text-sm">
                <span className="text-twikkl-primary">01:40am</span>
                <span className="text-twikkl-inactive">
                  Monday 30th Oct. 2023
                </span>
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
