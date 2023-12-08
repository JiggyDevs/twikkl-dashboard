"use client";

import { navLinks } from "@/app/lib/data/nav-links";
import clsx from "clsx";

import Link from "next/link";

import { usePathname } from "next/navigation";

const NavLink = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center md:items-stretch md:px-6 gap-y-5">
      {navLinks.map((link) => {
        const LinkIcon = link.icon;
        const isActiveLink = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "grid md:grid-cols-[0.18fr_0.82fr] items-center  p-4 md:py-3 md:pl-4 rounded-lg max-w-fit md:max-w-full",
              isActiveLink
                ? "text-twikkl-tertiary bg-twikkl-primary font-medium"
                : "text-twikkl-inactive"
            )}
          >
            <LinkIcon color={isActiveLink ? "#F1FCF2" : "#C0CCC1"} />
            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLink;
