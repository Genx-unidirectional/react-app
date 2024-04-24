"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SquareGanttChart } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import BrandLogo from "../Brand-logo";
import { cn } from "@/lib/utils";

export function MiniNavbar() {
  console.log(window.document.body.clientWidth);
  return (
    <div className="flex justify-between border-b border-slate-500 shadow-sm shadow-slate-800 p-2">
      <BrandLogo />
      <Sheet>
        <SheetTrigger>
          <SquareGanttChart
            className={cn("w-8 h-8", {
              hidden: window.document.body.clientWidth === 780,
            })}
          />
        </SheetTrigger>
        <SheetContent className="bg-black text-white" side={"left"}>
          <SheetHeader>
            <SheetTitle className="text-3xl font-bold text-white">
              Mini Projects
            </SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MiniNavbar;
