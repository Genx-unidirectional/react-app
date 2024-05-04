"use client";

import { UserRound, Home, File } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashcraft/dashboard", icon: Home },
  {
    name: "Invoices",
    href: "/dashcraft/dashboard/invoices",
    icon: File,
  },
  {
    name: "Customers",
    href: "/dashcraft/dashboard/customers",
    icon: UserRound,
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-slate-500 hover:text-slate-50 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-slate-500 text-slate-50": link.href === pathName,
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
