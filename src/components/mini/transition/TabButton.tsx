import { cn } from "@/lib/utils";

type Props = {
  isActive: boolean;
  selectTab: (nextTab: string) => void;
  tab: string;
};

function TabButton({ isActive, selectTab, tab }: Props) {
  return (
    <button
      className={cn(
        "p-2 text-white border rounded-lg border-white bg-black font-medium text-lg",
        {
          "border border-black bg-white  text-black": isActive,
        }
      )}
      onClick={() => selectTab(tab)}
    >
      {tab}
    </button>
  );
}
export default TabButton;
