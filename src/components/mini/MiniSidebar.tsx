import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MINI_PROJECTS_ARR } from "@/config/mini";
function MiniSidebar() {
  return (
    <div className=" p-2 fixed h-screen  w-56 lg:w-72 top-[72.8px]   text-white ">
      <h1 className="text-2xl  lg:text-4xl  font-medium mb-4 tracking-wider">
        Mini Projects
      </h1>
      <div>
        {MINI_PROJECTS_ARR.map((name, idx) => {
          return (
            <Link
              key={idx}
              className="text-blue-500 items-center flex lg:text-xl"
              href={`#${idx.toString()}`}
            >
              {name}
              <ChevronRight />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default MiniSidebar;
