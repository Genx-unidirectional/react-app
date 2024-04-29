"use client";
import ImageCardList from "@/components/scrolla/ImageCardList";
import ScrollHead from "@/components/scrolla/ScrollHead";
import SideScroll from "@/components/scrolla/SideScroll";
import { useState } from "react";

function page() {
  const [filterArr] = useState();
  return (
    <div className="min-h-screen lg:overflow-hidden  w-full">
      <ScrollHead />
      <main className="flex h-full  w-full mt-[72.8px] flex-col lg:flex-row">
        <div className="lg:block hidden overflow-hidden relative min-h-screen  border-slate-500 bg-black flex-none w-64 lg:w-64  border-r ">
          <SideScroll />
        </div>
        <div className=" lg:flex-grow h-full bg-white  w-full  ">
          <ImageCardList />
        </div>
      </main>
    </div>
  );
}
export default page;
