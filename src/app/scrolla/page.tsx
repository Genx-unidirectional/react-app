import ImageCardList from "@/components/scrolla/ImageCardList";
import ScrollHead from "@/components/scrolla/ScrollHead";
import SideScroll from "@/components/scrolla/SideScroll";
import { useState } from "react";

function page() {
  return (
    <div className="min-h-screen lg:overflow-hidden  w-full">
      <ScrollHead />
      <main className="flex   mt-[72.8px] flex-col lg:flex-row">
        <div className="lg:block hidden relative min-h-screen  border-slate-500 bg-black flex-none lg:w-72  border-r ">
          <SideScroll />
        </div>
        <div className=" lg:flex-grow lg:min-h-screen bg-white   w-full  ">
          <ImageCardList />
        </div>
      </main>
    </div>
  );
}
export default page;
