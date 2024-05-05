"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { lusitana } from "./font";
import { AtomIcon } from "lucide-react";
import Link from "next/link";
type Props = {
  className?: string;
};
function BrandLogo({ className }: Props) {
  const pathName = usePathname();
  return (
    <div className={cn(lusitana.className, "flex items-center ", className)}>
      <Link href={"/"} className="flex items-center">
        <AtomIcon className="sm:w-10 sm:h-10 h-7 w-7" />
        <p className="sm:text-3xl text-xl font-bold ">Gex</p>
      </Link>
    </div>
  );
}
export default BrandLogo;
