import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MINI_PROJECTS_ARR } from "@/config/mini";
function MiniSidebar() {
  return (
    <div className=" p-2 sticky top-[72.8px]  w-56 lg:w-72   text-white ">
      <div className="sticky top-0">
        <div className="overflow-y-scroll overscroll-contain">
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
      </div>
    </div>
  );
}
export default MiniSidebar;
