"use client";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { inter } from "./font";
import { cn } from "@/lib/utils";
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
          <article className=" w-[300px]  border-2 drop-shadow-glow border-cyan-500  bg-black overflow-hidden flex flex-col  text-black   rounded-lg">
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
              <h3 className="text-2xl mb-2">Scrolla Project</h3>
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
          <article className=" w-[300px] mxl:  border-2 drop-shadow-glow border-cyan-500  bg-black overflow-hidden flex flex-col  text-black   rounded-lg">
            {" "}
            <img
              src="/images/scroll.jpg"
              alt=""
              className="w-full object-cover h-full"
            />
            <div
              className={cn(
                "text-white flex p-2 items-start flex-col ",
                inter.className
              )}
            >
              <h3 className="text-2xl mb-2">DashCraft Project</h3>
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
        </motion.section>
      </LampContainer>
    </div>
  );
}
export default Projects;
