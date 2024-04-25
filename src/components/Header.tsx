"use client";
import { Github } from "lucide-react";
import { useEffect } from "react";
import BrandLogo from "./Brand-logo";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
function Header() {
  useEffect(() => {
    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar")!.style.top = "0";
      } else {
        document.getElementById("navbar")!.style.top = "-72.8px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);
  return (
    <header
      id="navbar"
      className="w-full z-[100] py-4  px-1 sm:px-4 l flex transition-all delay-500 bg-simple-gradient justify-between top-0 items-center fixed bg-transparent border-b border-[#28061F]  text-white"
    >
      <BrandLogo />
      <nav className="text-sm  md:flex lg:gap-8  gap-4 hidden  text-white ">
        <Link
          className="hover:text-slate-300 transition-all delay-150"
          href={"#hero"}
        >
          Home
        </Link>
        <Link
          className="hover:text-slate-300 transition-all delay-150"
          href={"#skill"}
        >
          Skills
        </Link>
        <Link
          className="hover:text-slate-300 transition-all delay-150"
          href={"#mentor"}
        >
          Mentor
        </Link>
        <Link
          className="hover:text-slate-300 transition-all delay-150"
          href={"#contact"}
        >
          Contact Us
        </Link>
      </nav>
      <NavigationMenuDemo />
    </header>
  );
}
export default Header;

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Mini projects",
    href: "/mini",
    description: "small mini components",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="flex ">
        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger className="bg-transparent">
            Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-1 w-48">
            <ul className="grid gap-3  md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="#hero" title="hero">
                Hero page
              </ListItem>
              <ListItem href="#skill" title="skill">
                About my skills
              </ListItem>
              <ListItem href="#mentor" title="mentor">
                About mentor
              </ListItem>
              <ListItem href="#contact" title="contact">
                Contact me
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Projects
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-1 w-48">
            <ul className="grid gap-3  md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/products" title="products">
                Product cart project with context api
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Components
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-1 w-48">
            <ul className="grid w-[400px] gap-3  md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="https://github.com/Genx-unidirectional/react-app"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
            >
              <Github />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
