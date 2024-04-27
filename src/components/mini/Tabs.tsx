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
    content: <div>This is content for Tab 1</div>,
  },
  {
    label: "Tab 2",
    content: <div>This is content for Tab 2</div>,
  },
  {
    label: "Tab 3",
    content: <RandomComponent />,
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
              key={tab.label}
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
