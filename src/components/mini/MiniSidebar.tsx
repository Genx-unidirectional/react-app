import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MINI_PROJECTS_ARR } from "@/config/mini";
function MiniSidebar() {
  return (
    <div className=" p-2 text-white">
      <h1 className="text-2xl lg:text-4xl font-medium mb-4 tracking-wider">
        Mini Projects
      </h1>
      <div>
        {MINI_PROJECTS_ARR.map((name, idx) => {
          return (
            <Link
              key={idx}
              className="text-blue-500 flex lg:text-xl"
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
