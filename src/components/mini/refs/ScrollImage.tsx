import { useRef, useState } from "react";
import Wrapper from "../Wrapper";

const IMAGEARRAY = [
  "/images/hero2.jpg",
  "/images/invoices.jpg",
  "/images/dash_craft_hero.jpg",
  "/images/hero-page.jpg",
  "/images/simple.jpg",
  "/images/sensei.png",
];
function ScrollImage() {
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLUListElement>(null);

  const scrollIndex = (index: number) => {
    const listNode = ref.current;
    const imgNode = listNode?.querySelectorAll("li > img")[index];
    console.log(imgNode);
    imgNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  return (
    <Wrapper className="h-3/4 overflow-hidden flex flex-col">
      <div className="flex h-full  justify-evenly items-center p-2">
        <button
          className="bg-black text-white rounded-lg text-lg p-1"
          onClick={() => {
            scrollIndex(count);
          }}
        >
          Image {count}
        </button>
        <div className="flex  gap-1 ">
          <button
            className="bg-black text-white h-10 w-10 text-3xl rounded-lg"
            onClick={() => {
              setCount((prev) => {
                if (prev < IMAGEARRAY.length - 1) {
                  return prev + 1;
                } else {
                  return prev;
                }
              });
            }}
          >
            +
          </button>
          <button
            className="bg-black text-white h-10 w-10 text-3xl rounded-lg"
            onClick={() => {
              setCount((prev) => {
                if (prev > 0) {
                  return prev - 1;
                } else {
                  return prev;
                }
              });
            }}
          >
            -
          </button>
        </div>
      </div>
      <ul
        ref={ref}
        className="list-none flex-grow overflow-y-scroll overflow-hidden  w-full"
      >
        {IMAGEARRAY.map((image, idx) => {
          return (
            <li key={`${image}miniScroll`} className="w-3/4 mx-auto h-full">
              <img src={image} alt="" className="w-full object-cover h-full" />
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
export default ScrollImage;
