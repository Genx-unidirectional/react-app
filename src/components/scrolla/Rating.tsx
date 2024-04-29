import { cn } from "@/lib/utils";
import Scrolla from "./scrolla.module.css";

const arr = [1, 2, 3, 4, 5];

function Rating({ num }: { num: number }) {
  return (
    <div className="flex gap-1">
      {arr.map((item, idx) => {
        return (
          <div
            key={`${idx}rating`}
            className={cn(Scrolla.star, {
              "bg-yellow-300": Math.round(num) >= item,
            })}
          ></div>
        );
      })}
    </div>
  );
}
export default Rating;
