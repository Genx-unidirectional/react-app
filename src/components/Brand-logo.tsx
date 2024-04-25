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
        <AtomIcon className="w-10 h-10" />
        <p className="text-3xl font-bold ">Gex</p>
      </Link>
    </div>
  );
}
export default BrandLogo;
