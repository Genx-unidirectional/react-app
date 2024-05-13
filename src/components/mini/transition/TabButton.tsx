import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useTransition } from "react";

type Props = {
  isActive: boolean;
  setTab: Dispatch<SetStateAction<string>>;
  tab: string;
};

function TabButton({ isActive, setTab, tab }: Props) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      className={cn(
        "p-2 text-white border rounded-lg border-white bg-black font-medium text-lg",
        {
          "border border-black bg-white  text-black": isActive,
          "opacity-65 animate-pulse": isPending,
        }
      )}
      onClick={() =>
        startTransition(() => {
          setTab(tab);
        })
      }
    >
      {tab}
    </button>
  );
}
export default TabButton;
