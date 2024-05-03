"use client";
import { useEffect, useRef } from "react";
import CustomImageAligner from "./CustomImageAligner";
import TypeEffect from "./mini/TypeEffect";
function Hero() {
  return (
    <div className="h-screen overflow-hidden relative w-full">
      <img
        src="/images/hero-page.jpg"
        alt="hero-page-image"
        className="lg:w-full w-full object-cover top-0 left-0 absolute z-10 h-full"
      />
      <section
        id="hero"
        className="flex z-20 mx-auto relative max-w-5xl flex-col h-screen items-center justify-center gap-10  pt-20  px-3 sm:px-4 md:px-6 sm:flex-row bg-transparent"
      >
        <article className="w-full sm:w-1/2">
          <TypeEffect
            className="text-3xl  drop-shadow-glow text-nowrap text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text text-center sm:text-left mb-8 sm:text-4xl md:text-4xl lg:text-5xl font-bold"
            words={[
              "Ganesh Devloper",
              "With tailWind",
              "With TypeScript",
              "With React",
              "With Nextjs",
              "Is Ready",
            ]}
          />

          <p className="text-wrap md:w-3/4 text-center sm:text-left text-lg sm:text-xl text-white md:text-2xl lg:text-3xl mb-2">
            Prioritize user experience above all else.{" "}
          </p>
          <p className="text-slate-400 md:w-3/4 text-center sm:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2">
            Web app which meticulously crafted to guide users seamlessly through
            content.
          </p>
          <p className="text-slate-400 md:w-1/2 text-center sm:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Attention to detail extends beyond the surface level!
          </p>
        </article>
        <div className="w-1/2 mx-auto flex justify-center flex-col items-center h-1/2">
          <img
            src="/images/sensei.png"
            className=" rounded-sm h-full w-full- shadow-xl shadow-purple-300 
      "
            alt="saitama"
          />
          <p className="text-lg text-white text-nowrap  font-mono text-center">
            ~Diciple of saitama sensei
          </p>
        </div>
      </section>
    </div>
  );
}
export default Hero;
