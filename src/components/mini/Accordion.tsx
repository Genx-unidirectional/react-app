"use client";
import { ChevronDown } from "lucide-react";
import { ACCORDION_DATA } from "@/lib/data";
import Wrapper from "./Wrapper";
import { useState } from "react";
type Props = {
  data?: typeof ACCORDION_DATA;
};

function Accordion({ data = ACCORDION_DATA }: Props) {
  const [clickMultiple, setClickMultiple] = useState(false);
  const [idArr, setIdArr] = useState<(number | null)[]>([]);
  const [openId, setOpenId] = useState<number | null>();
  const handleClick = (id: number) => {
    if (openId === id) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };
  const MultiClick = (id: number) => {
    if (idArr.some((num) => num === id)) {
      setIdArr(idArr.filter((num) => num !== id));
    } else {
      setIdArr((prev) => [...prev, id]);
    }
  };
  return (
    <Wrapper>
      <ul className="w-full relative">
        <div className=" absolute z-10 -top-[25%] w-full flex justify-center items-center">
          {clickMultiple ? (
            <button
              onClick={() => setClickMultiple(false)}
              className="bg-white rounded-lg p-1 w-40 text-center text-black font-medium"
            >
              Open Single
            </button>
          ) : (
            <button
              onClick={() => setClickMultiple(true)}
              className="bg-white rounded-lg p-1 w-40 text-center  text-black font-medium"
            >
              Open Multiple
            </button>
          )}
        </div>
        {data.map((item) => {
          return (
            <li key={item.subject} className="">
              <div
                className="w-full justify-between flex p-1"
                onClick={() => {
                  clickMultiple ? MultiClick(item.id) : handleClick(item.id);
                }}
              >
                <label
                  htmlFor={item.subject}
                  className="text-2xl font-mono font-medium"
                >
                  {item.subject}
                </label>
                <ChevronDown />
              </div>
              {clickMultiple ? (
                idArr.some((num) => num === item.id) ? (
                  <div className="p-1 ">{item.information}</div>
                ) : null
              ) : openId === item.id ? (
                <div className="p-1 ">{item.information}</div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
export default Accordion;
