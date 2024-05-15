import { useCallback, useEffect, useRef } from "react";
import Wrapper from "./Wrapper";

function StickyCursor() {
  const container = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  const cursorSetter = useCallback((top: number, left: number) => {
    if (refContainer && refContainer.current) {
      refContainer.current.style.top = `${top}px`;
      refContainer.current.style.left = `${left}px`;
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (container.current) {
        const rect = container.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        if (offsetX > rect.width - 28 || offsetY > rect.height - 28) {
          return;
        }
        setTimeout(() => {
          cursorSetter(offsetY, offsetX);
        }, 100);
      }
    };

    if (container.current) {
      container.current.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (container.current) {
        container.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [cursorSetter]);

  return (
    <div
      ref={container}
      className="relative md:w-[75%] px-5 text-black flex flex-col justify-center items-center  w-4/5 bg-white rounded-lg lg:w-1/2 h-[300px]  "
    >
      {" "}
      <h1 className="lg:text-3xl font-bold md:text-2xl text-xl">
        Welcome To Today
      </h1>
      <p className="md:text-lg lg:text-xl text-center">
        Glad you recognize that today is the day and you up for it!
      </p>
      <div
        ref={refContainer}
        className="rounded-full z-10 absolute w-7 h-7 bg-gradient-to-r from-purple-200 to bg-purple-900"
      ></div>
    </div>
  );
}
export default StickyCursor;
