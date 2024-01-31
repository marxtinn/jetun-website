"use client";

import {
  HomeIcon,
  CircleStackIcon,
  Squares2X2Icon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

import clsx from "clsx";
import { link } from "fs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Fasilitas",
    href: "/dashboard/facilities",
    icon: CircleStackIcon,
  },
  { name: "Program", href: "/dashboard/programs", icon: Squares2X2Icon },
  { name: "Berita", href: "/dashboard/news", icon: NewspaperIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-300 p-3 text-sm font-semibold hover:bg-sky-100 hover:text-hkbp md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-hkbp": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
