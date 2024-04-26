"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MINI_PROJECTS_ARR } from "@/config/mini";
import { ChevronRight, SquareGanttChart } from "lucide-react";
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
import { useState } from "react";
import Link from "next/link";

export function MiniNavbar() {
  return (
    <div className="flex justify-between border-b  border-slate-500 shadow-sm shadow-slate-800 p-4">
      <BrandLogo />
      <Sheet>
        <SheetTrigger>
          <SquareGanttChart className="w-8 h-8 md:hidden" />
        </SheetTrigger>
        <SheetContent
          className="bg-black  overflow-y-scroll text-white"
          side={"left"}
        >
          <SheetHeader>
            <SheetTitle className="text-3xl font-bold text-white">
              Mini Projects
            </SheetTitle>
            <SheetDescription>
              {MINI_PROJECTS_ARR.map((name, idx) => {
                return (
                  <SheetClose key={idx} asChild>
                    <Link
                      className="text-blue-500 items-center flex text-xl"
                      href={`#${idx.toString()}`}
                    >
                      {name}
                      <ChevronRight />
                    </Link>
                  </SheetClose>
                );
              })}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MiniNavbar;
