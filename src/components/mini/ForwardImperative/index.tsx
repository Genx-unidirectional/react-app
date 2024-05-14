import { useEffect, useRef } from "react";
import ControlInput from "./ControlOutside";
import { RefType } from "./ControlOutside";
import Wrapper from "../Wrapper";
function RefWithImperative() {
  const ref = useRef<RefType>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return (
    <Wrapper className="flex gap-3 flex-col p-2 ">
      <div className="w-full">
        <ControlInput ref={ref} />
      </div>
      <div className="flex-grow">
        <p className="text-slate-700 ">
          Above is type safe input field which is a another component who get's
          the focus when it got rendered and it's dom node is manipulated by the
          parent component because this component is made using the forwardRef
          and also the methods on that ref is limited by the input field
          component{" "}
        </p>
      </div>
    </Wrapper>
  );
}
export default RefWithImperative;
