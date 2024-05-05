"use client";
import DashHead from "@/components/dashcraft/DashHead";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
function page() {
  return (
    <div>
      <DashHead />
      <main className=" h-screen overflow-hidden  flex flex-col md:flex-row">
        <div className="flex-grow hidden md:block relative">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <h1 className="lg:text-5xl sm:text-3xl md:text-4xl text-center  drop-shadow-glow font-bold  ">
              <span className="bg-gradient-to-b from-white to-slate-500  bg-clip-text text-transparent">
                Boiling down
              </span>
              <span className="bg-gradient-to-b from-white to-slate-500  bg-clip-text text-transparent">
                &nbsp; the things
              </span>
              <span className="bg-gradient-to-b from-white to-slate-500  bg-clip-text text-transparent">
                &nbsp;into fundamental
              </span>
              <span className="bg-gradient-to-b from-white to-slate-500  bg-clip-text text-transparent">
                &nbsp;truths
              </span>
            </h1>
          </div>
          <img
            src="/images/simple.jpg"
            className="w-full object-cover h-full"
            alt="main-img"
          />
        </div>

        <AuroraBackground className="bg-indigo-800 h-full flex-grow">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative sm:w-1/2 w-[90%] h-screen flex flex-col gap-4 items-center justify-center px-4"
          >
            <article className="  bg-transparent  flex justify-center items-center">
              <div className="  bg-black flex flex-col justify-center  shadow-2xl shadow-black p-8 rounded-lg items-center">
                <h1 className="sm:text-5xl text-3xl text-center mb-6 font-bold bg-gradient-to-b from-gray-100 to-gray-400  bg-clip-text text-transparent">
                  DashCraft{" "}
                </h1>
                <p className="sm:text-2xl text-xl text-center mb-2 text-white">
                  <span className="text-transparent font-bold bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg bg-clip-text ">
                    Perfect solution
                  </span>{" "}
                  to manage customers and invoices
                </p>
                <p className="mb-2 text-center sm:text-2xl text-xl text-white">
                  login below to get started
                </p>

                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    <Link href={"/dashcraft/login"}>Login</Link>
                  </div>
                </button>
              </div>
            </article>
          </motion.div>
        </AuroraBackground>
      </main>
    </div>
  );
}
export default page;
