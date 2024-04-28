import { cn } from "@/lib/utils";
import Wrapper from "./Wrapper";
import { useState } from "react";

type Props = {
  data?: {
    label: string;
    content: React.ReactNode;
  }[];
};
const tabs = [
  {
    label: "Tab 1",
    content: (
      <div className="w-full text-white rounded-lg p-4 gap-2 h-200 bg-black flex flex-col">
        <p className="text-red-200 font-medium">
          This is tab 1 which have info about telling you that it's coming for
          you!
        </p>
        <button className="w-full p-1 rounded-lg text-white bg-red-500">
          Click To Escape
        </button>
      </div>
    ),
  },
  {
    label: "Tab 2",
    content: (
      <div className="w-full text-white rounded-lg p-4 gap-2 h-200 bg-black flex flex-col">
        <p className="text-yellow-200 font-medium">
          This is tab 2 here the hallucination are on pick one take you up
          ,another take you down.
        </p>
        <button className="w-full p-1 rounded-lg text-black bg-yellow-500">
          Click For Clearance
        </button>
      </div>
    ),
  },
  {
    label: "Tab 3",
    content: (
      <div className="w-full text-white rounded-lg p-4 gap-2 h-200 bg-black flex flex-col">
        <p className="text-green-200 font-medium">
          I think you made here safe so far now i am trying to appreciate but
          see you later.
        </p>
        <button className="w-full p-1 rounded-lg text-white bg-green-500">
          Next Adventure
        </button>
      </div>
    ),
  },
];

function Tabs({ data = tabs }: Props) {
  const [index, setIndex] = useState(0);
  return (
    <Wrapper className="gap-2 flex flex-col ">
      <div className="w-full flex justify-between  items-center">
        {data.map((tab, idx) => {
          return (
            <button
              key={`${tab.label}taber`}
              onClick={() => setIndex(idx)}
              className={cn(
                "h-12 text-white p-2 rounded-lg font-bold text-2xl text-center",
                {
                  "bg-red-600": tab.label === "Tab 1",
                  "bg-yellow-300 text-black": tab.label === "Tab 2",
                  "bg-green-500": tab.label === "Tab 3",
                }
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="w-full text-center text-black font-bold bg-white">
        {data[index].content}
      </div>
    </Wrapper>
  );
}
export default Tabs;

function RandomComponent() {
  return <h2>Here is random component</h2>;
}
