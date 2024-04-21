import SideNav from "@/components/dashboard/SideNav";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:flex-row flex flex-col min-h-screen md:overflow-hidden">
      <div className="w-full md:w-64 ">
        <SideNav />
      </div>
      <div className=" md:flex-grow">{children}</div>
    </div>
  );
}
export default Layout;
