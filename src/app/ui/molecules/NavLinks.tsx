"use client";

import { navLinks } from "@/app/lib/data";
import clsx from "clsx";

import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLink = ({ toggleSideBar }: { toggleSideBar: () => void }) => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-stretch px-6 gap-y-5">
      {navLinks.map((link) => {
        const LinkIcon = link.icon;
        const isActiveLink = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={toggleSideBar}
            className={clsx(
              "grid grid-cols-[0.18fr_0.82fr] items-center py-3 pl-4 rounded-lg max-w-full",
              isActiveLink
                ? "text-twikkl-tertiary bg-twikkl-primary font-medium"
                : "text-twikkl-inactive"
            )}
          >
            <LinkIcon color={isActiveLink ? "#F1FCF2" : "#C0CCC1"} />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLink;
