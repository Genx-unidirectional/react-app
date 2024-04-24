import { ReactElement } from "react";

function page() {
  const componentArr: ReactElement[] = [];
  return (
    <div className="mt-[56.8px] text-white">
      {componentArr.map((component, idx) => {
        return (
          <div key={idx} id={idx.toString()} className="h-full w-full"></div>
        );
      })}
    </div>
  );
}
export default page;
