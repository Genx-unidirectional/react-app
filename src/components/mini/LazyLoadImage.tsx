import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CustomCss from "./lazyImage.module.css";
function LazyLoadImage() {
  const BgImgContainer = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  const percentContainer = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const idRef = useRef<NodeJS.Timeout>();
  const scale = useCallback(
    (
      num: number,
      in_min: number,
      in_max: number,
      out_min: number,
      out_max: number
    ) => {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    },
    []
  );
  const blurring = useCallback(() => {
    setCount((prev) => {
      if (prev > 99) {
        clearInterval(idRef.current);
        return prev;
      } else {
        return prev + 1;
      }
    });
  }, []);
  useEffect(() => {
    if (load) {
      idRef.current = setInterval(blurring, 30);
    }
    return () => clearInterval(idRef.current);
  }, [load]);
  useEffect(() => {
    if (
      BgImgContainer &&
      BgImgContainer.current &&
      percentContainer &&
      percentContainer.current
    ) {
      percentContainer.current.style.opacity = `${scale(count, 0, 100, 1, 0)}`;
      BgImgContainer.current.style.filter = `blur(${scale(
        count,
        0,
        100,
        30,
        0
      )}px)`;
    }
  }, [count]);
  return (
    <div className="lg:w-2/5 h-[300px]  sm:w-1/2 w-4/5 bg-white text-black rounded-lg border border-white   relative">
      <div
        ref={BgImgContainer}
        className={` ${CustomCss.filterbg} h-full w-full  bg-[url('/planeblur.avif')]  rounded-lg flex justify-center items-center bg-cover`}
      ></div>
      <div className="absolute flex justify-center items-center -top-12 w-full">
        <button
          onClick={() => setLoad(true)}
          className="text-lg bg-white text-black font-medium rounded-md px-2 py-1"
        >
          Load
        </button>
      </div>
      <div
        ref={percentContainer}
        className="text-black flex justify-center z-20 items-center absolute w-full h-full top-0 left-0 text-4xl font-medium"
      >
        <p>{count}%</p>
      </div>
    </div>
  );
}
export default LazyLoadImage;
