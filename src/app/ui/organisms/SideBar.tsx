import Link from "next/link";
import NavLink from "../molecules/NavLinks";
import Image from "next/image";

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
      <div className=""></div>
    </div>
  );
};

export default SideBar;
