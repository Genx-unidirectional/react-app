"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { Spotlight } from "./ui/Spotlight";
import { Triangle, Atom, BookCheck } from "lucide-react";

function Skills() {
  return (
    <div className="flex w-full  bg-black overflow-hidden flex-col justify-center items-center relative py-10 md:py-0 mx-auto">
      <Spotlight
        className="-top-40  absolute left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <section
        id="skill"
        className="flex mx-auto relative  text-white max-w-4xl flex-col lg:h-screen items-center  gap-10  pb-4 pt-20  px-3 sm:px-4 md:px-6  "
      >
        <h2 className="text-4xl text-center md:text-5xl bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text font-bold">
          Skills and Capabilities
        </h2>
        <ul className="w-full h-1/2 grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <li className="">
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-white border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-xl text-black mb-4 relative z-50">
                  Using Html, CSS, Typescript
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  I use typescript for reliability and strong type checking
                  which is used in big scale application where types are
                  important and error are catch while writing the code.
                </p>

                <div className="w-full flex gap-4">
                  <div className=" h-8 p-1 bg-orange-700 text-white font-bold rounded-lg flex justify-center items-center">
                    Html
                  </div>
                  <div className="w-8 h-8 bg-blue-800 p-1 text-white font-bold rounded-lg flex justify-center items-center">
                    CSS
                  </div>
                  <div className="w-8 h-8 bg-blue-500 text-white font-bold rounded-lg flex justify-center items-center">
                    Ts
                  </div>
                </div>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </li>
          <li className="">
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-white border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-xl text-black mb-4 relative z-50">
                  Using React, Nextjs
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  The react is popular framework build top on javascript which
                  enable us to make performant app and with next js we take our
                  web app to next level.
                </p>

                <div className="w-full flex gap-4">
                  <div className=" h-8 p-1 bg-blue-700 text-white font-bold rounded-lg flex justify-center items-center">
                    React
                  </div>
                  <div className=" h-8 bg-black p-1 text-white font-bold rounded-lg flex justify-center items-center">
                    NEXT.js
                  </div>
                </div>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </li>
          <li className="">
            <div className=" w-full relative max-w-xs">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
              <div className="relative shadow-xl bg-white border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                <h1 className="font-bold text-xl text-black mb-4 relative z-50">
                  Redux, react-hook-form, reactQuery, zod etc packages for
                  react-nextjs app.
                </h1>

                <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  Various library i can use to leverage the app performance
                  working with third party api and making application reliable.
                </p>

                <div className="w-full flex gap-4">
                  <div className=" h-8 p-1 bg-blue-600 text-white font-bold rounded-lg flex justify-center items-center">
                    <Triangle />
                  </div>
                  <div className="w-8 h-8 bg-purple-700 p-1 text-white font-bold rounded-lg flex justify-center items-center">
                    <Atom />
                  </div>
                  <div className="w-8 h-8 bg-orange-500 text-white font-bold rounded-lg flex justify-center items-center">
                    <BookCheck />
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-l from-blue-600 to-orange-600 text-white font-bold rounded-lg flex justify-center items-center">
                    T
                  </div>
                </div>

                {/* Meaty part - Meteor effect */}
                <Meteors number={20} />
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Skills;
