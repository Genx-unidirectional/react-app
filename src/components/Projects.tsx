"use client";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { inter } from "./font";
import { cn } from "@/lib/utils";
import Link from "next/link";
function Projects() {
  return (
    <div
      id="projects"
      className="relative h-[1118.4px] mxl:h-screen bg-slate-950 overflow-hidden   w-full"
    >
      <LampContainer className="absolute md:-top-[195px] -top-[400px] min-h-screen  overflow-visible left-0 h-full w-full rounded-none sm:w-full">
        <motion.section
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-2 bg-gradient-to-br absolute from-slate-300 flex flex-col overflow-visible md:flex-row gap-4  to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <article className=" w-[300px]  border-2 drop-shadow-glow hover:scale-105 transition-all duration-300 border-cyan-500  bg-black overflow-hidden flex flex-col  text-black   rounded-lg">
            <img
              src="/images/scroll.jpg"
              alt="scroll image"
              className="w-full object-cover h-full"
            />
            <div
              className={cn(
                "text-white flex p-2 items-start flex-col ",
                inter.className
              )}
            >
              <div className="w-full flex justify-start gap-2 items-start">
                <h3 className="text-2xl mb-2 bg-gradient-to-r from-[#D4145A] underline animate-bounce to-[#FBB03B] bg-clip-text text-transparent font-bold">
                  <Link href={"/scrolla"}>Scrolla Project</Link>
                </h3>
                <p className=" text-lg tracking-wide flex justify-center items-center text-white">
                  <ArrowLeft /> Click
                </p>
              </div>

              <p
                className={cn(
                  "text-sm mb-1 text-left text-slate-400 tracking-wide",
                  inter.className
                )}
              >
                Using rate limited api for data and redux/toolkit to manage
                state
              </p>
              <p
                className={cn(
                  "text-sm text-left text-slate-400 tracking-wide",
                  inter.className
                )}
              >
                The products get's filtered based on filtering state stored in
                redux
              </p>
            </div>
          </article>
          <article className=" w-[300px] mxl:  border-2 drop-shadow-glow border-cyan-500 hover:scale-105 transition-all duration-300 bg-black overflow-hidden flex flex-col  text-black   rounded-lg">
            {" "}
            <img
              src="/images/dashboard.jpg"
              alt=""
              className="w-full object-cover h-full"
            />
            <div
              className={cn(
                "text-white flex p-2 items-start flex-col ",
                inter.className
              )}
            >
              <div className="w-full flex justify-start gap-2 items-start">
                <h3 className="text-2xl mb-2 bg-gradient-to-r from-[#D4145A] underline animate-bounce to-[#FBB03B] bg-clip-text text-transparent font-bold">
                  <Link href={"/dashcraft"}>DashCraft Project</Link>
                </h3>
                <p className=" text-lg tracking-wide flex justify-center items-center text-white">
                  <ArrowLeft /> Click
                </p>
              </div>

              <p
                className={cn(
                  "text-sm mb-1 text-left text-slate-400 tracking-wide",
                  inter.className
                )}
              >
                using next js power to increase performance of ui and SSR
              </p>
              <p
                className={cn(
                  "text-sm text-left text-slate-400 tracking-wide",
                  inter.className
                )}
              >
                Using next js authentication to secure webapp
              </p>
            </div>
          </article>
        </motion.section>
      </LampContainer>
    </div>
  );
}
export default Projects;
