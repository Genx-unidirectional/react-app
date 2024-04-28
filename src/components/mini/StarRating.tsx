import { useState } from "react";
import Wrapper from "./Wrapper";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  ratingNumber?: number;
};
function StarRating({ ratingNumber }: Props) {
  const [index, setIndex] = useState<number>(0);
  const [hoverIdx, setHoverIdx] = useState<number>(0);
  const mouseMoveHandle = (idx: number) => {
    setHoverIdx(idx);
  };
  const handleClick = (idx: number) => {
    setIndex(idx);
  };
  return (
    <Wrapper>
      <div>
        <p className="font-medium text-xl">
          Thank you for using our product please rate us and let us know we need
          to improve or not.
        </p>
      </div>
      <div
        onMouseLeave={() => mouseMoveHandle(0)}
        className="w-full flex h-12 justify-center items-center gap-2"
      >
        {"abcde".split("").map((str, idx) => {
          idx += 1;
          return (
            <button
              onMouseMove={() => mouseMoveHandle(idx)}
              onClick={() => setIndex(idx)}
              key={`star${idx}`}
              className={cn(
                "h-8 bg-white",
                idx <= (hoverIdx || index) ? "bg-yellow-300" : "bg-white"
              )}
            >
              <StarIcon className="w-7 h-7 " />
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
}
export default StarRating;
