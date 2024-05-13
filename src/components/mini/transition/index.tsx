import { useState, useTransition } from "react";
import Wrapper from "../Wrapper";
import AboutTab from "./AboutTab";
import PostsTab from "./PostsTab";
import Contacts from "./Contacts";
import TabButton from "./TabButton";

const TABS: { tab: string; component: JSX.Element }[] = [
  {
    tab: "About",
    component: <AboutTab />,
  },
  {
    tab: "Posts",
    component: <PostsTab />,
  },
  {
    tab: "Contacts",
    component: <Contacts />,
  },
];
function TabTransition() {
  const [tab, setTab] = useState<string>("About");
  const [isPending, startTransition] = useTransition();
  const selectTab = (nextTab: string) => {
    startTransition(() => {
      setTab(nextTab);
    });
  };
  return (
    <Wrapper className="h-[400px] overflow-hidden">
      <div className=" w-full flex justify-evenly">
        {TABS.map((item) => {
          return (
            <TabButton
              key={`${item.tab}mini12`}
              isActive={tab === item.tab}
              selectTab={selectTab}
              tab={item.tab}
            />
          );
        })}
      </div>
      <div className="flex-grow h-full overflow-hidden  overflow-y-scroll p-4">
        {TABS.map((item, idx) => {
          if (item.tab === tab) {
            return item.component;
          }
        })}
      </div>
    </Wrapper>
  );
}
export default TabTransition;
