"use client";
import DashHead from "@/components/dashcraft/DashHead";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
function page() {
  return (
    <div>
      <DashHead />
      <main className="mt-[72.8px]  flex flex-col md:flex-row">
        <div className="flex-grow hidden md:block">
          <img
            src="/images/simple.jpg"
            className="w-full object-cover h-full"
            alt="main-img"
          />
        </div>

        <AuroraBackground className="bg-black flex-grow">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative w-1/2 flex flex-col gap-4 items-center justify-center px-4"
          >
            <article className=" w-full bg-transparent  flex justify-center items-center">
              <div className="  bg-black flex flex-col justify-center  shadow-2xl shadow-black p-8 rounded-lg items-center">
                <h1 className="text-5xl text-center mb-6 font-bold bg-gradient-to-b from-gray-100 to-gray-400  bg-clip-text text-transparent">
                  DashCraft{" "}
                </h1>
                <p className="text-2xl text-center mb-2 text-white">
                  <span className="text-transparent font-bold bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg bg-clip-text ">
                    Perfect solution
                  </span>{" "}
                  to manage customers and invoices
                </p>
                <p className="mb-2 text-center text-2xl text-white">
                  login below to get started
                </p>

                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                    <Link href={"/login"}>Login</Link>
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
